import React from "react";

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

import { Twitter } from "../../interfaces/interfaces";

interface Props {
  twitterMessage: Twitter;
}

function TwitterEntry({ twitterMessage }: Props) {
  return (
    <TwitterOuterWrapper>
      <TwitterLeftWrapper>
        <TwitterIconWrapper>
          <TwitterIcon></TwitterIcon>
        </TwitterIconWrapper>
        <TwitterDetailsWrapper>
          <TwitterUser>{"@" + twitterMessage.user}</TwitterUser>
          <TwitterMessage>{twitterMessage.message}</TwitterMessage>
        </TwitterDetailsWrapper>
      </TwitterLeftWrapper>
      <TwitterRightWrappper>
        <TwitterDate>{"Posted On: " + twitterMessage.timestamp}</TwitterDate>
      </TwitterRightWrappper>
    </TwitterOuterWrapper>
  );
}

export default TwitterEntry;