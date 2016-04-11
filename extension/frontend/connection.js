const connection = chrome.runtime.connect({
    name: 'devtools_page'
});

connection.postMessage({
    name: 'init',
    tabId: chrome.devtools.inspectedWindow.tabId
});

const listeners = new Set();

connection.onMessage.addListener(function(...args) {
    for (const listener of listeners) {
        listener(...args);
    }
});

export function onMessage(cb) {
    listeners.add(cb);
}
