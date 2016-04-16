import { connect } from 'react-redux';
import { addRegexFilter } from '../actions';
import MessageRegexFilter from '../components/MessageRegexFilter';

const mapDispatchToProps = dispatch => {
    return {
        onChange: pattern => dispatch(addRegexFilter(pattern))
    };
};

const MessageRegexFilterContainer = connect(
    null,
    mapDispatchToProps
)(MessageRegexFilter);

export default MessageRegexFilterContainer;
