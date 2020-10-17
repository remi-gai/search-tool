import React from "react";

import { FilterMenuWrapper } from "./styles";

interface Props {
  filterCategory: Function;
}

function FilterMenu({ filterCategory }: Props) {
  const categories = ["All", "Contacts", "Dropbox", "Slack", "Twitter"];

  return (
    <FilterMenuWrapper>
      {categories.map((category) => {
        return (
          <div onClick={() => filterCategory(category.toUpperCase())}>
            {category}
          </div>
        );
      })}
    </FilterMenuWrapper>
  );
}

export default FilterMenu;
