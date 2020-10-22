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
  pinHooks,
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
  const sortedListOfTags = listOfTags.sort();

  return (
    <TagModalWrapper>
      <CloseButtonWrapper>
        <CloseModalButton
          onClick={() => toggleModal(null, null, modalHooks, tagHooks)}
        ></CloseModalButton>
      </CloseButtonWrapper>
      <TagModalTitle>Edit Tags</TagModalTitle>
      <TagsListWrapper>
        {sortedListOfTags.map((tag) => (
          <TagWrapper key={shortid.generate()}>
            <TagName>{tag}</TagName>
            <DeleteTagIcon
              onClick={() => deleteElementFromTag(tag, tagHooks)}
            ></DeleteTagIcon>
          </TagWrapper>
        ))}
      </TagsListWrapper>
      <TagAndButtonWrapper>
        <TagModalInputBox
          value={tagWord}
          onChange={(e) => onTagWordChange(e, setTagWord)}
          onKeyUp={(e) =>
            onKeyUp(
              e,
              "tagModal",
              pinHooks,
              tagHooks,
              searchHooks,
              setIsLoading
            )
          }
          maxLength="20"
        ></TagModalInputBox>
        <SaveTagsButton onClick={() => onSaveTag(tagHooks)}>
          Save
        </SaveTagsButton>
      </TagAndButtonWrapper>
    </TagModalWrapper>
  );
}

export default TagModalMessage;
