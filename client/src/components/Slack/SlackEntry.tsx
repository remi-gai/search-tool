import React from "react";

import {
  SlackOuterWrapper,
  SlackLeftWrapper,
  SlackRightWrappper,
  SlackDate,
  SlackIcon,
  SlackIconWrapper,
  SlackDetailsWrapper,
  SlackChannel,
  SlackMessage,
} from "./styles";

interface Slack {
  id: string;
  channel: string;
  author: string;
  message: string;
  timestamp: string;
  matching_terms: string[];
}
interface Props {
  slackMessage: Slack;
}

function SlackEntry({ slackMessage }: Props) {
  return (
    <SlackOuterWrapper>
      <SlackLeftWrapper>
        <SlackIconWrapper>
          <SlackIcon></SlackIcon>
        </SlackIconWrapper>
        <SlackDetailsWrapper>
          <SlackChannel>{slackMessage.channel}</SlackChannel>
          <SlackMessage>
            {slackMessage.author + ": " + slackMessage.message}
          </SlackMessage>
        </SlackDetailsWrapper>
      </SlackLeftWrapper>
      <SlackRightWrappper>
        <SlackDate>{"Posted On: " + slackMessage.timestamp}</SlackDate>
      </SlackRightWrappper>
    </SlackOuterWrapper>
  );
}

export default SlackEntry;
