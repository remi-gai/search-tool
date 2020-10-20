import styled from "styled-components";

const TagMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 10px;
  margin-left: 20px;
  align-items: center;
  min-width: 200px;
  height: 400px;
  max-height: 400px;
`;

const UpperSectionWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const TagListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const TagWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
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
};
