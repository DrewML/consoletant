import { combineReducers } from 'redux';
import logs from './logs';
import typeFilters from './type-filters';

const consoleApp = combineReducers({
    logs,
    typeFilters
});

export default consoleApp;
