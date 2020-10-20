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
  padding-top: 10px;
  width: 100%;
`;

const ResultsOuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 50px;
`;

export {
  GlobalStyle,
  WindowWrapper,
  ResultsOuterWrapper,
  PinnedAndResultsWrapper,
  SearchResultsWrapper,
};
