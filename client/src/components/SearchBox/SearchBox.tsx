import React from "react";

import {
  SearchIcon,
  SearchBoxWrapper,
  SearchInput,
  ButtonsWrapper,
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
      <SearchIcon></SearchIcon>
      <SearchInput
        placeholder={"Search"}
        value={searchWord}
        onChange={(e) => onSearchWordChange(e)}
      ></SearchInput>
      <ButtonsWrapper>
        <ClearButton onClick={clearSearchBox}>Clear</ClearButton>
        <SubmitButton onClick={onSearchWordSubmit}>Search</SubmitButton>
      </ButtonsWrapper>
    </SearchBoxWrapper>
  );
}

export default SearchBox;
