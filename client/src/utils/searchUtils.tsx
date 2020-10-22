import axios from "axios";
import moment from "moment";

import {
  Entry,
  SearchData,
  SearchHooks,
  TagHooks,
  SearchInputRef,
} from "../interfaces/interfaces";

const emptyData = {
  contacts: [],
  calendar: [],
  dropbox: [],
  slack: [],
  twitter: [],
};

const displayTaggedResults = (
  tag: string,
  { taggedSearches }: TagHooks,
  { setSearchData, setSearchWord, setSearchedWord, setCategory }: SearchHooks
): void => {
  setSearchData(taggedSearches[tag]);
  setSearchWord("#" + tag);
  setSearchedWord("#" + tag);
  setCategory("all");
};

const onSearchWordSubmit = (
  searchHooks: SearchHooks,
  tagHooks: TagHooks,
  setIsLoading: Function
): void => {
  const firstCharacter = searchHooks.searchWord[0];
  const remainingCharacter = searchHooks.searchWord.substring(
    1,
    searchHooks.searchWord.length
  );

  if (firstCharacter !== "#") {
    return getSearchResults(searchHooks.searchWord, setIsLoading, searchHooks);
  }

  if (tagHooks.taggedSearches[remainingCharacter]) {
    return displayTaggedResults(remainingCharacter, tagHooks, searchHooks);
  }

  return formatAndSetResults(null, searchHooks, setIsLoading);
};

const getSearchResults = (
  searchWord: string,
  setIsLoading: Function,
  searchHooks: SearchHooks
): void => {
  setIsLoading(true);
  axios
    .get("/api/results/" + searchWord.toLowerCase())
    .then((results) => {
      formatAndSetResults(results.data, searchHooks, setIsLoading);
    })
    .catch((err) => {
      console.log("error: ", err);
      setIsLoading(false);
    });
};

const formatAndSetResults = (
  results: SearchData | null,
  { searchWord, setSearchedWord, setCategory, setSearchData }: SearchHooks,
  setIsLoading: Function
): void => {
  setSearchedWord(searchWord);
  setIsLoading(false);

  if (results === null) {
    setCategory("all");
    setSearchData(emptyData);
    return;
  }

  // sort array based on descending time to improve search relevance
  const categories = ["contacts", "calendar", "dropbox", "slack", "twitter"];
  categories.forEach((category) => {
    results[category] = sortArrayByTimeDescendingOrder(
      results[category],
      category
    );
  });

  setCategory("all");
  setSearchData(results);
};

const sortArrayByTimeDescendingOrder = (
  array: Entry[],
  category: string
): Entry[] => {
  const dateAndTimeFormat = "YYYY-MM-DD hh:mm:ss";
  const dateAndTimeNoSymbolsFormat = "YYYYMMDDhhmmss";

  enum FormatDateName {
    contacts = "last_contact",
    calendar = "date",
    dropbox = "created",
    slack = "timestamp",
    twitter = "timestamp",
  }

  return array.sort((a, b) => {
    const bTime = moment(b[FormatDateName[category]], dateAndTimeFormat).format(
      dateAndTimeNoSymbolsFormat
    );
    const aTime = moment(a[FormatDateName[category]], dateAndTimeFormat).format(
      dateAndTimeNoSymbolsFormat
    );
    return Number(bTime) - Number(aTime);
  });
};

const onSearchWordChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  { setSearchWord }: SearchHooks
): void => {
  const word = event.target.value;
  setSearchWord(word);
};

const clearSearchBox = (
  { setSearchWord, setSearchedWord, setSearchData }: SearchHooks,
  searchInputRef: SearchInputRef
): void => {
  setSearchWord("");
  setSearchedWord("");
  setSearchData(emptyData);

  if (searchInputRef.current !== null) {
    searchInputRef.current.focus();
  }
};

export {
  displayTaggedResults,
  getSearchResults,
  formatAndSetResults,
  sortArrayByTimeDescendingOrder,
  onSearchWordChange,
  clearSearchBox,
  onSearchWordSubmit,
  emptyData,
};
