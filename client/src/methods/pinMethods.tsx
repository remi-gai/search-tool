import { SearchData, Id } from "../interfaces/interfaces";

const pinSearchResult = (
  category: string,
  id: string,
  { pinnedSearches, pinnedIds, setPinnedSearches, setPinnedIds },
  { searchData }
) => {
  let newList;

  if (!pinnedIds[id]) {
    const targetResult = searchData[category].filter(
      (element) => element.id === id
    );

    newList = pinnedSearches[category].slice();
    newList.push(targetResult[0]);
    setPinnedSearches({ ...pinnedSearches, [category]: newList });
    setPinnedIds({ ...pinnedIds, [id]: true });
    return;
  }

  for (let i = 0; i < pinnedSearches[category].length; i++) {
    const currentElement = pinnedSearches[category][i];
    if (currentElement.id === id) {
      newList = pinnedSearches[category].slice();
      newList.splice(i, 1);
      break;
    }
  }
  const copyOfPinnedIds = JSON.parse(JSON.stringify(pinnedIds));
  delete copyOfPinnedIds[id];
  setPinnedSearches({ ...pinnedSearches, [category]: newList });
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
