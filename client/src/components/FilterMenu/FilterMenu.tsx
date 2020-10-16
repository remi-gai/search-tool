import React from "react";

import { FilterMenuWrapper } from "./styles";

function FilterMenu() {
  const categories = [
    "All",
    "Contacts",
    "Calendar",
    "Dropbox",
    "Slack",
    "Tweet",
  ];

  return (
    <FilterMenuWrapper>
      {categories.map((category) => {
        return <div>{category}</div>;
      })}
    </FilterMenuWrapper>
  );
}

export default FilterMenu;
