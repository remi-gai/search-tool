import React, { useState, useEffect, memo } from "react";
import axios from "axios";
import moment from "moment";

import SearchBox from "../SearchBox/SearchBox";
import FilterMenu from "../FilterMenu/FilterMenu";
import PinnedSearches from "../PinnedSearches/PinnedSearches";
import SearchResult from "../SearchResult/SearchResult";
import TagModal from "../TagModal/TagModal";
import TagModalMessage from "../TagModal/TagModalMessage";

import {
  WindowWrapper,
  ResultsOuterWrapper,
  PinnedAndResultsWrapper,
  InitialMessageWrapper,
} from "./styles";
import {
  Calendar,
  Contacts,
  Dropbox,
  Slack,
  Twitter,
  Category,
  Pinned,
  Id,
  Tag,
  TaggedSearches,
  TaggedId,
  TagElement,
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

  const [pinnedSearches, setPinnedSearches] = useState({
    contacts: [],
    calendar: [],
    dropbox: [],
    slack: [],
    twitter: [],
  } as Pinned);
  const [pinnedIds, setPinnedIds] = useState({} as Id);
  const [showModal, setModal] = useState(false as boolean);

  const [taggedSearches, setTaggedSearches] = useState({
    test: {
      contacts: [],
      calendar: [],
      dropbox: [],
      slack: [],
      twitter: [],
    },
    bob: {
      contacts: [],
      calendar: [],
      dropbox: [],
      slack: [],
      twitter: [],
    },
  } as TaggedSearches);
  const [taggedIds, setTaggedIds] = useState({} as TaggedId);
  const [tagWord, setTagWord] = useState("" as string);
  const [tagCategory, setTagCategory] = useState("" as string);
  const [tagElement, setTagElement] = useState({} as TagElement);

  useEffect(() => {
    document.addEventListener("keydown", keyDownListener);
    return () => {
      document.removeEventListener("keydown", keyDownListener);
    };
  }, [searchWord]);

  const toggleModal = (category, element) => {
    setModal(!showModal);
    setTagCategoryAndElement(category, element);
  };

  const setTagCategoryAndElement = (category, element) => {
    console.log(category, element);
    setTagCategory(category);
    setTagElement(element);
  };

  const keyDownListener = (event: KeyboardEvent) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      // showModal ? onSaveTag() : onSearchWordSubmit();
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

  const onTagWordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const word = event.target.value;
    setTagWord(word);
  };

  const onSaveTag = () => {
    const copyOfTaggedSearches = JSON.parse(JSON.stringify(taggedSearches));
    const copyOfTaggedIds = JSON.parse(JSON.stringify(taggedIds));
    if (!taggedSearches[tagWord]) {
      const template = {
        contacts: [],
        calendar: [],
        dropbox: [],
        slack: [],
        twitter: [],
      };
      copyOfTaggedSearches[tagWord] = template;
    }
    if (!taggedIds[tagElement.id]) {
      copyOfTaggedIds[tagElement.id] = [];
    }

    copyOfTaggedSearches[tagWord][tagCategory].push(tagElement);
    copyOfTaggedIds[tagElement.id].push(tagWord);
    setTaggedSearches(copyOfTaggedSearches);
    setTaggedIds(copyOfTaggedIds);
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
        console.log(err);
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

  const pinSearchResult = (category: string, id: string) => {
    let categoryData;
    if (category === "contacts") {
      categoryData = contactsData;
    } else if (category === "calendar") {
      categoryData = calendarData;
    } else if (category === "dropbox") {
      categoryData = dropboxData;
    } else if (category === "slack") {
      categoryData = slackData;
    } else if (category === "twitter") {
      categoryData = twitterData;
    }

    const copyOfPinnedSearches = JSON.parse(JSON.stringify(pinnedSearches));
    const copyOfPinnedIds = JSON.parse(JSON.stringify(pinnedIds));

    if (!pinnedIds[id]) {
      const targetResult = categoryData.filter((element) => element.id === id);
      copyOfPinnedSearches[category].push(targetResult[0]);
      copyOfPinnedIds[id] = true;
    } else {
      copyOfPinnedSearches[category];
      for (let i = 0; i < copyOfPinnedSearches[category].length; i++) {
        const currentElement = copyOfPinnedSearches[category][i];
        if (currentElement.id === id) {
          copyOfPinnedSearches[category].splice(i, 1);
          break;
        }
      }
      delete copyOfPinnedIds[id];
    }
    setPinnedSearches(copyOfPinnedSearches);
    setPinnedIds(copyOfPinnedIds);
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
          <PinnedAndResultsWrapper>
            <PinnedSearches
              pinnedSearches={pinnedSearches}
              pinSearchResult={pinSearchResult}
              pinnedIds={pinnedIds}
              toggleModal={toggleModal}
              taggedIds={taggedIds}
            />
            <SearchResult
              calendarData={calendarData}
              contactsData={contactsData}
              dropboxData={dropboxData}
              slackData={slackData}
              twitterData={twitterData}
              category={category}
              searchedWord={searchedWord}
              pinSearchResult={pinSearchResult}
              pinnedIds={pinnedIds}
              toggleModal={toggleModal}
              taggedIds={taggedIds}
            />
          </PinnedAndResultsWrapper>
        ) : (
          <InitialMessageWrapper>
            Search across contacts, calendar, dropbox, slack and twitter. Enter
            a query in the search input above, and results will displayed after
            you click on submit or enter on your keyboard
          </InitialMessageWrapper>
        )}
        <button onClick={() => toggleModal("", {})}>click</button>
      </ResultsOuterWrapper>
      {showModal ? (
        <TagModal>
          <TagModalMessage
            taggedIds={taggedIds}
            taggedSearches={taggedSearches}
            toggleModal={toggleModal}
            onTagWordChange={onTagWordChange}
            onSaveTag={onSaveTag}
          ></TagModalMessage>
        </TagModal>
      ) : null}
    </WindowWrapper>
  );
}

export default App;
