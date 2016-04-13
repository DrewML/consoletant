import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

export default class MessageTypeFilter extends Component {
    render() {
        const { types, selectedTypes } = this.props;

        return (
            <div className="message-type-filter">
                {types.map(({ displayName, value }) =>
                    <button
                        key={value}
                        type="button"
                        onClick={this.onClick(value)}
                        className={this.buttonClasses(value)}
                    >
                        {displayName || value}
                    </button>
                )}
            </div>
        );
    }

    buttonClasses(val) {
        return classNames({
            'message-type-filter__btn_selected': this.props.selectedTypes.includes(val),
            'message-type-filter__btn': true
        });
    }

    onClick(value) {
        const { selectedTypes, onEnable, onDisable } = this.props;

        return () => {
            const targetFunc = selectedTypes.includes(value) ? onDisable : onEnable;
            targetFunc(value);
        };
    }
}

MessageTypeFilter.propTypes = {
    onEnable: PropTypes.func.isRequired,
    onDisable: PropTypes.func.isRequired,
    types: PropTypes.arrayOf(PropTypes.shape({
        displayName: PropTypes.string,
        value: PropTypes.string.isRequired
    })).isRequired,
    selectedTypes: PropTypes.arrayOf(PropTypes.string).isRequired
};
