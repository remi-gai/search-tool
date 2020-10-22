import React from "react";
import shortid from "shortid";

import { ResultListWrapper } from "./styles";

import ResultEntry from "../ResultEntry/ResultEntry";

import {
  SearchData,
  PinHooks,
  TagHooks,
  SearchHooks,
  ModalHooks,
} from "../../interfaces/interfaces";

interface Props {
  searchData: SearchData;
  category: string;
  pinSearchResult: Function;
  toggleModal: Function;
  pinHooks: PinHooks;
  searchHooks: SearchHooks;
  modalHooks: ModalHooks;
  tagHooks: TagHooks;
}

function ResultList({
  searchData,
  category,
  pinSearchResult,
  toggleModal,
  pinHooks,
  searchHooks,
  modalHooks,
  tagHooks,
}: Props) {
  return (
    <ResultListWrapper>
      {searchData[category].map((result) => {
        const randomId = shortid.generate();
        return (
          <ResultEntry
            result={result}
            category={category}
            id={result.id}
            pinSearchResult={pinSearchResult}
            toggleModal={toggleModal}
            pinHooks={pinHooks}
            searchHooks={searchHooks}
            key={randomId}
            modalHooks={modalHooks}
            tagHooks={tagHooks}
          ></ResultEntry>
        );
      })}
    </ResultListWrapper>
  );
}

export default ResultList;
