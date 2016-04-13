import React, { PropTypes } from 'react';
import LogRow from '../LogRow';

export default function LogList({ logs }) {
    return (
        <ul className="log-list">
            {logs.map(log =>
                <li key={log.id}>
                    <LogRow
                        caller={log.caller}
                        args={log.args}
                        time={log.time}
                        type={log.type}
                    />
                </li>
            )}
        </ul>
    );
}

LogList.propTypes = {
    logs: PropTypes.array.isRequired
};
