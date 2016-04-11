import { render } from 'react-dom';
import React from 'react';
import App from './components/App';
import parser from './stackparser';
import { onMessage } from './connection';

const messages = [];

onMessage(({ stack, args }) => {
    messages.push({
        args,
        callInfo: parser(stack)[0],
        time: new Date().toLocaleTimeString()
    });
    renderApp(messages);
    console.log(messages[messages.length - 1].callInfo);
});

renderApp(messages);

function renderApp(logs) {
    return render(
        <App logs={logs} />,
        document.querySelector('.app')
    );
}
