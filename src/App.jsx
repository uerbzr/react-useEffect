import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Running on empty array");
  }, []);

  //[] is the dependency array - what should we listen to?

  useEffect(() => {
    console.log("Running on count", count);
  }, [count]);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          - Decrement
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          + Increment
        </button>
      </div>
    </>
  );
}

export default App;

//side effects: things having side effects of something else e.g. state changing
