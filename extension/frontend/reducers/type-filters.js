const typeFilters = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MESSAGE_TYPE_FILTER':
            return [
                ...state,
                action.logType
            ];
        case 'REMOVE_MESSAGE_TYPE_FILTER':
            return state.filter(type => action.logType !== type);
        default:
            return state;
    }
};

export default typeFilters;
