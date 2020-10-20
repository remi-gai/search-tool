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

import { SearchData } from "../../interfaces/interfaces";

interface Props {
  category: string;
  setCategory: Function;
  toggleTagMenu: Function;
  searchData: SearchData;
}

function FilterMenu({
  setCategory,
  toggleTagMenu,
  category,
  searchData,
}: Props) {
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
      <TagsFilterWrapper onClick={toggleTagMenu}>
        <TagIcon></TagIcon>
        <TagsFilter>Tags</TagsFilter>
      </TagsFilterWrapper>
      <FilterTitle>Filter</FilterTitle>
      {categories.map((filterCategory) => {
        return (
          <CategoryFilterWrapper key={shortid.generate()}>
            <CategoryFilter
              category={filterCategory.toLowerCase() === category}
              onClick={() => setCategory(filterCategory.toLowerCase())}
            >
              {filterCategory}
            </CategoryFilter>
            <CategoryResultCount
              category={filterCategory.toLowerCase() === category}
            >
              {filterCategory === "All"
                ? totalCount
                : searchData[filterCategory.toLowerCase()].length}
            </CategoryResultCount>
          </CategoryFilterWrapper>
        );
      })}
    </FilterMenuWrapper>
  );
}

export default FilterMenu;
