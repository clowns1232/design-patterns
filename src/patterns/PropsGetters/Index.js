import React from "react";
import styled from "styled-components";
import { Counter } from "./Counter";
import { useCounter } from "./useCounter";

const MAX_COUNT = 10;

function Index() {
  const { count, getCounterProps, getIncrementProps, getDecrementProps } =
    useCounter({
      initial: 0,
      max: MAX_COUNT,
    });

  return (
    <>
      <Counter {...getCounterProps()}>
        <Counter.Decrement icon={"minus"} {...getDecrementProps()} />
        <Counter.Label>Counter</Counter.Label>
        <Counter.Count />
        <Counter.Increment icon={"plus"} {...getIncrementProps()} />
      </Counter>
      <StyledContainer>
        <button {...getIncrementProps()}>10까지 증가</button>
      </StyledContainer>
      <StyledContainer>
        <button {...getIncrementProps({ disabled: count > MAX_COUNT - 2 })}>
          9까지 증가
        </button>
      </StyledContainer>
    </>
  );
}

export default Index;

const StyledContainer = styled.div`
  margin-top: 20px;
`;
