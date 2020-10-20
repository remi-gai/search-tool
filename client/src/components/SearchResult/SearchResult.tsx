import React from "react";
import shortid from "shortid";

import { SearchResultOuterWrapper, SearchResultInnerWrapper } from "./styles";
import ResultList from "../ResultList/ResultList";

import { SearchData, Id, TaggedId } from "../../interfaces/interfaces";

interface Props {
  searchData: SearchData;
  category: string;
  searchedWord: string;
  pinSearchResult: Function;
  pinnedIds: Id;
  toggleModal: Function;
  taggedIds: TaggedId;
}

function SearchResult({
  searchData,
  category,
  searchedWord,
  pinSearchResult,
  pinnedIds,
  toggleModal,
  taggedIds,
}: Props) {
  let display;

  const lengthOfAllData =
    searchData.contacts.length +
    searchData.calendar.length +
    searchData.dropbox.length +
    searchData.slack.length +
    searchData.twitter.length;
  const isDataAvailable = lengthOfAllData ? true : false;
  const errorMessage = (
    <SearchResultInnerWrapper>
      {`Oops! We couldn't find any result for ${searchedWord}. Please try again with a different
      search, filter or tag.`}
    </SearchResultInnerWrapper>
  );

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
      {isDataAvailable ? display : errorMessage}
    </SearchResultOuterWrapper>
  );
}

export default SearchResult;
