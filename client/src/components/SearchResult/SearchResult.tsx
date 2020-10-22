import React from "react";
import shortid from "shortid";
import { Ellipsis } from "react-awesome-spinners";

import {
  SearchResultOuterWrapper,
  SearchResultInnerWrapper,
  ClearSearchBoardAndIconWrapper,
  SearchAndSearchBoardTitleWrapper,
  SearchIcon,
  SearchBoardTitle,
  ClearSearchBoardButton,
  InitialMessageWrapper,
  SpinnerWrapper,
  ResultCategoryTitle,
  GrayLineDivider,
} from "./styles";

import ResultList from "../ResultList/ResultList";

import {
  PinHooks,
  TagHooks,
  SearchHooks,
  ModalHooks,
} from "../../interfaces/interfaces";

interface Props {
  pinSearchResult: Function;
  toggleModal: Function;
  isLoading: boolean;
  pinHooks: PinHooks;
  searchHooks: SearchHooks;
  modalHooks: ModalHooks;
  tagHooks: TagHooks;
}

function SearchResult({
  pinSearchResult,
  toggleModal,
  isLoading,
  pinHooks,
  searchHooks,
  modalHooks,
  tagHooks,
}: Props) {
  const {
    searchData,
    category,
    searchedWord,
    setSearchData,
    setSearchedWord,
  } = searchHooks;

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
      <p>
        Oops! We couldn't find any result for <strong>{searchedWord}</strong>.
        Please try again with a different search, filter or tag.
      </p>
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
          const hasData = searchData[category].length;
          return (
            <div key={shortid.generate()}>
              {hasData ? (
                <ResultCategoryTitle>
                  {category[0].toUpperCase() +
                    category.substring(1, category.length)}
                </ResultCategoryTitle>
              ) : null}
              <ResultList
                searchData={searchData}
                category={category}
                pinSearchResult={pinSearchResult}
                toggleModal={toggleModal}
                pinHooks={pinHooks}
                searchHooks={searchHooks}
                modalHooks={modalHooks}
                tagHooks={tagHooks}
              ></ResultList>
              {hasData ? <GrayLineDivider></GrayLineDivider> : null}
            </div>
          );
        })}
      </div>
    );
  } else {
    display = (
      <div>
        <ResultCategoryTitle>
          {category[0].toUpperCase() + category.substring(1, category.length)}
        </ResultCategoryTitle>
        {searchData[category].length ? (
          <ResultList
            searchData={searchData}
            category={category}
            pinSearchResult={pinSearchResult}
            toggleModal={toggleModal}
            pinHooks={pinHooks}
            searchHooks={searchHooks}
            modalHooks={modalHooks}
            tagHooks={tagHooks}
          ></ResultList>
        ) : (
          <div>
            The <strong>{category}</strong> category does not have any search
            results.
          </div>
        )}
      </div>
    );
  }

  return (
    <SearchResultOuterWrapper>
      <ClearSearchBoardAndIconWrapper>
        <SearchAndSearchBoardTitleWrapper>
          <SearchIcon></SearchIcon>
          <SearchBoardTitle>Search Results:</SearchBoardTitle>
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
      {isLoading ? (
        <SpinnerWrapper>
          <Ellipsis color="#415aff"></Ellipsis>
        </SpinnerWrapper>
      ) : (
        <div>{isDataAvailable ? display : message}</div>
      )}
    </SearchResultOuterWrapper>
  );
}

export default SearchResult;
