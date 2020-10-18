import React from "react";

import { PinnedWrapper } from "./styles";
import ContactsList from "../Contacts/ContactsList";
import CalendarList from "../Calendar/CalendarList";
import DropboxList from "../Dropbox/DropboxList";
import SlackList from "../Slack/SlackList";
import TwitterList from "../Twitter/TwitterList";
import { Id, Pinned } from "../../interfaces/interfaces";

interface Props {
  pinnedSearches: Pinned;
  pinnedIds: Id;
  pinSearchResult: Function;
}

function PinnedSearches({ pinnedSearches, pinSearchResult, pinnedIds }: Props) {
  const emptyMessage = <div>The pin board is currently empty.</div>;
  const hasPinnedSearches =
    pinnedSearches.contacts.length ||
    pinnedSearches.calendar.length ||
    pinnedSearches.dropbox.length ||
    pinnedSearches.slack.length ||
    pinnedSearches.twitter.length;

  return (
    <PinnedWrapper>
      {hasPinnedSearches ? (
        <div>
          <ContactsList
            contactsData={pinnedSearches.contacts}
            pinSearchResult={pinSearchResult}
            pinnedIds={pinnedIds}
          />
          <CalendarList
            calendarData={pinnedSearches.calendar}
            pinSearchResult={pinSearchResult}
            pinnedIds={pinnedIds}
          />
          <DropboxList
            dropboxData={pinnedSearches.dropbox}
            pinSearchResult={pinSearchResult}
            pinnedIds={pinnedIds}
          />
          <SlackList
            slackData={pinnedSearches.slack}
            pinSearchResult={pinSearchResult}
            pinnedIds={pinnedIds}
          />
          <TwitterList
            twitterData={pinnedSearches.twitter}
            pinSearchResult={pinSearchResult}
            pinnedIds={pinnedIds}
          />
        </div>
      ) : (
        emptyMessage
      )}
    </PinnedWrapper>
  );
}

export default PinnedSearches;
