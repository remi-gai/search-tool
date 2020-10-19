import React from "react";
import moment from "moment";

import {
  TwitterOuterWrapper,
  TwitterLeftWrapper,
  TwitterRightWrappper,
  TwitterDate,
  TwitterIcon,
  TwitterIconWrapper,
  TwitterDetailsWrapper,
  TwitterUser,
  TwitterMessage,
} from "./styles";
import { PinWrapper, PinnedIcon, UnpinnedIcon } from "../Pin/styles";

import { TagWrapper, TaggedIcon, UntaggedIcon } from "../Tag/styles";

import { Twitter, Id, TaggedId } from "../../interfaces/interfaces";

interface Props {
  twitterMessage: Twitter;
  id: string;
  pinSearchResult: Function;
  pinnedIds: Id;
  toggleModal: Function;
  taggedIds: TaggedId;
}

function TwitterEntry({
  twitterMessage,
  id,
  pinnedIds,
  pinSearchResult,
  toggleModal,
  taggedIds,
}: Props) {
  return (
    <TwitterOuterWrapper>
      <TwitterLeftWrapper>
        <TwitterIconWrapper>
          <TwitterIcon></TwitterIcon>
        </TwitterIconWrapper>
        <TwitterDetailsWrapper>
          <TwitterUser>{twitterMessage.user}</TwitterUser>
          <TwitterMessage>{twitterMessage.message}</TwitterMessage>
        </TwitterDetailsWrapper>
      </TwitterLeftWrapper>
      <TwitterRightWrappper>
        <TwitterDate>
          {"Posted: " +
            moment(twitterMessage.timestamp, "YYYY-MM-DD").fromNow()}
        </TwitterDate>
        <PinWrapper>
          {pinnedIds[id] ? (
            <PinnedIcon
              onClick={() => pinSearchResult("twitter", id)}
            ></PinnedIcon>
          ) : (
            <UnpinnedIcon
              onClick={() => pinSearchResult("twitter", id)}
            ></UnpinnedIcon>
          )}
        </PinWrapper>
        <TagWrapper>
          {taggedIds[id] ? (
            <TaggedIcon
              onClick={() => toggleModal("twitter", twitterMessage)}
            ></TaggedIcon>
          ) : (
            <UntaggedIcon
              onClick={() => toggleModal("twitter", twitterMessage)}
            ></UntaggedIcon>
          )}
        </TagWrapper>
      </TwitterRightWrappper>
    </TwitterOuterWrapper>
  );
}

export default TwitterEntry;
