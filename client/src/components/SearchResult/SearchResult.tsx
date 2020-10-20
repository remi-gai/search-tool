import React from "react";
import shortid from "shortid";

import {
  SearchResultOuterWrapper,
  SearchResultInnerWrapper,
  ClearSearchBoardAndIconWrapper,
  SearchAndSearchBoardTitleWrapper,
  SearchIcon,
  SearchBoardTitle,
  ClearSearchBoardButton,
  InitialMessageWrapper,
} from "./styles";
import ResultList from "../ResultList/ResultList";

import { SearchData, Id, TaggedId } from "../../interfaces/interfaces";

interface Props {
  searchData: SearchData;
  category: string;
  searchedWord: string;
  pinnedIds: Id;
  taggedIds: TaggedId;
  pinSearchResult: Function;
  toggleModal: Function;
  setSearchData: Function;
  setSearchedWord: Function;
}

function SearchResult({
  searchData,
  category,
  searchedWord,
  pinSearchResult,
  pinnedIds,
  toggleModal,
  taggedIds,
  setSearchData,
  setSearchedWord,
}: Props) {
  let display;

  const lengthOfAllData =
    searchData.contacts.length +
    searchData.calendar.length +
    searchData.dropbox.length +
    searchData.slack.length +
    searchData.twitter.length;

  const initialMessage = (
    <InitialMessageWrapper>
      {
        "Search across contacts, calendar, dropbox, slack and twitter. Enter a query in the search input above, and results will displayed after you click on submit or enter on your keyboard."
      }
    </InitialMessageWrapper>
  );

  const errorMessage = (
    <SearchResultInnerWrapper>
      {`Oops! We couldn't find any result for ${searchedWord}. Please try again with a different
      search, filter or tag.`}
    </SearchResultInnerWrapper>
  );

  const isDataAvailable = lengthOfAllData ? true : false;
  const message = searchedWord ? errorMessage : initialMessage;

  const emptyData = {
    contacts: [],
    calendar: [],
    dropbox: [],
    slack: [],
    twitter: [],
  };

  const categories = ["contacts", "calendar", "dropbox", "slack", "twitter"];

  if (category === "all") {
    display = (
      <div>
        {categories.map((category) => {
          return (
            <ResultList
              searchData={searchData}
              category={category}
              pinSearchResult={pinSearchResult}
              pinnedIds={pinnedIds}
              toggleModal={toggleModal}
              taggedIds={taggedIds}
              key={shortid.generate()}
            ></ResultList>
          );
        })}
      </div>
    );
  } else {
    display = (
      <ResultList
        searchData={searchData}
        category={category}
        pinSearchResult={pinSearchResult}
        pinnedIds={pinnedIds}
        toggleModal={toggleModal}
        taggedIds={taggedIds}
      ></ResultList>
    );
  }

  return (
    <SearchResultOuterWrapper>
      <ClearSearchBoardAndIconWrapper>
        <SearchAndSearchBoardTitleWrapper>
          <SearchIcon></SearchIcon>
          <SearchBoardTitle>Search Results</SearchBoardTitle>
        </SearchAndSearchBoardTitleWrapper>
        <ClearSearchBoardButton
          onClick={() => {
            setSearchData(emptyData);
            setSearchedWord("");
          }}
        >
          Clear Search Results
        </ClearSearchBoardButton>
      </ClearSearchBoardAndIconWrapper>
      {isDataAvailable ? display : message}
    </SearchResultOuterWrapper>
  );
}

export default SearchResult;
