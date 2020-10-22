import { useState } from "react";

import { SearchData } from "../interfaces/interfaces";

import { emptyData } from "../utils/searchUtils";

const useSearch = () => {
  const [searchData, updateSearchData] = useState(emptyData as SearchData);
  const [category, updateCategory] = useState("all" as string);
  const [searchWord, updateSearchWord] = useState("" as string);
  const [searchedWord, updateSearchedWord] = useState("" as string);

  const setSearchData = (data) => {
    updateSearchData(data);
  };

  const setCategory = (category) => {
    updateCategory(category);
  };

  const setSearchWord = (word) => {
    updateSearchWord(word);
  };

  const setSearchedWord = (word) => {
    updateSearchedWord(word);
  };

  return {
    searchData,
    category,
    searchWord,
    searchedWord,
    setSearchData,
    setCategory,
    setSearchWord,
    setSearchedWord,
  };
};

export { useSearch };
