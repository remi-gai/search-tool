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
import { PinWrapper, PinnedIcon, UnpinnedIcon } from "../Pin/styles";

import { TagWrapper, TaggedIcon, UntaggedIcon } from "../Tag/styles";

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
          {pinnedIds[id] ? (
            <PinnedIcon
              onClick={() => pinSearchResult("calendar", id)}
            ></PinnedIcon>
          ) : (
            <UnpinnedIcon
              onClick={() => pinSearchResult("calendar", id)}
            ></UnpinnedIcon>
          )}
        </PinWrapper>
        <TagWrapper>
          {taggedIds[id] ? (
            <TaggedIcon
              onClick={() => toggleModal("calendar", calendar)}
            ></TaggedIcon>
          ) : (
            <UntaggedIcon
              onClick={() => toggleModal("calendar", calendar)}
            ></UntaggedIcon>
          )}
        </TagWrapper>
      </CalendarRightWrappper>
    </CalendarOuterWrapper>
  );
}

export default CalendarEntry;
