import React from "react";
import moment from "moment";

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

import { PinWrapper, PinnedIcon, UnpinnedIcon } from "../Pin/styles";

import { Slack, Id } from "../../interfaces/interfaces";

interface Props {
  slackMessage: Slack;
  id: string;
  pinSearchResult: Function;
  pinnedIds: Id;
}

function SlackEntry({ slackMessage, id, pinnedIds, pinSearchResult }: Props) {
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
        <SlackDate>
          {"Posted: " +
            moment(slackMessage.timestamp, "YYYY-MM-DD hh:mm:ss").fromNow()}
        </SlackDate>
        <PinWrapper>
          {pinnedIds[id] ? (
            <PinnedIcon
              onClick={() => pinSearchResult("slack", id)}
            ></PinnedIcon>
          ) : (
            <UnpinnedIcon
              onClick={() => pinSearchResult("slack", id)}
            ></UnpinnedIcon>
          )}
        </PinWrapper>
      </SlackRightWrappper>
    </SlackOuterWrapper>
  );
}

export default SlackEntry;
