import { useState } from "react";

function useCounter(initialedCount) {
  const [count, setCount] = useState(initialedCount);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  return { count, handleIncrement, handleDecrement };
}

export { useCounter };
