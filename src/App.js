import React, { useState } from "react";
import "./app.css";
function App() {
  const [count, setCount] = useState(0);
  const minusCount = () => setCount(count - 1);
  const plusCount = () => setCount(count + 1);
  return (
    <div className="Container">
      <h2 className="title">Count:</h2>
      <p className="text">{count}</p>
      <div className="btns">
        <button onClick={minusCount} className="minusBtn">
          Minus
        </button>
        <button onClick={plusCount} className="plusBtn">
          Plus
        </button>
      </div>
    </div>
  );
}

export default App;
