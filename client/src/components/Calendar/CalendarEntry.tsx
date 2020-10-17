import React from "react";

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

interface Calendar {
  date: string;
  id: string;
  invitees: string;
  title: string;
  matching_terms: string[];
}

interface Props {
  calendar: Calendar;
}

function CalendarEntry({ calendar }: Props) {
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
        <CalendarDate>{"Event Date: " + calendar.date}</CalendarDate>
      </CalendarRightWrappper>
    </CalendarOuterWrapper>
  );
}

export default CalendarEntry;
