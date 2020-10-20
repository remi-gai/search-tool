import React, { useState, useEffect, useRef, memo } from "react";
import { Roller } from "react-awesome-spinners";
import axios from "axios";
import moment from "moment";

import SearchBox from "../SearchBox/SearchBox";
import FilterMenu from "../FilterMenu/FilterMenu";
import PinnedSearches from "../PinnedSearches/PinnedSearches";
import SearchResult from "../SearchResult/SearchResult";
import TagModal from "../TagModal/TagModal";
import TagModalMessage from "../TagModal/TagModalMessage";
import TagMenu from "../TagMenu/TagMenu";

import {
  GlobalStyle,
  WindowWrapper,
  ResultsOuterWrapper,
  PinnedAndResultsWrapper,
  InitialMessageWrapper,
} from "./styles";

import {
  Category,
  SearchData,
  Id,
  TaggedSearches,
  TaggedId,
  Entry,
} from "../../interfaces/interfaces";

function App() {
  const [searchData, setSearchData] = useState({
    contacts: [],
    calendar: [],
    dropbox: [],
    slack: [],
    twitter: [],
  } as SearchData);

  const [category, setCategory] = useState("all" as string);
  const [searchWord, setSearchWord] = useState("" as string);
  const [searchedWord, setSearchedWord] = useState("" as string);

  const [pinnedSearches, setPinnedSearches] = useState({
    contacts: [],
    calendar: [],
    dropbox: [],
    slack: [],
    twitter: [],
  } as SearchData);
  const [pinnedIds, setPinnedIds] = useState({} as Id);
  const [showModal, setModal] = useState(false as boolean);

  const [taggedSearches, setTaggedSearches] = useState({} as TaggedSearches);
  const [taggedIds, setTaggedIds] = useState({} as TaggedId);
  const [tagWord, setTagWord] = useState("" as string);
  const [tagCategory, setTagCategory] = useState("" as string);
  const [tagElement, setTagElement] = useState({} as Entry);
  const [showTagMenu, setTagMenu] = useState(false as boolean);
  const [isLoading, setIsLoading] = useState(false as boolean);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Toggles
  const toggleModal = (category, element) => {
    setModal(!showModal);
    if (category === null) {
      return;
    }
    setTagWord("");
    setTagCategory(category);
    setTagElement(element);
  };

  const toggleTagMenu = () => {
    setTagMenu(!showTagMenu);
  };

  //search methods

  // pass in searchWord
  const onSearchWordSubmit = () => {
    const firstCharacter = searchWord[0];
    const remainingCharacter = searchWord.substring(1, searchWord.length);

    if (firstCharacter !== "#") {
      return getSearchResults(searchWord);
    }

    if (taggedSearches[remainingCharacter]) {
      return displayTaggedResults(remainingCharacter);
    }

    return formatAndSetResults(null);
  };

  const getSearchResults = (searchWord: string) => {
    setIsLoading(true);
    axios
      .get("/api/results/" + searchWord)
      .then((results) => {
        formatAndSetResults(results);
      })
      .catch((err) => {
        console.log("error: ", err);
        setIsLoading(false);
      });
  };

  const formatAndSetResults = (results) => {
    // sort array based on descending time to improve search relevance
    const categories = ["contacts", "calendar", "dropbox", "slack", "twitter"];
    categories.forEach((category) => {
      results.data[category] = sortArrayByTimeDescendingOrder(
        results.data[category],
        category
      );
    });

    setSearchData(results.data);
    setSearchedWord(searchWord);
    setIsLoading(false);
  };

  const sortArrayByTimeDescendingOrder = (array: [], category: string) => {
    let timeKey: string;
    if (category === "contacts") {
      timeKey = "last_contact";
    } else if (category === "calendar") {
      timeKey = "date";
    } else if (category === "dropbox") {
      timeKey = "created";
    } else if (category === "slack" || category === "twitter") {
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

  const onSearchWordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const word = event.target.value;
    setSearchWord(word);
  };

  const clearSearchBox = () => {
    setSearchWord("");
    setSearchedWord("");

    if (searchInputRef.current !== null) {
      searchInputRef.current.focus();
    }
  };

  // Tag Methods

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
    if (copyOfTaggedIds[tagElement.id].indexOf(tagWord) === -1)
      copyOfTaggedIds[tagElement.id].push(tagWord);
    setTaggedSearches(copyOfTaggedSearches);
    setTaggedIds(copyOfTaggedIds);
  };

  const deleteTag = (tag) => {
    const copyOfTaggedSearches = JSON.parse(JSON.stringify(taggedSearches));
    delete copyOfTaggedSearches[tag];
    setTaggedSearches(copyOfTaggedSearches);
    deleteTagFromAllTaggedIds(tag);
  };

  const deleteTagFromAllTaggedIds = (tag) => {
    const keysInTaggedIds = Object.keys(taggedIds);
    const copyOfTaggedIds = JSON.parse(JSON.stringify(taggedIds));

    keysInTaggedIds.forEach((id) => {
      const idTags = copyOfTaggedIds[id];
      for (let i = 0; i < idTags.length; i++) {
        const currentTag = idTags[i];
        if (tag === currentTag) {
          idTags.splice(i, 1);
          if (idTags.length === 0) {
            delete copyOfTaggedIds[id];
          }
          break;
        }
      }
    });
    setTaggedIds(copyOfTaggedIds);
  };

  const deleteElementFromTag = (tag) => {
    const id = tagElement.id;
    const category = tagCategory;
    deleteElementFromTaggedSearches(id, tag, category);
    deleteTagFromIdInTaggedIds(id, tag);
  };

  const deleteElementFromTaggedSearches = (id, tag, category) => {
    const copyOfTaggedSearches = JSON.parse(JSON.stringify(taggedSearches));
    const tagAndCategoryData = copyOfTaggedSearches[tag][category];
    for (let i = 0; i < tagAndCategoryData.length; i++) {
      const currentElement = tagAndCategoryData[i];
      if (id === currentElement.id) {
        tagAndCategoryData.splice(i, 1);
        break;
      }
    }
    setTaggedSearches(copyOfTaggedSearches);
  };

  const deleteTagFromIdInTaggedIds = (id, tag) => {
    const copyOfTaggedIds = JSON.parse(JSON.stringify(taggedIds));
    const idTags = copyOfTaggedIds[id];
    for (let i = 0; i < idTags.length; i++) {
      const currentTag = idTags[i];
      if (tag === currentTag) {
        idTags.splice(i, 1);
        console.log(idTags.length);
        if (idTags.length === 0) {
          console.log("deleted", id);
          delete copyOfTaggedIds[id];
        }
        break;
      }
    }
    setTaggedIds(copyOfTaggedIds);
  };

  // sharing setSearchData and s
  const displayTaggedResults = (tag) => {
    setSearchData(taggedSearches[tag]);
    setSearchWord("#" + tag);
    setSearchedWord("#" + tag);
  };

  const onKeyUp = (event, refName) => {
    if (event.key === "Enter") {
      if (refName === "search") {
        onSearchWordSubmit();
      } else {
        onSaveTag();
      }
    }
  };

  // Pin methods
  const pinSearchResult = (category: string, id: string) => {
    const copyOfPinnedSearches = JSON.parse(JSON.stringify(pinnedSearches));
    const copyOfPinnedIds = JSON.parse(JSON.stringify(pinnedIds));

    if (!pinnedIds[id]) {
      const targetResult = searchData[category].filter(
        (element) => element.id === id
      );
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

  const clearPinBoard = () => {
    setPinnedSearches({
      contacts: [],
      calendar: [],
      dropbox: [],
      slack: [],
      twitter: [],
    } as SearchData);
    setPinnedIds({} as Id);
  };

  const hasSearched = searchedWord ? true : false;

  return (
    <WindowWrapper>
      <GlobalStyle />
      <SearchBox
        onSearchWordChange={onSearchWordChange}
        onSearchWordSubmit={onSearchWordSubmit}
        searchWord={searchWord}
        clearSearchBox={clearSearchBox}
        onKeyUp={onKeyUp}
        searchInputRef={searchInputRef}
      />

      <ResultsOuterWrapper>
        {showTagMenu ? (
          <TagMenu
            toggleTagMenu={toggleTagMenu}
            taggedSearches={taggedSearches}
            displayTaggedResults={displayTaggedResults}
            deleteTag={deleteTag}
          />
        ) : (
          <FilterMenu setCategory={setCategory} toggleTagMenu={toggleTagMenu} />
        )}
        <PinnedAndResultsWrapper>
          <PinnedSearches
            pinnedSearches={pinnedSearches}
            pinSearchResult={pinSearchResult}
            pinnedIds={pinnedIds}
            toggleModal={toggleModal}
            taggedIds={taggedIds}
            clearPinBoard={clearPinBoard}
          />
          {hasSearched ? (
            <SearchResult
              searchData={searchData}
              category={category}
              searchedWord={searchedWord}
              pinSearchResult={pinSearchResult}
              pinnedIds={pinnedIds}
              toggleModal={toggleModal}
              taggedIds={taggedIds}
            />
          ) : (
            <InitialMessageWrapper>
              Search across contacts, calendar, dropbox, slack and twitter.
              Enter a query in the search input above, and results will
              displayed after you click on submit or enter on your keyboard
            </InitialMessageWrapper>
          )}
        </PinnedAndResultsWrapper>
      </ResultsOuterWrapper>
      {showModal && (
        <TagModal onSaveTag={onSaveTag}>
          <TagModalMessage
            elementId={tagElement.id}
            taggedIds={taggedIds}
            taggedSearches={taggedSearches}
            toggleModal={toggleModal}
            onTagWordChange={onTagWordChange}
            onSaveTag={onSaveTag}
            deleteElementFromTag={deleteElementFromTag}
            tagWord={tagWord}
            onKeyUp={onKeyUp}
          ></TagModalMessage>
        </TagModal>
      )}
    </WindowWrapper>
  );
}

export default App;
