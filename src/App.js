import React from "react";
import styled from "styled-components";
import CompoundComponent from "./patterns/CompoundComponent/Index";
import ControlProps from "./patterns/ControlProps/Index";
import CustomHooks from "./patterns/CustomHooks/Index";
import PropsGetters from "./patterns/PropsGetters/Index";
import StateReducer from "./patterns/StateReducer/Index";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faPlusCircle,
  faPlusSquare,
  faMinus,
  faMinusCircle,
  faMinusSquare,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faPlus,
  faPlusCircle,
  faPlusSquare,
  faMinus,
  faMinusCircle,
  faMinusSquare
);

export default function App() {
  return (
    <StyledContainer>
      <StyledTitleContainer>
        <h1>Advanced React Pattern</h1>
      </StyledTitleContainer>

      <StyledPatternContainer>
        <h2>Compound component pattern</h2>
        <CompoundComponent />
      </StyledPatternContainer>

      <StyledPatternContainer>
        <h2>Control Props Pattern</h2>
        <ControlProps />
      </StyledPatternContainer>

      <StyledPatternContainer>
        <h2>Custom Hooks Pattern</h2>
        <CustomHooks />
      </StyledPatternContainer>

      <StyledPatternContainer>
        <h2>Props Getter Pattern</h2>
        <PropsGetters />
      </StyledPatternContainer>

      <StyledPatternContainer>
        <h2>state reducer Pattern</h2>
        <StateReducer />
      </StyledPatternContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  text-align: center;
  font-family: sans-serif;
`;

const StyledTitleContainer = styled.div`
  background-color: #1428a0;
  color: white;
  padding: 35px;
  > h1 {
    margin: 0;
  }
`;

const StyledPatternContainer = styled.div`
  padding: 30px;
  border-bottom: 2px solid #d3d3d3;
  &:last-child {
    border: none;
  }
  > h2 {
    margin-top: 0;
  }
`;
