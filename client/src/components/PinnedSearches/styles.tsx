import styled from "styled-components";

const PinnedWrapper = styled.div`
  border: solid 1px black;
  margin-bottom: 20px;
  width: 100%;
  max-width: 800px;
`;

const ClearPinBoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ClearPinBoardButton = styled.button`
  background-color: white;
  border: white;
  &:hover {
    cursor: pointer;
    color: #415aff;
  }
`;

export { PinnedWrapper, ClearPinBoardWrapper, ClearPinBoardButton };
