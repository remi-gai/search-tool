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

import { TagHooks, SearchHooks } from "../../interfaces/interfaces";

interface Props {
  toggleTagMenu: Function;
  displayTaggedResults: Function;
  deleteTag: Function;
  tagHooks: TagHooks;
  searchHooks: SearchHooks;
}

function TagMenu({
  toggleTagMenu,
  displayTaggedResults,
  deleteTag,
  tagHooks,
  searchHooks,
}: Props) {
  const tags = Object.keys(tagHooks.taggedSearches);

  return (
    <TagMenuWrapper>
      <UpperSectionWrapper onClick={() => toggleTagMenu(tagHooks)}>
        <BackArrowIconAndTitleWrapper>
          <BackArrowIcon></BackArrowIcon>
          <BackToMenuTitle>Tags</BackToMenuTitle>
        </BackArrowIconAndTitleWrapper>
      </UpperSectionWrapper>
      <TagListWrapper>
        {tags.length ? (
          tags.sort().map((tag) => {
            const onClickDisplayTaggedResults = () =>
              displayTaggedResults(tag, tagHooks, searchHooks);
            const onClickDeleteTag = () => deleteTag(tag, tagHooks);
            return (
              <TagWrapper key={shortid.generate()}>
                <Tag onClick={onClickDisplayTaggedResults}>{tag}</Tag>
                <DeleteIcon onClick={onClickDeleteTag}></DeleteIcon>
              </TagWrapper>
            );
          })
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
