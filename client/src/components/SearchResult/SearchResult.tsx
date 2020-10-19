import React from "react";

import { SearchResultOuterWrapper, SearchResultInnerWrapper } from "./styles";
import ContactsList from "../Contacts/ContactsList";
import CalendarList from "../Calendar/CalendarList";
import DropboxList from "../Dropbox/DropboxList";
import SlackList from "../Slack/SlackList";
import TwitterList from "../Twitter/TwitterList";

import {
  Calendar,
  Contacts,
  Dropbox,
  Slack,
  Twitter,
  Id,
  TaggedId,
} from "../../interfaces/interfaces";

interface Props {
  calendarData: Calendar[];
  contactsData: Contacts[];
  dropboxData: Dropbox[];
  slackData: Slack[];
  twitterData: Twitter[];
  category: string;
  searchedWord: string;
  pinSearchResult: Function;
  pinnedIds: Id;
  toggleModal: Function;
  taggedIds: TaggedId;
}

function SearchResult({
  calendarData,
  contactsData,
  dropboxData,
  slackData,
  twitterData,
  category,
  searchedWord,
  pinSearchResult,
  pinnedIds,
  toggleModal,
  taggedIds,
}: Props) {
  let categories;
  let errorMessage = (
    <SearchResultInnerWrapper>
      {`Oops! We couldn't find any result for ${searchedWord}. Please try again with a different
      search, filter or tag.`}
    </SearchResultInnerWrapper>
  );
  if (category === "ALL") {
    const hasResults =
      contactsData.length ||
      calendarData.length ||
      dropboxData.length ||
      slackData.length ||
      twitterData.length;

    categories = hasResults ? (
      <SearchResultInnerWrapper>
        <ContactsList
          contactsData={contactsData}
          pinSearchResult={pinSearchResult}
          pinnedIds={pinnedIds}
          toggleModal={toggleModal}
          taggedIds={taggedIds}
        />
        <CalendarList
          calendarData={calendarData}
          pinSearchResult={pinSearchResult}
          pinnedIds={pinnedIds}
          toggleModal={toggleModal}
          taggedIds={taggedIds}
        />
        <DropboxList
          dropboxData={dropboxData}
          pinSearchResult={pinSearchResult}
          pinnedIds={pinnedIds}
          toggleModal={toggleModal}
          taggedIds={taggedIds}
        />
        <SlackList
          slackData={slackData}
          pinSearchResult={pinSearchResult}
          pinnedIds={pinnedIds}
          toggleModal={toggleModal}
          taggedIds={taggedIds}
        />
        <TwitterList
          twitterData={twitterData}
          pinSearchResult={pinSearchResult}
          pinnedIds={pinnedIds}
          toggleModal={toggleModal}
          taggedIds={taggedIds}
        />
      </SearchResultInnerWrapper>
    ) : (
      errorMessage
    );
  } else if (category === "CONTACTS") {
    categories = contactsData.length ? (
      <SearchResultInnerWrapper>
        <ContactsList
          contactsData={contactsData}
          pinSearchResult={pinSearchResult}
          pinnedIds={pinnedIds}
          toggleModal={toggleModal}
          taggedIds={taggedIds}
        />
      </SearchResultInnerWrapper>
    ) : (
      errorMessage
    );
  } else if (category === "CALENDAR") {
    categories = calendarData.length ? (
      <SearchResultInnerWrapper>
        <CalendarList
          calendarData={calendarData}
          pinSearchResult={pinSearchResult}
          pinnedIds={pinnedIds}
          toggleModal={toggleModal}
          taggedIds={taggedIds}
        />
      </SearchResultInnerWrapper>
    ) : (
      errorMessage
    );
  } else if (category === "DROPBOX") {
    categories = dropboxData.length ? (
      <SearchResultInnerWrapper>
        <DropboxList
          dropboxData={dropboxData}
          pinSearchResult={pinSearchResult}
          pinnedIds={pinnedIds}
          toggleModal={toggleModal}
          taggedIds={taggedIds}
        />
      </SearchResultInnerWrapper>
    ) : (
      errorMessage
    );
  } else if (category === "SLACK") {
    categories = slackData.length ? (
      <SearchResultInnerWrapper>
        <SlackList
          slackData={slackData}
          pinSearchResult={pinSearchResult}
          pinnedIds={pinnedIds}
          toggleModal={toggleModal}
          taggedIds={taggedIds}
        />
      </SearchResultInnerWrapper>
    ) : (
      errorMessage
    );
  } else if (category === "TWITTER") {
    categories = twitterData.length ? (
      <SearchResultInnerWrapper>
        <TwitterList
          twitterData={twitterData}
          pinSearchResult={pinSearchResult}
          pinnedIds={pinnedIds}
          toggleModal={toggleModal}
          taggedIds={taggedIds}
        />
      </SearchResultInnerWrapper>
    ) : (
      errorMessage
    );
  }

  return <SearchResultOuterWrapper>{categories}</SearchResultOuterWrapper>;
}

export default SearchResult;
