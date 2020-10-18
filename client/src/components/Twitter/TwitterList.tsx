import React from "react";
import shortid from "shortid";
import TwitterEntry from "./TwitterEntry";
import {} from "./styles";

import { Twitter, Id } from "../../interfaces/interfaces";

interface Props {
  twitterData: Twitter[];
  pinSearchResult: Function;
  pinnedIds: Id;
}

function TwitterList({ twitterData, pinSearchResult, pinnedIds }: Props) {
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
          />
        );
      })}
    </div>
  );
}

export default TwitterList;
