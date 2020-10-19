import React from "react";
import shortid from "shortid";
import TwitterEntry from "./TwitterEntry";
import {} from "./styles";

import { Twitter, Id, TaggedId } from "../../interfaces/interfaces";

interface Props {
  twitterData: Twitter[];
  pinSearchResult: Function;
  pinnedIds: Id;
  toggleModal: Function;
  taggedIds: TaggedId;
}

function TwitterList({
  twitterData,
  pinSearchResult,
  pinnedIds,
  toggleModal,
  taggedIds,
}: Props) {
  return (
    <div>
      {twitterData.map((twitterMessage) => {
        return (
          <TwitterEntry
            twitterMessage={twitterMessage}
            key={twitterMessage.id}
            id={twitterMessage.id}
            pinnedIds={pinnedIds}
            pinSearchResult={pinSearchResult}
            toggleModal={toggleModal}
            taggedIds={taggedIds}
          />
        );
      })}
    </div>
  );
}

export default TwitterList;
