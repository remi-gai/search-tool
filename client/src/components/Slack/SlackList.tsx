import React from "react";
import SlackEntry from "./SlackEntry";
import {} from "./styles";

import { Slack } from "../../interfaces/interfaces";

interface Props {
  slackData: Slack[];
}

function SlackList({ slackData }: Props) {
  return (
    <div>
      {slackData.map((slackMessage) => {
        return <SlackEntry slackMessage={slackMessage} />;
      })}
    </div>
  );
}

export default SlackList;
