import React, { useState, useEffect, memo } from "react";

import calendarDummy from "../../data/calendar";
import contactsDummy from "../../data/contacts.js";
import dropboxDummy from "../../data/dropbox.js";
import slackDummy from "../../data/slack.js";
import twitterDummy from "../../data/twitter.js";

import SearchBox from "../SearchBox/SearchBox";
import FilterMenu from "../FilterMenu/FilterMenu";
import SearchResult from "../SearchResult/SearchResult";

import { WindowWrapper, ResultsOuterWrapper } from "./styles";

interface Calendar {
  date: string;
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

enum Category {
  ALL = "ALL",
  CONTACTS = "CONTACTS",
  DROPBOX = "DROPBOX",
  SLACK = "SLACK",
  TWITTER = "TWITTER",
}

function App() {
  const [calendarData, setCalendar] = useState(
    calendarDummy.calendar as Calendar[]
  );
  const [contactsData, setContacts] = useState(
    contactsDummy.contacts as Contacts[]
  );
  const [dropboxData, setDropbox] = useState(dropboxDummy.dropbox as Dropbox[]);
  const [slackData, setSlack] = useState(slackDummy.slack as Slack[]);
  const [twitterData, setTwitter] = useState(twitterDummy.twitter as Twitter[]);
  const [category, setCategory] = useState("ALL" as string);

  const filterCategory = (category: Category) => {
    setCategory(category);
  };

  return (
    <WindowWrapper>
      <SearchBox />

      <ResultsOuterWrapper>
        <FilterMenu filterCategory={filterCategory} />
        <SearchResult
          calendarData={calendarData}
          contactsData={contactsData}
          dropboxData={dropboxData}
          slackData={slackData}
          twitterData={twitterData}
          category={category}
        />
      </ResultsOuterWrapper>
    </WindowWrapper>
  );
}

export default App;
