import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { MDXProvider } from "@mdx-js/react";
import Post from "./post.mdx";

function App() {
  const [count, setCount] = useState(0);
  const components = {
    em: (props) => <i {...props} />,
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
      <MDXProvider components={components}>
        <Post />
      </MDXProvider>
    </div>
  );
}

export default App;
