import React, {useState} from "react";

const Counter = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const handleReset = () => {
    setCount(initialCount);
  };

  const handleIncrease = () => {
    setCount(count + 2);
  };

  const handleDecrease = () => {
    setCount(count - 2);
  };

  return (
    <div>
      <p>The current count is: {count}</p>
      <div style={{display: "flex"}}>
        <button className="button" onClick={handleReset}>
          Reset Count
        </button>
        <button className="button" onClick={handleIncrease}>
          Increase by 2
        </button>
        <button className="button" onClick={handleDecrease}>
          Decrease by 2
        </button>
      </div>
    </div>
  );
};

export default Counter;
