import './App.css';
import MonacoEditor from 'react-monaco-editor';

function App() {
  return (
    <div className="App">
      <div className="App-main">
        <MonacoEditor
          width="800"
          height="600"
          language="javascript"
          theme="vs-dark"
          value={""}
          options={{}}
          onChange={()=>{}}
          editorDidMount={()=>{}}
          overrideServices={{
            storageService: {
              get() {},
              remove() {},
              getBoolean(key) {
                return true;
              },
              store() {},
              onWillSaveState() {},
              onDidChangeStorage() {},
              onDidChangeValue() {}
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
