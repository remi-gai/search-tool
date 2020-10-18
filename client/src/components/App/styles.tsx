import styled, { createGlobalStyle } from "styled-components";

// const GlobalStyle = createGlobalStyle`
//   body {
//     font-family: Open-Sans, Helvetica, Sans-Serif;
//     color: #585858;
//     height: 1000px;
//     border: solid 1px black;
//     display: flex;
//     flex-direction: column;
//   }
// `;

const WindowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px black;
`;

const PinnedAndResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  margin: auto;
  width: 100%;
  max-width: 800px;
`;

const ResultsOuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 50px;
  border: solid 1px black;
`;

const InitialMessageWrapper = styled.div``;

export {
  WindowWrapper,
  ResultsOuterWrapper,
  PinnedAndResultsWrapper,
  InitialMessageWrapper,
};
