import { SearchData, Id } from "../interfaces/interfaces";

const pinSearchResult = (
  category: string,
  id: string,
  { pinnedSearches, pinnedIds, setPinnedSearches, setPinnedIds },
  { searchData }
) => {
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

const clearPinBoard = ({ setPinnedSearches, setPinnedIds }) => {
  setPinnedSearches({
    contacts: [],
    calendar: [],
    dropbox: [],
    slack: [],
    twitter: [],
  } as SearchData);
  setPinnedIds({} as Id);
};

export { pinSearchResult, clearPinBoard };
