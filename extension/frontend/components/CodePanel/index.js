import './styles.css';
import EditorToolbar from '../EditorToolbar';
import CodeEditor from '../CodeEditor';
import React, { PropTypes } from 'react';

export default function CodePanel({ onRun }) {
    return (
        <section className="code-panel">
            <EditorToolbar />
            <CodeEditor />
        </section>
    );
}

CodePanel.propTypes = {
    onRun: PropTypes.func.isRequired
};
