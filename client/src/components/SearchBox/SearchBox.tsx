import React from "react";

import { SearchBoxWrapper, SearchInput, SubmitButton } from "./styles";

interface Props {
  onSearchWordChange: Function;
  onSearchWordSubmit: Function;
}

function SearchBox({ onSearchWordChange, onSearchWordSubmit }: Props) {
  return (
    <SearchBoxWrapper>
      <SearchInput onChange={(e) => onSearchWordChange(e)}></SearchInput>
      <SubmitButton onClick={onSearchWordSubmit}>Submit</SubmitButton>
    </SearchBoxWrapper>
  );
}

export default SearchBox;
