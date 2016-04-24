import 'font-awesome/css/font-awesome.css';
import React, { Component } from 'react';
import LogList from '../../containers/Logs';
import FilterBar from '../../containers/FilterBar';
import CodePanel from '../CodePanel';

export default function App() {
    return (
        <section className="app">
            <FilterBar />
            <LogList />
            <CodePanel />
        </section>
    );
}
