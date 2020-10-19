import React from "react";

import { SearchBoxWrapper, SearchInput, SubmitButton } from "./styles";

interface Props {
  onSearchWordChange: Function;
  onSearchWordSubmit: Function;
  searchWord: string;
}

function SearchBox({
  onSearchWordChange,
  onSearchWordSubmit,
  searchWord,
}: Props) {
  return (
    <SearchBoxWrapper>
      <SearchInput
        value={searchWord}
        onChange={(e) => onSearchWordChange(e)}
      ></SearchInput>
      <SubmitButton onClick={onSearchWordSubmit}>Submit</SubmitButton>
    </SearchBoxWrapper>
  );
}

export default SearchBox;
