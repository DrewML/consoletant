const logs = (state = [], action) => {
    switch (action.type) {
        case 'ADD_LOG_ITEM':
            return [
                ...state,
                action.log
            ];
        case 'FILTER_BY_REGEX':
            return state.filter(log => (
                action.pattern.test(log.args.join(' '))
            ));
        default:
            return state;
    }
};

export default logs;
