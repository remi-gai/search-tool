import { useState } from "react";

import { TaggedSearches, TaggedId, Entry } from "../interfaces/interfaces";

const useTag = () => {
  const [taggedSearches, updateTaggedSearches] = useState({} as TaggedSearches);
  const [taggedIds, updateTaggedIds] = useState({} as TaggedId);
  const [tagWord, updateTagWord] = useState("" as string);
  const [tagCategory, updateTagCategory] = useState("" as string);
  const [tagElement, updateTagElement] = useState({} as Entry);
  const [showTagMenu, updateTagMenu] = useState(false as boolean);

  const setTaggedSearches = (data) => {
    updateTaggedSearches(data);
  };

  const setTaggedIds = (data) => {
    updateTaggedIds(data);
  };

  const setTagWord = (word) => {
    updateTagWord(word);
  };

  const setTagCategory = (category) => {
    updateTagCategory(category);
  };

  const setTagElement = (element) => {
    updateTagElement(element);
  };

  const setTagMenu = () => {
    updateTagMenu(!showTagMenu);
  };

  return {
    taggedSearches,
    taggedIds,
    tagWord,
    tagCategory,
    tagElement,
    showTagMenu,
    setTaggedSearches,
    setTaggedIds,
    setTagWord,
    setTagCategory,
    setTagElement,
    setTagMenu,
  };
};

export { useTag };
