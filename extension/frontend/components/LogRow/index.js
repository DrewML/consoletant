import React, { PropTypes } from 'react';

export default function LogRow({ callInfo, args, time }) {
    return (
        <tr>
            <td>{time}</td>
            <td>{JSON.stringify(args)}</td>
            <td>
                {callInfo.fileName}:{callInfo.line}:{callInfo.column}
            </td>
        </tr>
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
