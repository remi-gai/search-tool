import styled from "styled-components";

const TagMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 10px;
  margin-left: 20px;
  align-items: center;
  width: 240px;
  height: 400px;
  max-height: 400px;
`;

const UpperSectionWrapper = styled.div`
  display: flex;
  width: 100%;
  &:hover {
    color: #415aff;
    background-color: #f9f9f9;
    font-weight: bolder;
    cursor: pointer;
  }
`;

const TagListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 20px;
  margin: 1px;
  padding: 3px;
  &:hover {
    color: #415aff;
    font-weight: bolder;
    cursor: pointer;
  }
`;

const Tag = styled.div`
  margin: 5px;
  &:hover {
    color: #415aff;
    font-weight: bolder;
    cursor: pointer;
  }
`;

const BackArrowIconAndTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BackArrowIcon = styled.img.attrs({ src: "./icons/backarrow-icon.png" })`
  width: 10px;
  height: 18px;
  margin: 5px;
  cursor: pointer;
`;

const BackToMenuTitle = styled.div`
  cursor: pointer;
  &:hover {
    color: #415aff;
    font-weight: bolder;
    cursor: pointer;
  }
`;

const DeleteIcon = styled.img.attrs({ src: "./icons/delete-icon.png" })`
  width: 14px;
  height: 18px;
  margin-left: 15px;
  cursor: pointer;
`;

const EmptyListMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const EmptyListMessage = styled.div`
  font-weight: lighter;
  color: gray;
`;

export {
  TagMenuWrapper,
  TagWrapper,
  Tag,
  BackArrowIconAndTitleWrapper,
  BackArrowIcon,
  DeleteIcon,
  BackToMenuTitle,
  UpperSectionWrapper,
  TagListWrapper,
  EmptyListMessage,
  EmptyListMessageWrapper,
};
