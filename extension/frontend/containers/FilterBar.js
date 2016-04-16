import { connect } from 'react-redux';
import {
    addMessageTypeFilter,
    removeMessageTypeFilter,
    addRegexFilter
} from '../actions';
import FilterBar from '../components/FilterBar';

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

const mapStateToProps = state => ({
    selectedTypes: state.filters.type,
    types: messageTypes
});

const mapDispatchToProps = dispatch => ({
    onEnableTypeFilter: type => dispatch(addMessageTypeFilter(type)),
    onDisableTypeFilter: type => dispatch(removeMessageTypeFilter(type)),
    onRegexChange: pattern => dispatch(addRegexFilter(pattern))
});

const FilterBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterBar);

export default FilterBarContainer;
