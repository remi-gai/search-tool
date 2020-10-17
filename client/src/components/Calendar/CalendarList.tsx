import React from "react";
import CalendarEntry from "./CalendarEntry";
import {} from "./styles";

interface Calendar {
  date: string;
  id: string;
  invitees: string;
  title: string;
  matching_terms: string[];
}

interface Props {
  calendarData: Calendar[];
}

function CalendarList({ calendarData }: Props) {
  return (
    <div>
      {calendarData.map((calendar) => {
        return <CalendarEntry calendar={calendar} />;
      })}
    </div>
  );
}

export default CalendarList;
