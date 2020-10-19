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
      <UpperSectionWrapper>
        <BackArrowIconAndTitleWrapper onClick={() => toggleTagMenu()}>
          <BackArrowIcon></BackArrowIcon>
          <BackToMenuTitle>Tags</BackToMenuTitle>
        </BackArrowIconAndTitleWrapper>
      </UpperSectionWrapper>
      {sortedTags.map((tag) => (
        <TagWrapper key={shortid.generate()}>
          <Tag onClick={() => displayTaggedResults(tag)}>{tag}</Tag>
          <DeleteIcon onClick={() => deleteTag(tag)}></DeleteIcon>
        </TagWrapper>
      ))}
    </TagMenuWrapper>
  );
}

export default TagMenu;
