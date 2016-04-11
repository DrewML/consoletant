const logs = (state = [], action) => {
    switch (action.type) {
        case 'ADD_LOG_ITEM':
            return [
                ...state,
                action.log
            ];
        default:
            return state;
    }
};

export default logs;
