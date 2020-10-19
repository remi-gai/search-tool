import React from "react";

import {
  TagModalWrapper,
  TagsListWrapper,
  TagModalTitle,
  TagModalInputBox,
  SaveTagsButton,
  CloseModalButton,
} from "./styles";
import { TaggedId, TaggedSearches } from "../../interfaces/interfaces";

interface Props {
  taggedIds: TaggedId;
  taggedSearches: TaggedSearches;
  toggleModal: Function;
  onTagWordChange: Function;
  onSaveTag: Function;
}

function TagModalMessage({
  taggedIds,
  taggedSearches,
  toggleModal,
  onTagWordChange,
  onSaveTag,
}: Props) {
  const listOfTags = Object.keys(taggedSearches);
  const sortedListOfTags = listOfTags.sort();

  return (
    <TagModalWrapper>
      <CloseModalButton onClick={toggleModal}>x</CloseModalButton>
      <TagsListWrapper>
        {sortedListOfTags.map((tag) => (
          <div>{tag}</div>
        ))}
      </TagsListWrapper>
      <TagModalTitle>Edit Tags</TagModalTitle>
      <TagModalInputBox onChange={(e) => onTagWordChange(e)}></TagModalInputBox>
      <SaveTagsButton onClick={() => onSaveTag()}>Save</SaveTagsButton>
    </TagModalWrapper>
  );
}

export default TagModalMessage;
