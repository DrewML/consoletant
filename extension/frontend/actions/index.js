export const addLogItem = log => {
    return {
        type: 'ADD_LOG_ITEM',
        log
    };
};

export const filterByRegex = pattern => {
    return {
        type: 'FILTER_BY_REGEX',
        pattern: new RegExp(pattern)
    }
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
