import React from "react";

import { TagMenuWrapper } from "./styles";

import { TaggedSearches } from "../../interfaces/interfaces";

interface Props {
  toggleTagMenu: Function;
  taggedSearches: TaggedSearches;
  displayTaggedResults: Function;
}

function TagMenu({
  toggleTagMenu,
  taggedSearches,
  displayTaggedResults,
}: Props) {
  const tags = Object.keys(taggedSearches);
  const sortedTags = tags.sort();

  return (
    <TagMenuWrapper>
      <div onClick={() => toggleTagMenu()}>Back</div>
      {sortedTags.map((tag) => (
        <div onClick={() => displayTaggedResults(tag)}>{tag}</div>
      ))}
    </TagMenuWrapper>
  );
}

export default TagMenu;
