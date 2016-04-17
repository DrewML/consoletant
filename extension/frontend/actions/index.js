export const addLogItem = log => ({
    type: 'ADD_LOG_ITEM',
    log
});

export const addMessageTypeFilter = logType => ({
    type: 'ADD_MESSAGE_TYPE_FILTER',
    logType
});

export const removeMessageTypeFilter = logType => ({
    type: 'REMOVE_MESSAGE_TYPE_FILTER',
    logType
});

export const addRegexFilter = pattern => ({
    type: 'ADD_REGEX_FILTER',
    pattern: pattern
});

export const clearLogs = () => ({
    type: 'CLEAR_LOGS'
});
