import React from "react";
import shortid from "shortid";

import {
  TagModalWrapper,
  TagsListWrapper,
  TagModalTitle,
  TagModalInputBox,
  SaveTagsButton,
  CloseModalButton,
  CloseButtonWrapper,
  TagWrapper,
  TagName,
  DeleteTagIcon,
  TagAndButtonWrapper,
} from "./styles";

import {
  PinHooks,
  TagHooks,
  SearchHooks,
  ModalHooks,
} from "../../interfaces/interfaces";

interface Props {
  toggleModal: Function;
  onTagWordChange: Function;
  onSaveTag: Function;
  deleteElementFromTag: Function;
  onKeyUp: Function;
  setIsLoading: Function;
  tagHooks: TagHooks;
  pinHooks: PinHooks;
  searchHooks: SearchHooks;
  modalHooks: ModalHooks;
}

function TagModalMessage({
  toggleModal,
  onTagWordChange,
  onSaveTag,
  deleteElementFromTag,
  onKeyUp,
  tagHooks,
  searchHooks,
  setIsLoading,
  modalHooks,
}: Props) {
  const { tagElement, taggedIds, tagWord, setTagWord } = tagHooks;
  const elementId = tagElement.id;

  let listOfTags = [] as string[];
  if (taggedIds[elementId]) {
    listOfTags = taggedIds[elementId].slice();
  }

  const onClickToggleModal = () =>
    toggleModal(null, null, modalHooks, tagHooks);
  const onClickSaveTag = () => onSaveTag(tagHooks);
  const onChangeTagWord = (e) => onTagWordChange(e, setTagWord);
  const onKeyUpPress = (e) =>
    onKeyUp(e, "tagModal", tagHooks, searchHooks, setIsLoading);
  return (
    <TagModalWrapper>
      <CloseButtonWrapper>
        <CloseModalButton onClick={onClickToggleModal}></CloseModalButton>
      </CloseButtonWrapper>
      <TagModalTitle>Edit Tags</TagModalTitle>
      <TagsListWrapper>
        {listOfTags.sort().map((tag) => {
          const onClickDeleteElementFromTag = () =>
            deleteElementFromTag(tag, tagHooks);
          return (
            <TagWrapper key={shortid.generate()}>
              <TagName>{tag}</TagName>
              <DeleteTagIcon
                onClick={onClickDeleteElementFromTag}
              ></DeleteTagIcon>
            </TagWrapper>
          );
        })}
      </TagsListWrapper>
      <TagAndButtonWrapper>
        <TagModalInputBox
          value={tagWord}
          onChange={onChangeTagWord}
          onKeyUp={onKeyUpPress}
          maxLength="20"
        ></TagModalInputBox>
        <SaveTagsButton onClick={onClickSaveTag}>Save</SaveTagsButton>
      </TagAndButtonWrapper>
    </TagModalWrapper>
  );
}

export default TagModalMessage;
