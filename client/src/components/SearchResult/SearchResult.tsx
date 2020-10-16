import React from "react";

import { SearchResultWrapper } from "./styles";
import ContactsList from "../Contacts/ContactsList";
import CalendarList from "../Calendar/CalendarList";
import DropboxList from "../Dropbox/DropboxList";
import SlackList from "../Slack/SlackList";
import TwitterList from "../Twitter/TwitterList";

interface Calendar {
  dates: string;
  id: string;
  invitees: string;
  title: string;
  matching_terms: string[];
}

interface Contacts {
  id: string;
  name: string;
  company: string;
  emails: string[];
  phones: string[];
  matching_terms: string[];
  last_contact: string;
}

interface Dropbox {
  id: string;
  path: string;
  title: string;
  shared_with: string[];
  matching_terms: string[];
  created: string;
}

interface Slack {
  id: string;
  channel: string;
  author: string;
  message: string;
  timestamp: string;
  matching_terms: string[];
}

interface Twitter {
  user: string;
  message: string;
  timestamp: string;
  matching_terms: string[];
}

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
  if (category === "All") {
    categories = (
      <div>
        <ContactsList contactsData={contactsData} />
        <CalendarList calendarData={calendarData} />
        <DropboxList dropboxData={dropboxData} />
        <SlackList slackData={slackData} />
        <TwitterList twitterData={twitterData} />
      </div>
    );
  } else if (category === "Contacts") {
    categories = (
      <div>
        <ContactsList contactsData={contactsData} />
      </div>
    );
  } else if (category === "Calendar") {
    categories = (
      <div>
        <CalendarList calendarData={calendarData} />
      </div>
    );
  } else if (category === "Dropbox") {
    categories = (
      <div>
        <DropboxList dropboxData={dropboxData} />
      </div>
    );
  } else if (category === "Slack") {
    categories = (
      <div>
        <SlackList slackData={slackData} />
      </div>
    );
  } else if (category === "Tweet") {
    categories = (
      <div>
        <TwitterList twitterData={twitterData} />
      </div>
    );
  }

  return <SearchResultWrapper>{categories}</SearchResultWrapper>;
}

export default SearchResult;
