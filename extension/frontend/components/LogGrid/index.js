import React, { PropTypes } from 'react';
import LogRow from '../LogRow';

export default function LogGrid({ logs }) {
    return (
        <table className="log-grid">
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Message</th>
                    <th>From</th>
                </tr>
            </thead>
            <tbody>
                {logs.map(log =>
                    <LogRow
                        callInfo={log.callInfo}
                        args={log.args}
                        time={log.time}
                    />
                )}
            </tbody>
        </table>
    );
}

LogGrid.propTypes = {
    logs: PropTypes.array.isRequired
};
