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
    categories = (
      <div>
        <ContactsList contactsData={contactsData} />
      </div>
    );
  } else if (category === "CALENDAR") {
    categories = (
      <div>
        <CalendarList calendarData={calendarData} />
      </div>
    );
  } else if (category === "DROPBOX") {
    categories = (
      <div>
        <DropboxList dropboxData={dropboxData} />
      </div>
    );
  } else if (category === "SLACK") {
    categories = (
      <div>
        <SlackList slackData={slackData} />
      </div>
    );
  } else if (category === "TWITTER") {
    categories = (
      <div>
        <TwitterList twitterData={twitterData} />
      </div>
    );
  }

  return <SearchResultWrapper>{categories}</SearchResultWrapper>;
}

export default SearchResult;
