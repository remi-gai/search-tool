import React from "react";
import SlackEntry from "./SlackEntry";
import {} from "./styles";

interface Slack {
  id: string;
  channel: string;
  author: string;
  message: string;
  timestamp: string;
  matching_terms: string[];
}

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
