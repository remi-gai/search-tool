import styled from "styled-components";

const PinnedWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  max-width: 800px;
  padding-bottom: 20px;
  border-bottom: solid 1px #e0e0e0;
`;

const ClearPinBoardAndIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PinIcon = styled.img.attrs({ src: "./icons/pinned-icon.png" })`
  width: 25px;
  height: 25px;
  margin: 5px;
`;

const PinAndPinBoardTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PinBoardTitle = styled.div``;

const EmptyMessage = styled.div`
  color: gray;
`;

const PinnedSearchListAndMessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const PinnedSearchListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ClearPinBoardButton = styled.button`
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

export {
  PinnedWrapper,
  PinIcon,
  ClearPinBoardAndIconWrapper,
  ClearPinBoardButton,
  PinAndPinBoardTitleWrapper,
  PinBoardTitle,
  EmptyMessage,
  PinnedSearchListAndMessageWrapper,
  PinnedSearchListWrapper,
};
