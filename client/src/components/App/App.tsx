import React, { useState, useEffect, memo } from "react";
import axios from "axios";
import moment from "moment";

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
        // sort array based on descending time to improve search relevance
        const sortedContacts = sortArrayByTimeDescendingOrder(
          results.data.contacts,
          "contacts"
        );
        const sortedCalendar = sortArrayByTimeDescendingOrder(
          results.data.calendar,
          "calendar"
        );
        const sortedDropbox = sortArrayByTimeDescendingOrder(
          results.data.dropbox,
          "dropbox"
        );
        const sortedSlack = sortArrayByTimeDescendingOrder(
          results.data.slack,
          "slack"
        );
        const sortedTwitter = sortArrayByTimeDescendingOrder(
          results.data.tweet,
          "tweet"
        );

        setContacts(sortedContacts);
        setCalendar(sortedCalendar);
        setDropbox(sortedDropbox);
        setSlack(sortedSlack);
        setTwitter(sortedTwitter);
        setSearchedWord(searchWord);
      })
      .catch((err) => {
        setSearchedWord(searchWord);
      });
  };

  const sortArrayByTimeDescendingOrder = (array: [], category: string) => {
    let timeKey: string;
    if (category === "contacts") {
      timeKey = "last_contact";
    } else if (category === "calendar") {
      timeKey = "date";
    } else if (category === "dropbox") {
      timeKey = "created";
    } else if (category === "slack" || category === "tweet") {
      timeKey = "timestamp";
    }

    return array.sort((a, b) => {
      const bTime = moment(b[timeKey], "YYYY-MM-DD hh:mm:ss").format(
        "YYYYMMDDhhmmss"
      );
      const aTime = moment(a[timeKey], "YYYY-MM-DD hh:mm:ss").format(
        "YYYYMMDDhhmmss"
      );
      return Number(bTime) - Number(aTime);
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
