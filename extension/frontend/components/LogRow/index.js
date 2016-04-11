import React, { PropTypes } from 'react';

export default function LogRow({ callInfo, args, time }) {
    return (
        <div className="log-row">
            <div className="log-row__time">{time}</div>
            <div className="log-row__message">{args.join(' ')}</div>
            <div className="log-row__location">
                {callInfo.fileName}:{callInfo.line}:{callInfo.column}
            </div>
        </div>
    );
}

LogRow.propTypes = {
    callInfo: PropTypes.shape({
        fileName: PropTypes.string.isRequired,
        callContext: PropTypes.string.isRequired,
        line: PropTypes.number.isRequired,
        column: PropTypes.number.isRequired
    }).isRequired,
    args: PropTypes.array.isRequired,
    time: PropTypes.string.isRequired
};
