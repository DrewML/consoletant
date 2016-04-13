let nextId = 0;

window.addEventListener('message', ({ data }) => {
    if (data && data.consoletant) {
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
    const onLog = (type, stack, args) => {
        window.postMessage({
            consoletant: true,
            stack,
            args,
            type
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
            original.apply(this, args);
            onLog(target, new Error().stack, args);
        };
    });
});

function runFnInPage(fn) {
    const script = document.createElement('script');
    script.textContent = `;(${fn.toString()}(window))`;
    document.documentElement.appendChild(script);
    script.parentNode.removeChild(script);
}
