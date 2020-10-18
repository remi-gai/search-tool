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

import { Calendar, Id } from "../../interfaces/interfaces";

interface Props {
  calendar: Calendar;
  id: string;
  pinSearchResult: Function;
  pinnedIds: Id;
}

function CalendarEntry({ calendar, id, pinnedIds, pinSearchResult }: Props) {
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
      </CalendarRightWrappper>
    </CalendarOuterWrapper>
  );
}

export default CalendarEntry;
