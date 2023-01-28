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
        />
      </div>
    </div>
  );
}

export default App;
