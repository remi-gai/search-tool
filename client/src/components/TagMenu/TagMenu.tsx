import React from "react";

import { TagMenuWrapper, TagWrapper, DeleteIcon, Tag } from "./styles";

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
      <div onClick={() => toggleTagMenu()}>Back</div>
      {sortedTags.map((tag) => (
        <TagWrapper>
          <Tag onClick={() => displayTaggedResults(tag)}>{tag}</Tag>
          <DeleteIcon onClick={() => deleteTag(tag)}></DeleteIcon>
        </TagWrapper>
      ))}
    </TagMenuWrapper>
  );
}

export default TagMenu;
