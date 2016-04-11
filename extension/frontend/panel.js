import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import App from './containers/App';
import consoleApp from './reducers';
import { addLogItem } from './actions';
import parser from './stackparser';
import { onMessage } from './connection';

const store = createStore(consoleApp);

onMessage(({ stack, args, id, time }) => {
    const parsedStack = parser(stack);
    const logItem = {
        caller: parsedStack[0],
        stack: parsedStack,
        time,
        args,
        id
    };
    store.dispatch(addLogItem(logItem));
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('.app')
);
