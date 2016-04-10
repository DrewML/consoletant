window.addEventListener('message', ({ data }) => {
    if (data && data.consoletant) {
        chrome.runtime.sendMessage({
            stack: data.stack,
            args: data.args
        });
    }
});

runFnInPage(function() {
    const oldLog = console.log;
    const onLog = (stack, args) => {
        window.postMessage({
            consoletant: true,
            stack,
            args
        }, '*');
    };

    console.log = function(...args) {
        oldLog.apply(this, args);
        onLog(new Error().stack, args);
    };
});

function runFnInPage(fn) {
    const script = document.createElement('script');
    script.textContent = `;(${fn.toString()}(window))`;
    document.documentElement.appendChild(script);
    script.parentNode.removeChild(script);
}
