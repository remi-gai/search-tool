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

import {
  renderTitleAndDetailsMap,
  renderDateMap,
  renderIconMap,
} from "./CategoryRenderingMaps";

import { Entry, Id, TaggedId } from "../../interfaces/interfaces";

interface Props {
  result: Entry;
  category: string;
  id: string;
  pinSearchResult: Function;
  pinnedIds: Id;
  toggleModal: Function;
  taggedIds: TaggedId;
  //temp
  pinHooks: any;
  searchHooks: any;
  modalHooks: any;
  tagHooks: any;
}

function ResultEntry({
  result,
  category,
  id,
  pinnedIds,
  pinSearchResult,
  toggleModal,
  taggedIds,
  pinHooks,
  searchHooks,
  modalHooks,
  tagHooks,
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
          <PinIcon
            onClick={() => pinSearchResult(category, id, pinHooks, searchHooks)}
            src={
              isPinned ? "./icons/pinned-icon.png" : "./icons/unpinned-icon.png"
            }
          ></PinIcon>
        </PinWrapper>
        <TagWrapper>
          <TagIcon
            onClick={() => toggleModal(category, result, modalHooks, tagHooks)}
            src={
              isTagged ? "./icons/tagged-icon.png" : "./icons/untagged-icon.png"
            }
          ></TagIcon>
        </TagWrapper>
      </ResultRightWrappper>
    </ResultOuterWrapper>
  );
}

export default ResultEntry;
