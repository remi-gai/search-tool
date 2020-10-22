import {
  SearchData,
  PinHooks,
  SearchHooks,
  Id,
} from "../interfaces/interfaces";

const pinSearchResult = (
  category: string,
  id: string,
  { pinnedSearches, pinnedIds, setPinnedSearches, setPinnedIds }: PinHooks,
  { searchData }: SearchHooks
): void => {
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

  const shallowCopyOfPinnedIds = { ...pinnedIds };
  delete shallowCopyOfPinnedIds[id];
  setPinnedSearches({ ...pinnedSearches, [category]: newList });
  setPinnedIds(shallowCopyOfPinnedIds);
};

const clearPinBoard = ({ setPinnedSearches, setPinnedIds }: PinHooks): void => {
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
