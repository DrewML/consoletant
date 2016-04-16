import { combineReducers } from 'redux';
import logs from './logs';
import filters from './filters';

const consoleApp = combineReducers({
    logs,
    filters
});

export default consoleApp;
