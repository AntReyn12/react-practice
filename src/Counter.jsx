import React, {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 2);
  };

  const handleDecrease = () => {
    setCount(count - 2);
  };

  return (
    <div>
      <p>The current count is: {count}</p>
      <button onClick={handleIncrease}>Increase by 2</button>
      <button onClick={handleDecrease}>Decrease by 2</button>
    </div>
  );
};

export default Counter;
