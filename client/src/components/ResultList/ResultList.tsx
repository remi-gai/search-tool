import React from "react";

import { ResultListWrapper } from "./styles";

import ResultEntry from "../ResultEntry/ResultEntry";

import { SearchData, Id, TaggedId } from "../../interfaces/interfaces";

interface Props {
  searchData: SearchData;
  category: string;
  pinSearchResult: Function;
  pinnedIds: Id;
  toggleModal: Function;
  taggedIds: TaggedId;
  //temp
  pinHooks: any;
  searchHooks: any;
  modalHooks: any;
  tagHooks: any;
}

function ResultList({
  searchData,
  category,
  pinSearchResult,
  pinnedIds,
  toggleModal,
  taggedIds,
  pinHooks,
  searchHooks,
  modalHooks,
  tagHooks,
}: Props) {
  return (
    <ResultListWrapper>
      {searchData[category].map((result) => {
        return (
          <ResultEntry
            result={result}
            category={category}
            id={result.id}
            pinSearchResult={pinSearchResult}
            pinnedIds={pinnedIds}
            toggleModal={toggleModal}
            taggedIds={taggedIds}
            pinHooks={pinHooks}
            searchHooks={searchHooks}
            key={result.id}
            modalHooks={modalHooks}
            tagHooks={tagHooks}
          ></ResultEntry>
        );
      })}
    </ResultListWrapper>
  );
}

export default ResultList;
