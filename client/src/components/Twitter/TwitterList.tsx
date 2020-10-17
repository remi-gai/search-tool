import React from "react";
import TwitterEntry from "./TwitterEntry";
import {} from "./styles";

interface Twitter {
  user: string;
  message: string;
  timestamp: string;
  matching_terms: string[];
}

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
