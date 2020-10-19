import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto';
    color: #585858;
    background-color: #fffdf5;
  }
`;

const WindowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px black;
`;

const PinnedAndResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 800px;
`;

const ResultsOuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 50px;
  border: solid 1px black;
`;

const InitialMessageWrapper = styled.div`
  border: solid 1px;
  min-height: 400px;
`;

export {
  GlobalStyle,
  WindowWrapper,
  ResultsOuterWrapper,
  PinnedAndResultsWrapper,
  InitialMessageWrapper,
};
