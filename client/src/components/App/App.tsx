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
  const [contactsData, setContacts] = useState([] as Contacts[]);
  const [calendarData, setCalendar] = useState([] as Calendar[]);
  const [dropboxData, setDropbox] = useState([] as Dropbox[]);
  const [slackData, setSlack] = useState([] as Slack[]);
  const [twitterData, setTwitter] = useState([] as Twitter[]);
  const [category, setCategory] = useState("ALL" as string);
  const [searchWord, setSearchWord] = useState("" as string);
  const [searchedWord, setSearchedWord] = useState("" as string);

  useEffect(() => {
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [searchWord]);

  const listener = (event: KeyboardEvent) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      onSearchWordSubmit();
    }
  };

  const filterCategory = (category: Category) => {
    setCategory(category);
  };

  const onSearchWordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const word = event.target.value;
    setSearchWord(word);
  };

  const onSearchWordSubmit = () => {
    getSearchResults(searchWord);
  };

  const getSearchResults = (searchWord: string) => {
    axios
      .get("/api/results/" + searchWord)
      .then((results) => {
        setCalendar(results.data.calendar);
        setContacts(results.data.contacts);
        setDropbox(results.data.dropbox);
        setSlack(results.data.slack);
        setTwitter(results.data.tweet);
        setSearchedWord(searchWord);
      })
      .catch((err) => {
        setSearchedWord(searchWord);
      });
  };

  return (
    <WindowWrapper>
      <SearchBox
        onSearchWordChange={onSearchWordChange}
        onSearchWordSubmit={onSearchWordSubmit}
      />

      <ResultsOuterWrapper>
        <FilterMenu filterCategory={filterCategory} />
        {searchedWord.length ? (
          <SearchResult
            calendarData={calendarData}
            contactsData={contactsData}
            dropboxData={dropboxData}
            slackData={slackData}
            twitterData={twitterData}
            category={category}
            searchedWord={searchedWord}
          />
        ) : (
          <div>
            Search across contacts, calendar, dropbox, slack and twitter. Enter
            a query in the search input above, and results will displayed after
            you click on submit or enter on your keyboard
          </div>
        )}
      </ResultsOuterWrapper>
    </WindowWrapper>
  );
}

export default App;
