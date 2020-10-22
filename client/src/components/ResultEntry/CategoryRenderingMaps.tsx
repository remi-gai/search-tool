import React from "react";
import moment from "moment";

import {
  DetailsWrapper,
  Title,
  Date,
  Details,
  IconWrapper,
  ContactIcon,
  CalendarIcon,
  DropboxIcon,
  SlackIcon,
  TwitterIcon,
} from "./styles";

const addElipsisToString = (text) => {
  const maxCharactersCount = 70;
  if (text.length < maxCharactersCount) {
    return text;
  }

  return text.substring(0, maxCharactersCount + 1) + "...";
};

const renderTitleAndDetailsMap = {
  contacts: (result) => {
    return (
      <DetailsWrapper>
        <Title>{addElipsisToString(result.name)}</Title>
        <Details>{addElipsisToString(result.emails.join(", "))}</Details>
      </DetailsWrapper>
    );
  },
  calendar: (result) => {
    return (
      <DetailsWrapper>
        <Title>{addElipsisToString(result.title)}</Title>
        <Details>{addElipsisToString("Invitees: " + result.invitees)}</Details>
      </DetailsWrapper>
    );
  },
  dropbox: (result) => {
    return (
      <DetailsWrapper>
        <Title>{result.title}</Title>
        <Details>{addElipsisToString("File Path: " + result.path)}</Details>
      </DetailsWrapper>
    );
  },
  slack: (result) => {
    return (
      <DetailsWrapper>
        <Title>{addElipsisToString(result.channel)}</Title>
        <Details>
          {addElipsisToString(result.author + ": " + result.message)}
        </Details>
      </DetailsWrapper>
    );
  },
  twitter: (result) => {
    return (
      <DetailsWrapper>
        <Title>{addElipsisToString(result.user)}</Title>
        <Details>{addElipsisToString(result.message)}</Details>
      </DetailsWrapper>
    );
  },
};

const dateFormat = "YYYY-MM-DD";
const dateFormatWithTime = "YYYY-MM-DD hh:mm:ss";

const renderDateMap = {
  contacts: (result) => {
    return (
      <Date>
        {"Last contacted: " + moment(result.last_contact, dateFormat).fromNow()}
      </Date>
    );
  },
  calendar: (result) => {
    return (
      <Date>
        {"Event date: " + moment(result.date, dateFormatWithTime).fromNow()}
      </Date>
    );
  },
  dropbox: (result) => {
    return (
      <Date>{"Created: " + moment(result.created, dateFormat).fromNow()}</Date>
    );
  },
  slack: (result) => {
    return (
      <Date>
        {"Posted: " + moment(result.timestamp, dateFormatWithTime).fromNow()}
      </Date>
    );
  },
  twitter: (result) => {
    return (
      <Date>{"Posted: " + moment(result.timestamp, dateFormat).fromNow()}</Date>
    );
  },
};

const renderIconMap = {
  contacts: () => {
    return (
      <IconWrapper>
        <ContactIcon></ContactIcon>
      </IconWrapper>
    );
  },
  calendar: () => {
    return (
      <IconWrapper>
        <CalendarIcon></CalendarIcon>
      </IconWrapper>
    );
  },
  dropbox: () => {
    return (
      <IconWrapper>
        <DropboxIcon></DropboxIcon>
      </IconWrapper>
    );
  },
  slack: () => {
    return (
      <IconWrapper>
        <SlackIcon></SlackIcon>
      </IconWrapper>
    );
  },
  twitter: () => {
    return (
      <IconWrapper>
        <TwitterIcon></TwitterIcon>
      </IconWrapper>
    );
  },
};

export { renderTitleAndDetailsMap, renderDateMap, renderIconMap };
