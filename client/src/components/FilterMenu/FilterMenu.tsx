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

  const totalCount = Object.keys(searchData).reduce(
    (prev, next) => prev + searchData[next].length,
    0
  );

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
        const updateCategory = () => setCategory(lowerCaseCategory);
        return (
          <CategoryFilterWrapper key={randomId}>
            <CategoryFilter isCategory={isCategory} onClick={updateCategory}>
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
