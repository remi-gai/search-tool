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
import {
  Calendar,
  Contacts,
  Dropbox,
  Slack,
  Twitter,
  Category,
} from "../../interfaces/interfaces";

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

  //useEffectToQuery Data

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
