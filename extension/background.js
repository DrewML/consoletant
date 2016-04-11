const connections = new Map();

chrome.runtime.onConnect.addListener(port => {
    const extensionListener = (message, sender, sendResponse) => {
        if (message.name === 'init') {
            connections.set(message.tabId, port);
        }
    };

    port.onMessage.addListener(extensionListener);

    port.onDisconnect.addListener(port => {
        port.onMessage.removeListener(extensionListener);

        for (const [id, curPort] of connections) {
            if (curPort === port) connections.delete(id);
        }
    });
});

chrome.runtime.onMessage.addListener((req, sender) => {
    if (!sender.tab) return;

    const { id } = sender.tab;
    if (connections.has(id)) {
        connections.get(id).postMessage(req);
    }

    return true;
});
