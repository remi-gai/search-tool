import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto';
    /* color: #585858; */
  }
`;

const WindowWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PinnedAndResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 800px;
`;

const SearchResultsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  padding-top: 20px;
  width: 100%;
  border: 1px solid black;
`;

const ResultsOuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 50px;
`;

const InitialMessageWrapper = styled.div`
  font-size: 18px;
  text-align: center;
`;

export {
  GlobalStyle,
  WindowWrapper,
  ResultsOuterWrapper,
  PinnedAndResultsWrapper,
  InitialMessageWrapper,
  SearchResultsWrapper,
};
