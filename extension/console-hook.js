let nextId = 0;

window.addEventListener('message', ({ data }) => {
    // TODO: Determine why chrome.runtime.sendMessage is occasionally non-existent
    if (data && data.consoletant && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage({
            stack: data.stack,
            args: data.args,
            type: data.type,
            id: nextId++,
            time: new Date().toLocaleTimeString()
        });
    }
});

runFnInPage(function() {
    const onLog = (logData) => {
        window.postMessage(Object.assign({
            consoletant: true
        }, logData), '*');
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
