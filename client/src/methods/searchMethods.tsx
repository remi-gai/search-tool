import axios from "axios";
import moment from "moment";

const emptyData = {
  contacts: [],
  calendar: [],
  dropbox: [],
  slack: [],
  twitter: [],
};

const displayTaggedResults = (
  tag,
  { taggedSearches },
  { setSearchData, setSearchWord, setSearchedWord, setCategory }
) => {
  setSearchData(taggedSearches[tag]);
  setSearchWord("#" + tag);
  setSearchedWord("#" + tag);
  setCategory("all");
};

const onSearchWordSubmit = (searchHooks, pinHooks, tagHooks, setIsLoading) => {
  const firstCharacter = searchHooks.searchWord[0];
  const remainingCharacter = searchHooks.searchWord.substring(
    1,
    searchHooks.searchWord.length
  );

  if (firstCharacter !== "#") {
    return getSearchResults(searchHooks.searchWord, setIsLoading, searchHooks);
  }

  if (tagHooks.taggedSearches[remainingCharacter]) {
    return displayTaggedResults(remainingCharacter, pinHooks, searchHooks);
  }

  return formatAndSetResults(null, searchHooks, setIsLoading);
};

const getSearchResults = (searchWord, setIsLoading, searchHooks) => {
  setIsLoading(true);
  axios
    .get("/api/results/" + searchWord.toLowerCase())
    .then((results) => {
      formatAndSetResults(results, searchHooks, setIsLoading);
    })
    .catch((err) => {
      console.log("error: ", err);
      setIsLoading(false);
    });
};

const formatAndSetResults = (
  results,
  { searchWord, setSearchedWord, setCategory, setSearchData },
  setIsLoading
) => {
  setSearchedWord(searchWord);
  setIsLoading(false);

  if (results === null) {
    setCategory("all");
    return setSearchData(emptyData);
  }

  // sort array based on descending time to improve search relevance
  const categories = ["contacts", "calendar", "dropbox", "slack", "twitter"];
  categories.forEach((category) => {
    results.data[category] = sortArrayByTimeDescendingOrder(
      results.data[category],
      category
    );
  });

  setCategory("all");
  setSearchData(results.data);
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

const onSearchWordChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  { setSearchWord }
) => {
  const word = event.target.value;
  setSearchWord(word);
};

const clearSearchBox = ({ setSearchWord, setSearchedWord }, searchInputRef) => {
  setSearchWord("");
  setSearchedWord("");

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
