import './styles.css';
import React, { PropTypes } from 'react';

export default function EditorToolbar({ onRunClick }) {
    return (
        <div className="editor-toolbar">
            <button
                type="button"
                className="editor-toolbar__run"
            >
                <i className="fa fa-play" aria-hidden="true"></i>
            </button>
        </div>
    );
};

EditorToolbar.propTypes = {
    onRunClick: PropTypes.func.isRequired
};
