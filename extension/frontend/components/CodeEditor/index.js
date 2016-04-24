import './styles.css';
import React, { PropTypes, Component } from 'react';
import ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/chrome';

export default class CodeArea extends Component {
    constructor() {
        super();
        this.cacheEditorRef = this.cacheEditorRef.bind(this);
    }

    render() {
        return (
            <div className="code-editor" ref={this.cacheEditorRef}></div>
        );
    }

    cacheEditorRef(ref) {
        this.targetNode = ref;
    }

    shouldComponentUpdate() {
        // Rendering all handled by Ace directly
        return false;
    }

    componentDidMount() {
        const editor = this.editor = ace.edit(this.targetNode);
        editor.getSession().setMode('ace/mode/javascript');
        editor.setTheme('ace/theme/chrome');
        editor.setShowPrintMargin(false);
        editor.on('change', this.onCodeEdit.bind(this));
    }

    onCodeEdit() {
        console.log(this.editor.getValue());
        // this.props.onChange(this.editor.getValue());
    }

    componentWillUnmount() {
        this.editor.destroy();
    }
}

CodeArea.propTypes = {
    onChange: PropTypes.func
};
