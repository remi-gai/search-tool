import styled from "styled-components";

const TagMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  padding-top: 10px;
  margin-left: 20px;
  align-items: center;
  width: 200px;
  height: 400px;
  border: solid 1px black;
`;

const UpperSectionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Tag = styled.div``;

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
`;

const DeleteIcon = styled.img.attrs({ src: "./icons/delete-icon.png" })`
  width: 14px;
  height: 18px;
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
};
