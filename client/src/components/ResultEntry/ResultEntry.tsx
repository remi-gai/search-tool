import React from "react";

import {
  ResultOuterWrapper,
  ResultLeftWrapper,
  ResultRightWrappper,
  PinWrapper,
  PinIcon,
  TagWrapper,
  TagIcon,
} from "./styles";

import { Entry, Id, TaggedId } from "../../interfaces/interfaces";

interface RenderMap {
  contacts: Function;
  calendar: Function;
  dropbox: Function;
  slack: Function;
  twitter: Function;
}

interface Props {
  result: Entry;
  category: string;
  renderTitleAndDetailsMap: RenderMap;
  renderDateMap: RenderMap;
  renderIconMap: RenderMap;
  id: string;
  pinSearchResult: Function;
  pinnedIds: Id;
  toggleModal: Function;
  taggedIds: TaggedId;
}

function ResultEntry({
  result,
  category,
  renderTitleAndDetailsMap,
  renderDateMap,
  renderIconMap,
  id,
  pinnedIds,
  pinSearchResult,
  toggleModal,
  taggedIds,
}: Props) {
  const isPinned = pinnedIds[id] ? true : false;
  const isTagged = taggedIds[id] ? true : false;

  return (
    <ResultOuterWrapper>
      <ResultLeftWrapper>
        {renderIconMap[category]()}
        {renderTitleAndDetailsMap[category](result)}
      </ResultLeftWrapper>
      <ResultRightWrappper>
        {renderDateMap[category](result)}
        <PinWrapper>
          {isPinned ? (
            <PinIcon
              onClick={() => pinSearchResult(category, id)}
              src="./icons/pinned-icon.png"
            ></PinIcon>
          ) : (
            <PinIcon
              onClick={() => pinSearchResult(category, id)}
              src="./icons/unpinned-icon.png"
            ></PinIcon>
          )}
        </PinWrapper>
        <TagWrapper>
          {isTagged ? (
            <TagIcon
              onClick={() => toggleModal(category, result)}
              src="./icons/tagged-icon.png"
            ></TagIcon>
          ) : (
            <TagIcon
              onClick={() => toggleModal(category, result)}
              src="./icons/untagged-icon.png"
            ></TagIcon>
          )}
        </TagWrapper>
      </ResultRightWrappper>
    </ResultOuterWrapper>
  );
}

export default ResultEntry;
