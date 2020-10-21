import React from "react";
import shortid from "shortid";

import {
  TagMenuWrapper,
  TagWrapper,
  BackArrowIconAndTitleWrapper,
  BackArrowIcon,
  DeleteIcon,
  Tag,
  BackToMenuTitle,
  UpperSectionWrapper,
  TagListWrapper,
  EmptyListMessageWrapper,
  EmptyListMessage,
} from "./styles";

import { TaggedSearches } from "../../interfaces/interfaces";

interface Props {
  toggleTagMenu: Function;
  taggedSearches: TaggedSearches;
  displayTaggedResults: Function;
  deleteTag: Function;
}

function TagMenu({
  toggleTagMenu,
  taggedSearches,
  displayTaggedResults,
  deleteTag,
}: Props) {
  const tags = Object.keys(taggedSearches);
  const sortedTags = tags.sort();

  return (
    <TagMenuWrapper>
      <UpperSectionWrapper onClick={() => toggleTagMenu()}>
        <BackArrowIconAndTitleWrapper>
          <BackArrowIcon></BackArrowIcon>
          <BackToMenuTitle>Tags</BackToMenuTitle>
        </BackArrowIconAndTitleWrapper>
      </UpperSectionWrapper>
      <TagListWrapper>
        {sortedTags.length ? (
          sortedTags.map((tag) => (
            <TagWrapper key={shortid.generate()}>
              <Tag onClick={() => displayTaggedResults(tag)}>{tag}</Tag>
              <DeleteIcon onClick={() => deleteTag(tag)}></DeleteIcon>
            </TagWrapper>
          ))
        ) : (
          <EmptyListMessageWrapper>
            <EmptyListMessage>There are no saved tags</EmptyListMessage>
          </EmptyListMessageWrapper>
        )}
      </TagListWrapper>
    </TagMenuWrapper>
  );
}

export default TagMenu;
