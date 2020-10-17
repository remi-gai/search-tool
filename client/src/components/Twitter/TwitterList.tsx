import React from "react";
import TwitterEntry from "./TwitterEntry";
import {} from "./styles";

import { Twitter } from "../../interfaces/interfaces";

interface Props {
  twitterData: Twitter[];
}

function TwitterList({ twitterData }: Props) {
  return (
    <div>
      {twitterData.map((twitterMessage) => {
        return <TwitterEntry twitterMessage={twitterMessage} />;
      })}
    </div>
  );
}

export default TwitterList;
