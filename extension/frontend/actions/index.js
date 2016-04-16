export const addLogItem = log => {
    return {
        type: 'ADD_LOG_ITEM',
        log
    };
};

export const addMessageTypeFilter = logType => {
    return {
        type: 'ADD_MESSAGE_TYPE_FILTER',
        logType
    };
}

export const removeMessageTypeFilter = logType => {
    return {
        type: 'REMOVE_MESSAGE_TYPE_FILTER',
        logType
    }
};

export const addRegexFilter = pattern => {
    return {
        type: 'ADD_REGEX_FILTER',
        pattern: pattern
    };
};
