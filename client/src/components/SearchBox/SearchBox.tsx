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
  tagHooks,
}: Props) {
  const { searchWord } = searchHooks;
  const onChangeUpdateSearchWord = (e) => onSearchWordChange(e, searchHooks);
  const onKeyUpPress = (e) =>
    onKeyUp(e, "search", tagHooks, searchHooks, setIsLoading);
  const onClickClearSearchBox = () =>
    clearSearchBox(searchHooks, searchInputRef);
  const onClickSearchWord = () =>
    onSearchWordSubmit(searchHooks, tagHooks, setIsLoading);

  return (
    <SearchBoxWrapper>
      <SearchIcon></SearchIcon>
      <SearchInput
        placeholder={"Search"}
        value={searchWord}
        onChange={onChangeUpdateSearchWord}
        onKeyUp={onKeyUpPress}
        ref={searchInputRef}
      ></SearchInput>

      <ButtonsWrapper>
        <ClearButton onClick={onClickClearSearchBox}>Clear</ClearButton>
        <SubmitButton onClick={onClickSearchWord}>Search</SubmitButton>
      </ButtonsWrapper>
    </SearchBoxWrapper>
  );
}

export default SearchBox;
