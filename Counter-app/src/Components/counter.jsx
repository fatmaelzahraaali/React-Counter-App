import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center mt-5">
      <h2>Count: {count}</h2>
      <button className="btn btn-success mx-2" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button className="btn btn-danger mx-2" onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;