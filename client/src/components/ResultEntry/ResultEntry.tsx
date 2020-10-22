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

import {
  Entry,
  PinHooks,
  TagHooks,
  SearchHooks,
  ModalHooks,
} from "../../interfaces/interfaces";

interface Props {
  result: Entry;
  category: string;
  id: string;
  pinSearchResult: Function;
  toggleModal: Function;
  pinHooks: PinHooks;
  searchHooks: SearchHooks;
  modalHooks: ModalHooks;
  tagHooks: TagHooks;
}

function ResultEntry({
  result,
  category,
  id,
  pinSearchResult,
  toggleModal,
  pinHooks,
  searchHooks,
  modalHooks,
  tagHooks,
}: Props) {
  const { pinnedIds } = pinHooks;
  const { taggedIds } = tagHooks;

  const isPinned = pinnedIds[id] ? true : false;
  const isTagged = taggedIds[id] ? true : false;

  const pinSearchResultsCB = () =>
    pinSearchResult(category, id, pinHooks, searchHooks);
  const toggleModalCB = () =>
    toggleModal(category, result, modalHooks, tagHooks);

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
            onClick={pinSearchResultsCB}
            src={
              isPinned ? "./icons/pinned-icon.png" : "./icons/unpinned-icon.png"
            }
          ></PinIcon>
        </PinWrapper>
        <TagWrapper>
          <TagIcon
            onClick={toggleModalCB}
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
