import React, { useRef } from "react";

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
} from "../../utils/searchUtils";
import {
  onTagWordChange,
  onSaveTag,
  deleteTag,
  deleteElementFromTag,
  toggleTagMenu,
} from "../../utils/tagUtils";
import { pinSearchResult, clearPinBoard } from "../../utils/pinUtils";
import { toggleModal, onKeyUp } from "../../utils/utils";

import { useSearch } from "../../hooks/searchHooks";
import { usePin } from "../../hooks/pinHooks";
import { useTag } from "../../hooks/tagHooks";
import { useModalStatus } from "../../hooks/modalHooks";
import { useLoadingStatus } from "../../hooks/loadingHooks";

function App() {
  const {
    searchData,
    category,
    searchWord,
    searchedWord,
    setSearchData,
    setCategory,
    setSearchWord,
    setSearchedWord,
  } = useSearch();

  const {
    pinnedSearches,
    pinnedIds,
    setPinnedSearches,
    setPinnedIds,
  } = usePin();

  const {
    taggedSearches,
    taggedIds,
    tagWord,
    tagCategory,
    tagElement,
    showTagMenu,
    setTaggedSearches,
    setTaggedIds,
    setTagWord,
    setTagCategory,
    setTagElement,
    setTagMenu,
  } = useTag();

  const { showModal, setModal } = useModalStatus();

  const { isLoading, setIsLoading } = useLoadingStatus();

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
        clearSearchBox={clearSearchBox}
        onKeyUp={onKeyUp}
        setIsLoading={setIsLoading}
        searchInputRef={searchInputRef}
        searchHooks={searchHooks}
        pinHooks={pinHooks}
        tagHooks={tagHooks}
      />

      <ResultsOuterWrapper>
        {showTagMenu ? (
          <TagMenu
            toggleTagMenu={toggleTagMenu}
            displayTaggedResults={displayTaggedResults}
            deleteTag={deleteTag}
            tagHooks={tagHooks}
            searchHooks={searchHooks}
          />
        ) : (
          <FilterMenu
            toggleTagMenu={toggleTagMenu}
            searchHooks={searchHooks}
            tagHooks={tagHooks}
          />
        )}
        <PinnedAndResultsWrapper>
          <PinnedSearches
            pinSearchResult={pinSearchResult}
            toggleModal={toggleModal}
            clearPinBoard={clearPinBoard}
            pinHooks={pinHooks}
            searchHooks={searchHooks}
            modalHooks={modalHooks}
            tagHooks={tagHooks}
          />
          <SearchResultsWrapper>
            <SearchResult
              pinSearchResult={pinSearchResult}
              toggleModal={toggleModal}
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
            toggleModal={toggleModal}
            onTagWordChange={onTagWordChange}
            onSaveTag={onSaveTag}
            deleteElementFromTag={deleteElementFromTag}
            onKeyUp={onKeyUp}
            setIsLoading={setIsLoading}
            tagHooks={tagHooks}
            pinHooks={pinHooks}
            searchHooks={searchHooks}
            modalHooks={modalHooks}
          ></TagModalMessage>
        </TagModal>
      )}
    </WindowWrapper>
  );
}

export default App;
