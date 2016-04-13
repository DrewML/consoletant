import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { ObjectInspector } from 'react-inspector';

// TODO: location uri should open sources panel
// https://developer.chrome.com/extensions/devtools_panels#method-openResource

export default function LogRow({ caller, args, time, type }) {
    const messageDisplay = (args) => {
        return (
            <div>
                {args.map(arg =>
                    typeof arg === 'object' ?
                        <ObjectInspector data={arg} /> :
                        <span>{arg}</span>
                )}
            </div>
        );
    };

    const rowClass = classNames('log-row', `log-row_${type}`);

    return (
        <div className={rowClass}>
            <div className="log-row__time">{time}</div>
            <div className="log-row__message">{messageDisplay(args)}</div>
            <div className="log-row__location">
                {caller.fileName}:{caller.line}:{caller.column}
            </div>
        </div>
    );
}

LogRow.propTypes = {
    caller: PropTypes.shape({
        fileName: PropTypes.string.isRequired,
        callContext: PropTypes.string.isRequired,
        line: PropTypes.number.isRequired,
        column: PropTypes.number.isRequired
    }).isRequired,
    args: PropTypes.array.isRequired,
    time: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};
