import React from "react";

import { SearchResultWrapper } from "./styles";
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
} from "../../interfaces/interfaces";

interface Props {
  calendarData: Calendar[];
  contactsData: Contacts[];
  dropboxData: Dropbox[];
  slackData: Slack[];
  twitterData: Twitter[];
  category: string;
}

function SearchResult({
  calendarData,
  contactsData,
  dropboxData,
  slackData,
  twitterData,
  category,
}: Props) {
  let categories;
  let errorMessage = (
    <div>
      No results were found in this category based on your keyword search.
    </div>
  );
  if (category === "ALL") {
    categories = (
      <div>
        <ContactsList contactsData={contactsData} />
        <CalendarList calendarData={calendarData} />
        <DropboxList dropboxData={dropboxData} />
        <SlackList slackData={slackData} />
        <TwitterList twitterData={twitterData} />
      </div>
    );
  } else if (category === "CONTACTS") {
    categories = contactsData.length ? (
      <div>
        <ContactsList contactsData={contactsData} />
      </div>
    ) : (
      errorMessage
    );
  } else if (category === "CALENDAR") {
    categories = calendarData.length ? (
      <div>
        <CalendarList calendarData={calendarData} />
      </div>
    ) : (
      errorMessage
    );
  } else if (category === "DROPBOX") {
    categories = dropboxData.length ? (
      <div>
        <DropboxList dropboxData={dropboxData} />
      </div>
    ) : (
      errorMessage
    );
  } else if (category === "SLACK") {
    categories = slackData.length ? (
      <div>
        <SlackList slackData={slackData} />
      </div>
    ) : (
      errorMessage
    );
  } else if (category === "TWITTER") {
    categories = twitterData.length ? (
      <div>
        <TwitterList twitterData={twitterData} />
      </div>
    ) : (
      errorMessage
    );
  } else if (category === "NO RESULTS") {
    categories = errorMessage;
  }

  return <SearchResultWrapper>{categories}</SearchResultWrapper>;
}

export default SearchResult;
