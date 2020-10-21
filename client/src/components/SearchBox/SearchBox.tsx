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
  searchInputRef: React.Ref<HTMLInputElement>;
  //temp
  searchHooks: any;
  pinHooks: any;
  tagHooks: any;
  setIsLoading: any;
}

function SearchBox({
  onSearchWordChange,
  onSearchWordSubmit,
  searchWord,
  clearSearchBox,
  onKeyUp,
  searchInputRef,
  searchHooks,
  pinHooks,
  tagHooks,
  setIsLoading,
}: Props) {
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
