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
  overflow-y: auto;
`;

const ClearSearchBoardAndIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SearchAndSearchBoardTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchIcon = styled.img.attrs({ src: "./icons/search-icon-black.png" })`
  width: 20px;
  height: 20px;
  margin: 4px;
`;

const SearchBoardTitle = styled.div``;

const ClearSearchBoardButton = styled.button`
  background-color: white;
  border: white;
  &:hover {
    cursor: pointer;
    color: #415aff;
  }
  &:focus {
    outline: none;
  }
`;

const InitialMessageWrapper = styled.div`
  font-size: 18px;
  text-align: center;
`;

export {
  SearchResultOuterWrapper,
  SearchResultInnerWrapper,
  ClearSearchBoardAndIconWrapper,
  SearchAndSearchBoardTitleWrapper,
  SearchIcon,
  SearchBoardTitle,
  ClearSearchBoardButton,
  InitialMessageWrapper,
};
