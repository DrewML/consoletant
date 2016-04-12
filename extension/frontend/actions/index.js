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
