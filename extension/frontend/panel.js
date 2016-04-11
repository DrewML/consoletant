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
let nextId = 0;

onMessage(({ stack, args }) => {
    const item = {
        args,
        callInfo: parser(stack)[0],
        time: new Date().toLocaleTimeString(),
        id: nextId++
    };
    store.dispatch(addLogItem(item));
    renderApp();
});

renderApp();

function renderApp() {
    return render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.querySelector('.app')
    );
}
