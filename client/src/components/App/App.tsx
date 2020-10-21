import React, { useState, useRef } from "react";

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
  SearchResultsWrapper,
} from "./styles";

import {
  onSearchWordSubmit,
  onSearchWordChange,
  clearSearchBox,
  displayTaggedResults,
} from "../../methods/searchMethods";

import { pinSearchResult, clearPinBoard } from "../../methods/pinMethods";

import {
  onTagWordChange,
  onSaveTag,
  deleteTag,
  deleteElementFromTag,
  toggleTagMenu,
} from "../../methods/tagMethods";

import { toggleModal, onKeyUp } from "../../methods/utilsMethods";

import {
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
  const [isLoading, setIsLoading] = useState(false as boolean);

  const [taggedSearches, setTaggedSearches] = useState({} as TaggedSearches);
  const [taggedIds, setTaggedIds] = useState({} as TaggedId);
  const [tagWord, setTagWord] = useState("" as string);
  const [tagCategory, setTagCategory] = useState("" as string);
  const [tagElement, setTagElement] = useState({} as Entry);
  const [showTagMenu, setTagMenu] = useState(false as boolean);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const searchHooks = {
    searchData,
    setSearchData,
    category,
    setCategory,
    searchWord,
    setSearchWord,
    searchedWord,
    setSearchedWord,
  };

  const tagHooks = {
    taggedSearches,
    setTaggedSearches,
    taggedIds,
    setTaggedIds,
    tagWord,
    setTagWord,
    tagCategory,
    setTagCategory,
    tagElement,
    setTagElement,
    showTagMenu,
    setTagMenu,
  };

  const pinHooks = {
    pinnedSearches,
    setPinnedSearches,
    pinnedIds,
    setPinnedIds,
  };

  const modalHooks = {
    showModal,
    setModal,
  };

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
        searchHooks={searchHooks}
        pinHooks={pinHooks}
        tagHooks={tagHooks}
        setIsLoading={setIsLoading}
      />

      <ResultsOuterWrapper>
        {showTagMenu ? (
          <TagMenu
            toggleTagMenu={toggleTagMenu}
            taggedSearches={taggedSearches}
            displayTaggedResults={displayTaggedResults}
            deleteTag={deleteTag}
            tagHooks={tagHooks}
            searchHooks={searchHooks}
          />
        ) : (
          <FilterMenu
            category={category}
            searchData={searchData}
            setCategory={setCategory}
            toggleTagMenu={toggleTagMenu}
            tagHooks={tagHooks}
          />
        )}
        <PinnedAndResultsWrapper>
          <PinnedSearches
            pinnedSearches={pinnedSearches}
            pinSearchResult={pinSearchResult}
            pinnedIds={pinnedIds}
            toggleModal={toggleModal}
            taggedIds={taggedIds}
            clearPinBoard={clearPinBoard}
            pinHooks={pinHooks}
            searchHooks={searchHooks}
            modalHooks={modalHooks}
            tagHooks={tagHooks}
          />
          <SearchResultsWrapper>
            <SearchResult
              searchData={searchData}
              setSearchData={setSearchData}
              setSearchedWord={setSearchedWord}
              category={category}
              searchedWord={searchedWord}
              pinSearchResult={pinSearchResult}
              pinnedIds={pinnedIds}
              toggleModal={toggleModal}
              taggedIds={taggedIds}
              isLoading={isLoading}
              pinHooks={pinHooks}
              searchHooks={searchHooks}
              modalHooks={modalHooks}
              tagHooks={tagHooks}
            />
          </SearchResultsWrapper>
        </PinnedAndResultsWrapper>
      </ResultsOuterWrapper>
      {showModal && (
        <TagModal>
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
            setTagWord={setTagWord}
            tagHooks={tagHooks}
            pinHooks={pinHooks}
            searchHooks={searchHooks}
            setIsLoading={setIsLoading}
            modalHooks={modalHooks}
          ></TagModalMessage>
        </TagModal>
      )}
    </WindowWrapper>
  );
}

export default App;
