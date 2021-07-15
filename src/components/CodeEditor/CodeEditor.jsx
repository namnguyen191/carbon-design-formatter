import MonacoEditor from '@monaco-editor/react';
import React, { useRef } from 'react';

const CodeEditor = (props) => {
  const { initialValue, onChange, language } = props;
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const handleEditorChange = (value, event) => {
    if (onChange) onChange(value);
  };

  return (
    <div className="editor-wrapper">
      <MonacoEditor
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
        value={initialValue}
        theme="vs-dark"
        language={language ?? 'javascript'}
        height="100%"
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2
        }}
      />
    </div>
  );
};

export default CodeEditor;
