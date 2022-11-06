import React from "react";
import styled from "styled-components";
import { Counter } from "./Counter";
import { useCounter } from "./useCounter";

const MAX_COUNT = 10;
function Index() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "decrement":
        return {
          count: Math.max(0, state.count - 2), // 기존은 1씩 줄어들지만 2씩 줄어들도록 커스텀
        };
      default:
        return useCounter.reducer(state, action);
    }
  };

  const { count, handleDecrement, handleIncrement } = useCounter(
    { initial: 0, max: 10 },
    reducer
  );

  return (
    <>
      <Counter value={count}>
        <Counter.Decrement icon={"minus"} onClick={handleDecrement} />
        <Counter.Label>Counter</Counter.Label>
        <Counter.Count />
        <Counter.Increment icon={"plus"} onClick={handleIncrement} />
      </Counter>
      <StyledContainer>
        <button onClick={handleIncrement} disabled={count === MAX_COUNT}>
          Custom increment btn 1
        </button>
      </StyledContainer>
    </>
  );
}

export default Index;

const StyledContainer = styled.div`
  margin-top: 20px;
`;
