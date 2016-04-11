import React, { PropTypes } from 'react';
import LogGrid from '../LogGrid';

export default function App({ logs }) {
    return <LogGrid logs={logs} />;
}

App.propTypes = {
    logs: PropTypes.array.isRequired
};
