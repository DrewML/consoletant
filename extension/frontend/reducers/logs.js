const logs = (state = [], action) => {
    switch (action.type) {
        case 'ADD_LOG_ITEM':
            return [
                ...state,
                action.log
            ];
        case 'CLEAR_LOGS':
            return [];
        default:
            return state;
    }
};

export default logs;
