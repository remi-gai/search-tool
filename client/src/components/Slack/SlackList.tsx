import React from "react";
import shortid from "shortid";

import SlackEntry from "./SlackEntry";
import {} from "./styles";

import { Slack, Id } from "../../interfaces/interfaces";

interface Props {
  slackData: Slack[];
  pinSearchResult: Function;
  pinnedIds: Id;
}

function SlackList({ slackData, pinSearchResult, pinnedIds }: Props) {
  return (
    <div>
      {slackData.map((slackMessage) => {
        return (
          <SlackEntry
            slackMessage={slackMessage}
            key={slackMessage.id}
            id={slackMessage.id}
            pinnedIds={pinnedIds}
            pinSearchResult={pinSearchResult}
          />
        );
      })}
    </div>
  );
}

export default SlackList;
