import React from "react";
import shortid from "shortid";

import { TagsFilter, FilterMenuWrapper } from "./styles";

interface Props {
  filterCategory: Function;
  toggleTagMenu: Function;
}

function FilterMenu({ filterCategory, toggleTagMenu }: Props) {
  const categories = [
    "All",
    "Contacts",
    "Calendar",
    "Dropbox",
    "Slack",
    "Twitter",
  ];

  return (
    <FilterMenuWrapper>
      <TagsFilter onClick={toggleTagMenu}>Tags</TagsFilter>
      {categories.map((category) => {
        return (
          <div
            onClick={() => filterCategory(category.toLowerCase())}
            key={shortid.generate()}
          >
            {category}
          </div>
        );
      })}
    </FilterMenuWrapper>
  );
}

export default FilterMenu;
