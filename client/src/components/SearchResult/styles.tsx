import styled from "styled-components";

const SearchResultOuterWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 400px;
`;

const SearchResultInnerWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  max-height: 800px;
  overflow-y: scroll;
`;

export { SearchResultOuterWrapper, SearchResultInnerWrapper };
