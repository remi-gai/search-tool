import React from "react";

import { FilterMenuWrapper } from "./styles";

enum Category {
  ALL = "ALL",
  CONTACTS = "CONTACTS",
  DROPBOX = "DROPBOX",
  SLACK = "SLACK",
  TWITTER = "TWITTER",
}

interface Props {
  filterCategory: Function;
}

function FilterMenu({ filterCategory }: Props) {
  const categories = ["All", "Contacts", "Dropbox", "Slack", "Twitter"];

  return (
    <FilterMenuWrapper>
      {categories.map((category) => {
        return (
          <div onClick={() => filterCategory(category.toLocaleUpperCase())}>
            {category}
          </div>
        );
      })}
    </FilterMenuWrapper>
  );
}

export default FilterMenu;
