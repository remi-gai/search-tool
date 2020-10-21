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

const InitialMessageWrapper = styled.p`
  font-size: 18px;
  text-align: center;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResultCategoryTitle = styled.div`
  color: gray;
  width: 100%;
  font-weight: lighter;
  margin-bottom: 20px;
`;

const GrayLineDivider = styled.div`
  border-bottom: solid 1px #e0e0e0;
  margin: 20px;
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
  SpinnerWrapper,
  ResultCategoryTitle,
  GrayLineDivider,
};
