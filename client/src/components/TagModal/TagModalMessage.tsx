import React from "react";
import shortid from "shortid";

import {
  TagModalWrapper,
  TagsListWrapper,
  TagModalTitle,
  TagModalInputBox,
  SaveTagsButton,
  CloseModalButton,
  TagWrapper,
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
}: Props) {
  let listOfTags = [] as string[];
  if (taggedIds[elementId]) {
    listOfTags = taggedIds[elementId].slice();
  }
  const sortedListOfTags = listOfTags.sort();

  return (
    <TagModalWrapper>
      <CloseModalButton onClick={toggleModal}>x</CloseModalButton>
      <TagsListWrapper>
        {sortedListOfTags.map((tag) => (
          <TagWrapper key={shortid.generate()}>
            <div>{tag}</div>
            <div onClick={() => deleteElementFromTag(tag)}>x</div>
          </TagWrapper>
        ))}
      </TagsListWrapper>
      <TagModalTitle>Edit Tags</TagModalTitle>
      <TagModalInputBox
        value={tagWord}
        onChange={(e) => onTagWordChange(e)}
        onKeyUp={(e) => onKeyUp(e, "tagModal")}
      ></TagModalInputBox>
      <SaveTagsButton onClick={() => onSaveTag()}>Save</SaveTagsButton>
    </TagModalWrapper>
  );
}

export default TagModalMessage;
