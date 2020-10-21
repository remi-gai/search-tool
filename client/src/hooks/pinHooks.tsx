import { useState } from "react";

import { emptyData } from "../methods/searchMethods";

import { SearchData, Id } from "../interfaces/interfaces";

const usePin = () => {
  const [pinnedSearches, updatePinnedSearches] = useState(
    emptyData as SearchData
  );
  const [pinnedIds, updatePinnedIds] = useState({} as Id);

  const setPinnedSearches = (data) => {
    updatePinnedSearches(data);
  };

  const setPinnedIds = (category) => {
    updatePinnedIds(category);
  };

  return {
    pinnedSearches,
    pinnedIds,
    setPinnedSearches,
    setPinnedIds,
  };
};

export { usePin };
