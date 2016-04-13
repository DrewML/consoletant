import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import LogList from './containers/Logs';
import MessageTypeFilter from './containers/MessageTypeFilter';
import consoleApp from './reducers';
import { addLogItem } from './actions';
import parser from './stackparser';
import { onMessage } from './connection';

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
        <section>
            <MessageTypeFilter />
            <LogList />
        </section>
    </Provider>,
    document.querySelector('.app')
);
