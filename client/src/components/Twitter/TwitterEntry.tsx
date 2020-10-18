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

import { Twitter, Id } from "../../interfaces/interfaces";

interface Props {
  twitterMessage: Twitter;
  id: string;
  pinSearchResult: Function;
  pinnedIds: Id;
}

function TwitterEntry({
  twitterMessage,
  id,
  pinnedIds,
  pinSearchResult,
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
      </TwitterRightWrappper>
    </TwitterOuterWrapper>
  );
}

export default TwitterEntry;
