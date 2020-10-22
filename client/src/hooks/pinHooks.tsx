import { useState } from "react";

import { emptyData } from "../utils/searchUtils";

import { SearchData, Id, PinHooks } from "../interfaces/interfaces";

const usePin = (): PinHooks => {
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
