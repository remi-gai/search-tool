import React from "react";

import {
  PinnedWrapper,
  ClearPinBoardWrapper,
  ClearPinBoardButton,
} from "./styles";
import ContactsList from "../Contacts/ContactsList";
import CalendarList from "../Calendar/CalendarList";
import DropboxList from "../Dropbox/DropboxList";
import SlackList from "../Slack/SlackList";
import TwitterList from "../Twitter/TwitterList";
import { Id, Pinned, TaggedId } from "../../interfaces/interfaces";

interface Props {
  pinnedSearches: Pinned;
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

  return (
    <PinnedWrapper>
      <ClearPinBoardWrapper>
        <ClearPinBoardButton onClick={clearPinBoard}>
          Clear Pinned Results
        </ClearPinBoardButton>
      </ClearPinBoardWrapper>
      {hasPinnedSearches ? (
        <div>
          <ContactsList
            contactsData={pinnedSearches.contacts}
            pinSearchResult={pinSearchResult}
            pinnedIds={pinnedIds}
            toggleModal={toggleModal}
            taggedIds={taggedIds}
          />
          <CalendarList
            calendarData={pinnedSearches.calendar}
            pinSearchResult={pinSearchResult}
            pinnedIds={pinnedIds}
            toggleModal={toggleModal}
            taggedIds={taggedIds}
          />
          <DropboxList
            dropboxData={pinnedSearches.dropbox}
            pinSearchResult={pinSearchResult}
            pinnedIds={pinnedIds}
            toggleModal={toggleModal}
            taggedIds={taggedIds}
          />
          <SlackList
            slackData={pinnedSearches.slack}
            pinSearchResult={pinSearchResult}
            pinnedIds={pinnedIds}
            toggleModal={toggleModal}
            taggedIds={taggedIds}
          />
          <TwitterList
            twitterData={pinnedSearches.twitter}
            pinSearchResult={pinSearchResult}
            pinnedIds={pinnedIds}
            toggleModal={toggleModal}
            taggedIds={taggedIds}
          />
        </div>
      ) : (
        emptyMessage
      )}
    </PinnedWrapper>
  );
}

export default PinnedSearches;
