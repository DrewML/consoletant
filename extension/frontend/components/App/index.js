import React, { PropTypes } from 'react';
import LogList from '../LogList';

export default function App({ logs }) {
    return <LogList logs={logs} />;
}

App.propTypes = {
    logs: PropTypes.array.isRequired
};
