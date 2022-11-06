import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Count, Decrement, Increment, Label } from "../PropsGetters/components";
import { CounterProvider } from "../PropsGetters/useCounterContext";

const Counter = ({ children, value: count, onChange }) => {
  const firstMounded = useRef(true);
  useEffect(() => {
    if (!firstMounded.current) {
      onChange && onChange(count);
    }
    firstMounded.current = false;
  }, [count, onChange]);
  return (
    <CounterProvider value={{ count }}>
      <StyledCounter>{children}</StyledCounter>
    </CounterProvider>
  );
};

export { Counter };

const StyledCounter = styled.div`
  display: inline-flex;
  border: 1px solid #17a2b8;
  line-height: 1.5;
  border-radius: 0.25rem;
  overflow: hidden;
`;

Counter.Count = Count;
Counter.Label = Label;
Counter.Increment = Increment;
Counter.Decrement = Decrement;
