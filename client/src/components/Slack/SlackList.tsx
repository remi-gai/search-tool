import React from "react";

import SlackEntry from "./SlackEntry";
import {} from "./styles";

import { Slack, Id, TaggedId } from "../../interfaces/interfaces";

interface Props {
  slackData: Slack[];
  pinSearchResult: Function;
  pinnedIds: Id;
  toggleModal: Function;
  taggedIds: TaggedId;
}

function SlackList({
  slackData,
  pinSearchResult,
  pinnedIds,
  toggleModal,
  taggedIds,
}: Props) {
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
            toggleModal={toggleModal}
            taggedIds={taggedIds}
          />
        );
      })}
    </div>
  );
}

export default SlackList;
