const defaultState = {
    type: [],
    regex: ''
};

const filters = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE_TYPE_FILTER':
            return {
                ...state,
                type: [
                    ...state.type,
                    action.logType
                ]
            };
        case 'REMOVE_MESSAGE_TYPE_FILTER':
            return {
                ...state,
                type: state.type.filter(type => action.logType !== type)
            }
        case 'ADD_REGEX_FILTER':
            console.log('ADD_REGEX_FILTER');
            return {
                ...state,
                regex: action.pattern
            };
        default:
            return state;
    }
};

export default filters;
