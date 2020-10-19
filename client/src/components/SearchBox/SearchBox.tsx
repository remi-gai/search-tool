import React from "react";

import {
  SearchBoxWrapper,
  SearchInput,
  SubmitButton,
  ClearButton,
} from "./styles";

interface Props {
  onSearchWordChange: Function;
  onSearchWordSubmit: Function;
  searchWord: string;
  clearSearchBox: Function;
}

function SearchBox({
  onSearchWordChange,
  onSearchWordSubmit,
  searchWord,
  clearSearchBox,
}: Props) {
  return (
    <SearchBoxWrapper>
      <SearchInput
        value={searchWord}
        onChange={(e) => onSearchWordChange(e)}
      ></SearchInput>
      <ClearButton onClick={clearSearchBox}>Clear</ClearButton>
      <SubmitButton onClick={onSearchWordSubmit}>Submit</SubmitButton>
    </SearchBoxWrapper>
  );
}

export default SearchBox;
