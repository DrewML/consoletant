import stackparser from './stackparser';

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
