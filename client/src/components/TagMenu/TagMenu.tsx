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

interface Props {
  toggleTagMenu: Function;
  displayTaggedResults: Function;
  deleteTag: Function;
  // temp
  tagHooks: any;
  searchHooks: any;
}

function TagMenu({
  toggleTagMenu,
  displayTaggedResults,
  deleteTag,
  tagHooks,
  searchHooks,
}: Props) {
  const tags = Object.keys(tagHooks.taggedSearches);
  const sortedTags = tags.sort();

  return (
    <TagMenuWrapper>
      <UpperSectionWrapper onClick={() => toggleTagMenu(tagHooks)}>
        <BackArrowIconAndTitleWrapper>
          <BackArrowIcon></BackArrowIcon>
          <BackToMenuTitle>Tags</BackToMenuTitle>
        </BackArrowIconAndTitleWrapper>
      </UpperSectionWrapper>
      <TagListWrapper>
        {sortedTags.length ? (
          sortedTags.map((tag) => (
            <TagWrapper key={shortid.generate()}>
              <Tag
                onClick={() => displayTaggedResults(tag, tagHooks, searchHooks)}
              >
                {tag}
              </Tag>
              <DeleteIcon onClick={() => deleteTag(tag, tagHooks)}></DeleteIcon>
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
