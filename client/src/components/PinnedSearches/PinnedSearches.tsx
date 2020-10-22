import React from "react";
import shortid from "shortid";

import {
  PinnedWrapper,
  PinIcon,
  ClearPinBoardAndIconWrapper,
  ClearPinBoardButton,
  PinAndPinBoardTitleWrapper,
  PinBoardTitle,
  EmptyMessage,
  PinnedSearchListAndMessageWrapper,
  PinnedSearchListWrapper,
} from "./styles";

import {
  PinHooks,
  TagHooks,
  SearchHooks,
  ModalHooks,
} from "../../interfaces/interfaces";

import ResultList from "../ResultList/ResultList";

interface Props {
  pinSearchResult: Function;
  toggleModal: Function;
  clearPinBoard: Function;
  pinHooks: PinHooks;
  searchHooks: SearchHooks;
  modalHooks: ModalHooks;
  tagHooks: TagHooks;
}

function PinnedSearches({
  pinSearchResult,
  toggleModal,
  clearPinBoard,
  pinHooks,
  searchHooks,
  modalHooks,
  tagHooks,
}: Props) {
  const { pinnedSearches, pinnedIds } = pinHooks;
  const { taggedIds } = tagHooks;

  const emptyMessage = (
    <EmptyMessage>The pin board is currently empty.</EmptyMessage>
  );
  const hasPinnedSearches =
    pinnedSearches.contacts.length ||
    pinnedSearches.calendar.length ||
    pinnedSearches.dropbox.length ||
    pinnedSearches.slack.length ||
    pinnedSearches.twitter.length;
  const categories = ["contacts", "calendar", "dropbox", "slack", "twitter"];

  return (
    <PinnedWrapper>
      <ClearPinBoardAndIconWrapper>
        <PinAndPinBoardTitleWrapper>
          <PinIcon></PinIcon>
          <PinBoardTitle>Pin Board:</PinBoardTitle>
        </PinAndPinBoardTitleWrapper>
        <ClearPinBoardButton onClick={() => clearPinBoard(pinHooks)}>
          Clear Pinned Results
        </ClearPinBoardButton>
      </ClearPinBoardAndIconWrapper>
      <PinnedSearchListAndMessageWrapper>
        {hasPinnedSearches ? (
          <PinnedSearchListWrapper>
            {categories.map((category) => {
              return (
                <ResultList
                  searchData={pinnedSearches}
                  category={category}
                  pinSearchResult={pinSearchResult}
                  toggleModal={toggleModal}
                  key={shortid.generate()}
                  pinHooks={pinHooks}
                  searchHooks={searchHooks}
                  modalHooks={modalHooks}
                  tagHooks={tagHooks}
                ></ResultList>
              );
            })}
          </PinnedSearchListWrapper>
        ) : (
          emptyMessage
        )}
      </PinnedSearchListAndMessageWrapper>
    </PinnedWrapper>
  );
}

export default PinnedSearches;
