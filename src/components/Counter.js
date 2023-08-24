import React, { useState } from "react";

const Counter = ({ initial }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const restart = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        border: "1px solid",
        borderRadius: "10px",
        padding: "8px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div>
        <span style={{ marginBottom: "6px" }}>
          <h1>
            counter :<b data-testid="count">{count}</b>{" "}
          </h1>
        </span>

        <div>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={restart}>Restart</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
