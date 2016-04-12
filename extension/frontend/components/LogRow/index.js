import React, { PropTypes } from 'react';

// TODO: location uri should open sources panel
// https://developer.chrome.com/extensions/devtools_panels#method-openResource

export default function LogRow({ caller, args, time }) {
    return (
        <div className="log-row">
            <div className="log-row__time">{time}</div>
            <div className="log-row__message">{args.join(' ')}</div>
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
    time: PropTypes.string.isRequired
};
