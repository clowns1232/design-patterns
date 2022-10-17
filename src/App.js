import React from "react";
import styled from "styled-components";
import { Usage as CompoundComponent } from "./patterns/compound-component/Usage";

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
