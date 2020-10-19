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

import { TagWrapper, TaggedIcon, UntaggedIcon } from "../Tag/styles";

import { Slack, Id, TaggedId } from "../../interfaces/interfaces";

interface Props {
  slackMessage: Slack;
  id: string;
  pinnedIds: Id;
  pinSearchResult: Function;
  toggleModal: Function;
  taggedIds: TaggedId;
}

function SlackEntry({
  slackMessage,
  id,
  pinnedIds,
  pinSearchResult,
  toggleModal,
  taggedIds,
}: Props) {
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
        <TagWrapper>
          {taggedIds[id] ? (
            <TaggedIcon
              onClick={() => toggleModal("slack", slackMessage)}
            ></TaggedIcon>
          ) : (
            <UntaggedIcon
              onClick={() => toggleModal("slack", slackMessage)}
            ></UntaggedIcon>
          )}
        </TagWrapper>
      </SlackRightWrappper>
    </SlackOuterWrapper>
  );
}

export default SlackEntry;
