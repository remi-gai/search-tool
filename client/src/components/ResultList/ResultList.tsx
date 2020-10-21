import React from "react";
import moment from "moment";

import {
  ResultListWrapper,
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

import ResultEntry from "../ResultEntry/ResultEntry";

import { SearchData, Id, TaggedId } from "../../interfaces/interfaces";

interface Props {
  searchData: SearchData;
  category: string;
  pinSearchResult: Function;
  pinnedIds: Id;
  toggleModal: Function;
  taggedIds: TaggedId;
}

function ResultList({
  searchData,
  category,
  pinSearchResult,
  pinnedIds,
  toggleModal,
  taggedIds,
}: Props) {
  const addElipsisToString = (text) => {
    if (text.length < 70) {
      return text;
    }

    return text.substring(0, 71) + "...";
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
          <Details>
            {addElipsisToString("Invitees: " + result.invitees)}
          </Details>
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

  const renderDateMap = {
    contacts: (result) => {
      return (
        <Date>
          {"Last contacted: " +
            moment(result.last_contact, "YYYY-MM-DD").fromNow()}
        </Date>
      );
    },
    calendar: (result) => {
      return (
        <Date>
          {"Event date: " +
            moment(result.date, "YYYY-MM-DD hh:mm:ss").fromNow()}
        </Date>
      );
    },
    dropbox: (result) => {
      return (
        <Date>
          {"Created: " + moment(result.created, "YYYY-MM-DD").fromNow()}
        </Date>
      );
    },
    slack: (result) => {
      return (
        <Date>
          {"Posted: " +
            moment(result.timestamp, "YYYY-MM-DD hh:mm:ss").fromNow()}
        </Date>
      );
    },
    twitter: (result) => {
      return (
        <Date>
          {"Posted: " + moment(result.timestamp, "YYYY-MM-DD").fromNow()}
        </Date>
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

  return (
    <ResultListWrapper>
      {searchData[category].map((result) => {
        return (
          <ResultEntry
            result={result}
            category={category}
            renderTitleAndDetailsMap={renderTitleAndDetailsMap}
            renderDateMap={renderDateMap}
            renderIconMap={renderIconMap}
            id={result.id}
            pinSearchResult={pinSearchResult}
            pinnedIds={pinnedIds}
            toggleModal={toggleModal}
            taggedIds={taggedIds}
            key={result.id}
          ></ResultEntry>
        );
      })}
    </ResultListWrapper>
  );
}

export default ResultList;
