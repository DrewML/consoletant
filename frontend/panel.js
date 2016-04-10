const connection = chrome.runtime.connect({
    name: 'devtools_page'
});

connection.postMessage({
    name: 'init',
    tabId: chrome.devtools.inspectedWindow.tabId
});

connection.onMessage.addListener(function({ stack, args }) {
    document.body.innerHTML = `${stack}\n${document.body.innerHTML}\n`;
});

function getRealTargetLocation(stack) {
    const secondLineTest = /Error\s+at .+\s\s+at (.+)/;
    const [, secondLine] = (secondLineTest.exec(stack) || []);
    return secondLine
}
