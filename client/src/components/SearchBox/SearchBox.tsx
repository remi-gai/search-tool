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
  onKeyUp: Function;
}

function SearchBox({
  onSearchWordChange,
  onSearchWordSubmit,
  searchWord,
  clearSearchBox,
  onKeyUp,
}: Props) {
  return (
    <SearchBoxWrapper>
      <SearchIcon></SearchIcon>
      <SearchInput
        placeholder={"Search"}
        value={searchWord}
        onChange={(e) => onSearchWordChange(e)}
        onKeyUp={(e) => onKeyUp(e, "search")}
      ></SearchInput>
      <ButtonsWrapper>
        <ClearButton onClick={clearSearchBox}>Clear</ClearButton>
        <SubmitButton onClick={onSearchWordSubmit}>Search</SubmitButton>
        {/* <SubmitButton onClick={() => onSearchWordSubmit(searchWord)}>Search</SubmitButton> */}
      </ButtonsWrapper>
    </SearchBoxWrapper>
  );
}

export default SearchBox;
