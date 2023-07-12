import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
 
  return (
    <>
      <div className="main">
        <button className="btn1" onClick={() => setCount(count + 1)}>
          +
        </button>
       <span> {count}</span>
        <button className="btn2" onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </>
  );
}
