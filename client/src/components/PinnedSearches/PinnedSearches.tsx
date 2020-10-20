import React from "react";
import shortid from "shortid";

import {
  PinnedWrapper,
  ClearPinBoardWrapper,
  ClearPinBoardButton,
} from "./styles";

import { Id, SearchData, TaggedId } from "../../interfaces/interfaces";

import ResultList from "../ResultList/ResultList";

interface Props {
  pinnedSearches: SearchData;
  pinnedIds: Id;
  pinSearchResult: Function;
  toggleModal: Function;
  taggedIds: TaggedId;
  clearPinBoard: Function;
}

function PinnedSearches({
  pinnedSearches,
  pinSearchResult,
  pinnedIds,
  toggleModal,
  taggedIds,
  clearPinBoard,
}: Props) {
  const emptyMessage = <div>The pin board is currently empty.</div>;
  const hasPinnedSearches =
    pinnedSearches.contacts.length ||
    pinnedSearches.calendar.length ||
    pinnedSearches.dropbox.length ||
    pinnedSearches.slack.length ||
    pinnedSearches.twitter.length;
  const categories = ["contacts", "calendar", "dropbox", "slack", "twitter"];

  return (
    <PinnedWrapper>
      <ClearPinBoardWrapper>
        <ClearPinBoardButton onClick={clearPinBoard}>
          Clear Pinned Results
        </ClearPinBoardButton>
      </ClearPinBoardWrapper>
      {hasPinnedSearches ? (
        <div>
          {categories.map((category) => {
            return (
              <ResultList
                searchData={pinnedSearches}
                category={category}
                pinSearchResult={pinSearchResult}
                pinnedIds={pinnedIds}
                toggleModal={toggleModal}
                taggedIds={taggedIds}
                key={shortid.generate()}
              ></ResultList>
            );
          })}
        </div>
      ) : (
        emptyMessage
      )}
    </PinnedWrapper>
  );
}

export default PinnedSearches;
