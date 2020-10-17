import React, { useState, useEffect, memo } from "react";
import axios from "axios";

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
  const [calendarData, setCalendar] = useState([] as Calendar[]);
  const [contactsData, setContacts] = useState([] as Contacts[]);
  const [dropboxData, setDropbox] = useState([] as Dropbox[]);
  const [slackData, setSlack] = useState([] as Slack[]);
  const [twitterData, setTwitter] = useState([] as Twitter[]);
  const [category, setCategory] = useState("ALL" as string);

  const filterCategory = (category: Category) => {
    setCategory(category);
  };

  const getSearchResults = (searchWord: string) => {
    axios
      .get("/api/results/" + searchWord)
      .then((result) => {})
      .catch((err) => {});
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
