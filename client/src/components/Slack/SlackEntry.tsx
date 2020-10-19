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

import { PinWrapper, PinIcon } from "../Pin/styles";

import { TagWrapper, TagIcon } from "../Tag/styles";

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
  const isPinned = pinnedIds[id] ? true : false;
  const isTagged = taggedIds[id] ? true : false;

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
          {isPinned ? (
            <PinIcon
              onClick={() => pinSearchResult("slack", id)}
              src="./icons/pinned-icon.png"
            ></PinIcon>
          ) : (
            <PinIcon
              onClick={() => pinSearchResult("slack", id)}
              src="./icons/unpinned-icon.png"
            ></PinIcon>
          )}
        </PinWrapper>
        <TagWrapper>
          {isTagged ? (
            <TagIcon
              onClick={() => toggleModal("slack", slackMessage)}
              src="./icons/tagged-icon.png"
            ></TagIcon>
          ) : (
            <TagIcon
              onClick={() => toggleModal("slack", slackMessage)}
              src="./icons/untagged-icon.png"
            ></TagIcon>
          )}
        </TagWrapper>
      </SlackRightWrappper>
    </SlackOuterWrapper>
  );
}

export default SlackEntry;
