import React from "react";
import moment from "moment";

import {
  CalendarOuterWrapper,
  CalendarLeftWrapper,
  CalendarRightWrappper,
  CalendarDate,
  CalendarIcon,
  CalendarIconWrapper,
  CalendarDetailsWrapper,
  CalendarTitle,
  CalendarInvitees,
} from "./styles";
import { PinWrapper, PinIcon } from "../Pin/styles";

import { TagWrapper, TagIcon } from "../Tag/styles";

import { Calendar, Id, TaggedId } from "../../interfaces/interfaces";

interface Props {
  calendar: Calendar;
  id: string;
  pinSearchResult: Function;
  pinnedIds: Id;
  toggleModal: Function;
  taggedIds: TaggedId;
}

function CalendarEntry({
  calendar,
  id,
  pinnedIds,
  pinSearchResult,
  toggleModal,
  taggedIds,
}: Props) {
  const isPinned = pinnedIds[id] ? true : false;
  const isTagged = taggedIds[id] ? true : false;

  return (
    <CalendarOuterWrapper>
      <CalendarLeftWrapper>
        <CalendarIconWrapper>
          <CalendarIcon></CalendarIcon>
        </CalendarIconWrapper>
        <CalendarDetailsWrapper>
          <CalendarTitle>{calendar.title}</CalendarTitle>
          <CalendarInvitees>
            {"Invitees: " + calendar.invitees}
          </CalendarInvitees>
        </CalendarDetailsWrapper>
      </CalendarLeftWrapper>
      <CalendarRightWrappper>
        <CalendarDate>
          {"Event date: " +
            moment(calendar.date, "YYYY-MM-DD hh:mm:ss").fromNow()}
        </CalendarDate>
        <PinWrapper>
          {isPinned ? (
            <PinIcon
              onClick={() => pinSearchResult("calendar", id)}
              src="./icons/pinned-icon.png"
            ></PinIcon>
          ) : (
            <PinIcon
              onClick={() => pinSearchResult("calendar", id)}
              src="./icons/unpinned-icon.png"
            ></PinIcon>
          )}
        </PinWrapper>
        <TagWrapper>
          {isTagged ? (
            <TagIcon
              onClick={() => toggleModal("calendar", calendar)}
              src="./icons/tagged-icon.png"
            ></TagIcon>
          ) : (
            <TagIcon
              onClick={() => toggleModal("calendar", calendar)}
              src="./icons/untagged-icon.png"
            ></TagIcon>
          )}
        </TagWrapper>
      </CalendarRightWrappper>
    </CalendarOuterWrapper>
  );
}

export default CalendarEntry;
