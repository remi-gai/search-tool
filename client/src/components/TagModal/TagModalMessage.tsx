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
import { TaggedId, TaggedSearches } from "../../interfaces/interfaces";

interface Props {
  elementId: string;
  taggedIds: TaggedId;
  taggedSearches: TaggedSearches;
  toggleModal: Function;
  onTagWordChange: Function;
  onSaveTag: Function;
  deleteElementFromTag: Function;
  tagWord: string;
  onKeyUp: Function;
  setTagWord: Function;
  // temp
  tagHooks: any;
  pinHooks: any;
  searchHooks: any;
  setIsLoading: any;
  modalHooks: any;
}

function TagModalMessage({
  elementId,
  taggedIds,
  toggleModal,
  onTagWordChange,
  onSaveTag,
  deleteElementFromTag,
  tagWord,
  onKeyUp,
  setTagWord,
  tagHooks,
  pinHooks,
  searchHooks,
  setIsLoading,
  modalHooks,
}: Props) {
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
