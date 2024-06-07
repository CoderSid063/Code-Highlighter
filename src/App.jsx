import "./App.css";
import Editor from "./Editor";

function App() {
  return (
    <div className="container">
      <h1>Code Highlighter</h1>
      <div className="innercontainer">
        <Editor />
      </div>
    </div>
  );
}

export default App;
