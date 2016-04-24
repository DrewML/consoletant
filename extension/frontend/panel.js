import './panel.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import consoleApp from './reducers';
import { addLogItem } from './actions';
import parser from './stackparser';
import { onMessage } from './connection';
import App from './components/App';

const store = createStore(consoleApp);

onMessage(({ stack, args, id, time, type }) => {
    const parsedStack = parser(stack);
    const logItem = {
        caller: parsedStack[0],
        stack: parsedStack,
        time,
        args,
        id,
        type
    };
    store.dispatch(addLogItem(logItem));
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('.app-wrapper')
);
