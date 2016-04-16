import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import debounce from 'lodash.debounce';

export default class MessageRegexFilter extends Component {
    constructor() {
        super();
        this.onTextChange = this.onTextChange.bind(this);
        this.notifyOnChange = this.notifyOnChange().bind(this);
        this.state = {
            value: ''
        };
    }

    render() {
        const { placeholder } = this.props;

        return (
            <div>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={this.state.value}
                    onChange={this.onTextChange}
                />
            </div>
        );
    }

    onTextChange(e) {
        this.setState({ value: e.target.value });
        this.notifyOnChange(e.target.value);
    }

    notifyOnChange() {
        return debounce(val => (this.props.onChange(val)), 300);
    }
}

MessageRegexFilter.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};
