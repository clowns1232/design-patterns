import React from "react";
import { Counter } from "./Counter";

function Usage() {
  const handleChangeCounter = (count) => {
    console.log("count", count);
  };

  return (
    <Counter onChange={handleChangeCounter}>
      <Counter.Label>Counter</Counter.Label>
      <Counter.Count max={10} />
      <Counter.Decrement icon="minus" />
      <Counter.Increment icon="plus" />
    </Counter>
  );
}

export { Usage };
