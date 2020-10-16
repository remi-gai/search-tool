import React from "react";

import {} from "./styles";

interface Calendar {
  dates: string;
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
        return <div>calendar.title</div>;
      })}
    </div>
  );
}

export default CalendarList;
