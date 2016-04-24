import 'font-awesome/css/font-awesome.css';
import React, { Component } from 'react';
import LogList from '../../containers/Logs';
import FilterBar from '../../containers/FilterBar';
import CodeEditor from '../CodeEditor';
import EditorToolbar from '../EditorToolbar';

export default function App() {
    return (
        <section className="app">
            <FilterBar />
            <LogList />
            <EditorToolbar />
            <CodeEditor />
        </section>
    );
}
