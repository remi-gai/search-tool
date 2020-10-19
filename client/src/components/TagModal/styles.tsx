import styled from "styled-components";

const CloseModalButton = styled.button``;

const TagModalWrapper = styled.div`
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -150px;
  width: 400px;
  height: 300px;
  border: solid 1px black;
  display: flex;
  flex-direction: column;
`;

const TagsListWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TagWrapper = styled.div`
  border: solid 1px black;
  display: flex;
  flex-direction: row;
`;

const TagModalTitle = styled.div``;

const TagModalInputBox = styled.input`
  height: 80px;
`;

const SaveTagsButton = styled.button``;

const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

export {
  CloseModalButton,
  TagModalWrapper,
  TagModalTitle,
  TagModalInputBox,
  SaveTagsButton,
  TagsListWrapper,
  TagWrapper,
  ModalBackground,
};
