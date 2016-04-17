let nextId = 0;

window.addEventListener('message', ({ data: { consoletant, details } }) => {
    if (!consoletant) return;

    chrome.runtime.sendMessage(Object.assign({
        id: nextId++,
        time: new Date().toLocaleTimeString()
    }, details));
});

runFnInPage(function() {
    window.addEventListener('error', data => {
        window.postMessage({
            consoletant: true,
            details: {
                stack: data.error.stack,
                args: [data.message],
                type: 'error'
            }
        }, '*');
    });

    const onLog = (logData) => {
        window.postMessage({
            consoletant: true,
            details: logData
        }, '*');
    };

    const targets = [
        'log',
        'warn',
        'info',
        'debug',
        'error'
    ];

    const oldMethods = targets.forEach(target => {
        const original = console[target];
        console[target] = function(...args) {
            onLog({
                type: target,
                stack: new Error().stack,
                args
            });
            // TODO: Find any magical Chrome trick/loophole that will show the actual
            // call site in the "normal" console, rather than the location where we invoke
            // the original console methods
            return original.apply(this, args);
        };
    });
});

function runFnInPage(fn) {
    const script = document.createElement('script');
    script.textContent = `;(${fn.toString()}(window))`;
    document.documentElement.appendChild(script);
    script.parentNode.removeChild(script);
}
