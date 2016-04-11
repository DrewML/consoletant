import React, { PropTypes } from 'react';
import LogRow from '../LogRow';

export default function LogList({ logs }) {
    return (
        <ul className="log-list">
            {logs.map(log =>
                <li key={log.id}>
                    <LogRow
                        callInfo={log.callInfo}
                        args={log.args}
                        time={log.time}
                    />
                </li>
            )}
        </ul>
    );
}

LogList.propTypes = {
    logs: PropTypes.array.isRequired
};
