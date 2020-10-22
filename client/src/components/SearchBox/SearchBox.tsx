import React from "react";

import {
  SearchIcon,
  SearchBoxWrapper,
  SearchInput,
  ButtonsWrapper,
  SubmitButton,
  ClearButton,
} from "./styles";

import { PinHooks, TagHooks, SearchHooks } from "../../interfaces/interfaces";

interface Props {
  onSearchWordChange: Function;
  onSearchWordSubmit: Function;
  clearSearchBox: Function;
  onKeyUp: Function;
  searchInputRef: React.Ref<HTMLInputElement>;
  setIsLoading: Function;
  searchHooks: SearchHooks;
  pinHooks: PinHooks;
  tagHooks: TagHooks;
}

function SearchBox({
  onSearchWordChange,
  onSearchWordSubmit,
  clearSearchBox,
  onKeyUp,
  setIsLoading,
  searchInputRef,
  searchHooks,
  pinHooks,
  tagHooks,
}: Props) {
  const { searchWord } = searchHooks;

  return (
    <SearchBoxWrapper>
      <SearchIcon></SearchIcon>
      <SearchInput
        placeholder={"Search"}
        value={searchWord}
        onChange={(e) => onSearchWordChange(e, searchHooks)}
        onKeyUp={(e) =>
          onKeyUp(e, "search", pinHooks, tagHooks, searchHooks, setIsLoading)
        }
        ref={searchInputRef}
      ></SearchInput>
      <ButtonsWrapper>
        <ClearButton
          onClick={() => clearSearchBox(searchHooks, searchInputRef)}
        >
          Clear
        </ClearButton>
        <SubmitButton
          onClick={() =>
            onSearchWordSubmit(searchHooks, pinHooks, tagHooks, setIsLoading)
          }
        >
          Search
        </SubmitButton>
      </ButtonsWrapper>
    </SearchBoxWrapper>
  );
}

export default SearchBox;
