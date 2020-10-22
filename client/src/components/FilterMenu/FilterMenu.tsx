import React from "react";
import shortid from "shortid";

import {
  TagsFilter,
  FilterMenuWrapper,
  FilterTitle,
  CategoryFilter,
  TagsFilterWrapper,
  TagIcon,
  CategoryFilterWrapper,
  CategoryResultCount,
} from "./styles";

import { TagHooks, SearchHooks } from "../../interfaces/interfaces";

interface Props {
  toggleTagMenu: Function;
  tagHooks: TagHooks;
  searchHooks: SearchHooks;
}

function FilterMenu({ toggleTagMenu, tagHooks, searchHooks }: Props) {
  const { category, searchData, setCategory } = searchHooks;

  const categories = [
    "All",
    "Contacts",
    "Calendar",
    "Dropbox",
    "Slack",
    "Twitter",
  ];

  let totalCount = 0;
  for (let category in searchData) {
    totalCount += searchData[category].length;
  }

  return (
    <FilterMenuWrapper>
      <TagsFilterWrapper onClick={() => toggleTagMenu(tagHooks)}>
        <TagIcon></TagIcon>
        <TagsFilter>Tags</TagsFilter>
      </TagsFilterWrapper>
      <FilterTitle>Filter</FilterTitle>
      {categories.map((filterCategory) => {
        const randomId = shortid.generate();
        const lowerCaseCategory = filterCategory.toLowerCase();
        const isCategory = lowerCaseCategory === category;
        const updateCategoryCB = () => setCategory(lowerCaseCategory);
        return (
          <CategoryFilterWrapper key={randomId}>
            <CategoryFilter isCategory={isCategory} onClick={updateCategoryCB}>
              {filterCategory}
            </CategoryFilter>
            <CategoryResultCount isCategory={isCategory}>
              {filterCategory === "All"
                ? totalCount
                : searchData[lowerCaseCategory].length}
            </CategoryResultCount>
          </CategoryFilterWrapper>
        );
      })}
    </FilterMenuWrapper>
  );
}

export default FilterMenu;
