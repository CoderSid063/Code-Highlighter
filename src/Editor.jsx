import { useState } from "react";
// import Prism from "prismjs";
// import "prismjs/themes/prism.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

function Editor() {
  const [code, setCode] = useState("");

  // useEffect(() => {
  //   Prism.highlightAll();
  // }, [code]);

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code_container">
      <div className="editor">
        <textarea
          value={code}
          onChange={handleChange}
          style={{ width: "100%", height: "300px", fontFamily: "monospace" }}
          placeholder="Type your code here..."
        />
      </div>
      <div className="editor">
        {/* <pre className="language-javascript">
          <code className="language-javascript">{code}</code>
        </pre> */}
        <SyntaxHighlighter language="jsx" style={okaidia}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default Editor;
