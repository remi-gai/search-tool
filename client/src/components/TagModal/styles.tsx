import styled from "styled-components";
import { Button } from "../SearchBox/styles";

const CloseModalButton = styled.img.attrs({
  src: "./icons/close-icon.png",
})`
  width: 15px;
  height: 15px;
  margin-right: 15px;
  margin-top: 15px;
  cursor: pointer;
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const TagModalWrapper = styled.div`
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -150px;
  width: 400px;
  height: 260px;
  border: solid 1px black;
  display: flex;
  flex-direction: column;
`;

const TagsListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 260px;
  overflow-y: auto;
  margin-left: 15px;
  margin-right: 15px;
`;

const TagWrapper = styled.div`
  border: solid 1px black;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1px;
  padding: 3px;
`;

const TagModalTitle = styled.div`
  font-weight: bold;
  margin-left: 15px;
  margin-bottom: 15px;
`;

const TagModalInputBox = styled.input`
  height: 35px;
  font-size: 16px;
  font-weight: 300;
  width: 270px;
  &:focus {
    outline: none;
  }
`;

const TagAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px;
`;

const SaveTagsButton = styled.button`
  ${Button}
  background: #63B9FA;
  border: 1px solid #63b9fa;
  color: rgb(255, 255, 255);
  &:hover {
    background: #415aff;
    border: 1px solid #415aff;
  }
`;

const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const TagName = styled.div`
  font-size: 15px;
`;

const DeleteTagIcon = styled.img.attrs({
  src: "./icons/close-icon.png",
})`
  width: 10px;
  height: 10px;
  margin-left: 5px;
  cursor: pointer;
`;

export {
  CloseModalButton,
  CloseButtonWrapper,
  TagModalWrapper,
  TagModalTitle,
  TagModalInputBox,
  TagAndButtonWrapper,
  SaveTagsButton,
  TagsListWrapper,
  TagWrapper,
  ModalBackground,
  TagName,
  DeleteTagIcon,
};
