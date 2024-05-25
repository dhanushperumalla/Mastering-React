import { useState } from "react";
import "./app.css";

function App() {
  let [count, setCount] = useState(0);
  const add = () => {
    // setCount(count + 1); //how many times we call then incriments only once
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1); // in this method how many times we call that many times renders
    setCount((prevCount) => prevCount + 1); // adds at a time 3times
  };
  const subtract = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount((count = 0));
  };
  return (
    <div className="container">
      <h1>Counter Value</h1>
      <h2>{count}</h2>
      <div className="button">
        <button onClick={add}>Add</button>
        <button onClick={reset}>Reset</button>
        <button onClick={subtract}>Subtract</button>
      </div>
    </div>
  );
}

export default App;
