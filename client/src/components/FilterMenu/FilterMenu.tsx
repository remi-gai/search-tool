import React from "react";
import shortid from "shortid";

import { TagsFilter, FilterMenuWrapper } from "./styles";

interface Props {
  setCategory: Function;
  toggleTagMenu: Function;
}

function FilterMenu({ setCategory, toggleTagMenu }: Props) {
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
            onClick={() => setCategory(category.toLowerCase())}
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
