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
      <CloseButtonWrapper>
        <CloseModalButton
          onClick={() => toggleModal(null, null)}
        ></CloseModalButton>
      </CloseButtonWrapper>
      <TagModalTitle>Edit Tags</TagModalTitle>
      <TagsListWrapper>
        {sortedListOfTags.map((tag) => (
          <TagWrapper key={shortid.generate()}>
            <TagName>{tag}</TagName>
            <DeleteTagIcon
              onClick={() => deleteElementFromTag(tag)}
            ></DeleteTagIcon>
          </TagWrapper>
        ))}
      </TagsListWrapper>
      <TagAndButtonWrapper>
        <TagModalInputBox
          value={tagWord}
          onChange={(e) => onTagWordChange(e)}
          onKeyUp={(e) => onKeyUp(e, "tagModal")}
        ></TagModalInputBox>
        <SaveTagsButton onClick={() => onSaveTag()}>Save</SaveTagsButton>
      </TagAndButtonWrapper>
    </TagModalWrapper>
  );
}

export default TagModalMessage;
