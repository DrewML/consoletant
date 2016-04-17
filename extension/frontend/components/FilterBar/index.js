import './styles.css';
import React, { PropTypes } from 'react';
import MessageTypeFilter from '../MessageTypeFilter';
import MessageRegexFilter from '../MessageRegexFilter';

export default function FilterBar(props) {
    const {
        onEnableTypeFilter,
        onDisableTypeFilter,
        onRegexChange,
        types,
        selectedTypes,
        onClear
    } = props;

    return (
        <div className="filter-bar">
            <button
                className="filter-bar__clear"
                type="button"
                title="Clear"
                onClick={onClear}
            >
                <i className="fa fa-ban" aria-hidden="true"></i>
            </button>
            <MessageRegexFilter
                onChange={onRegexChange}
                placeholder="RegEx"
            />
            <MessageTypeFilter
                onEnable={onEnableTypeFilter}
                onDisable={onDisableTypeFilter}
                types={types}
                selectedTypes={selectedTypes}
            />
        </div>
    );
}

FilterBar.propTypes = {
    onClear: PropTypes.func.isRequired,
    onEnableTypeFilter: PropTypes.func.isRequired,
    onDisableTypeFilter: PropTypes.func.isRequired,
    onRegexChange: PropTypes.func.isRequired,
    types: PropTypes.arrayOf(PropTypes.shape({
        displayName: PropTypes.string,
        value: PropTypes.string.isRequired
    })).isRequired,
    selectedTypes: PropTypes.arrayOf(PropTypes.string).isRequired
};
