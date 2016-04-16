import { connect } from 'react-redux';
import { addMessageTypeFilter, removeMessageTypeFilter } from '../actions';
import MessageTypeFilter from '../components/MessageTypeFilter';

// TODO: Find a real home for this
const messageTypes = [{
    value: 'warn',
    displayName: 'Warn'
}, {
    value: 'info',
    displayName: 'Info'
}, {
    value: 'debug',
    displayName: 'Debug'
}, {
    value: 'log',
    displayName: 'Log'
}, {
    value: 'error',
    displayName: 'Error'
}];

const mapStateToProps = state => {
    return {
        selectedTypes: state.filters.type,
        types: messageTypes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onEnable: type => dispatch(addMessageTypeFilter(type)),
        onDisable: type => dispatch(removeMessageTypeFilter(type))
    };
};

const MessageTypeFilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageTypeFilter);

export default MessageTypeFilterContainer;
