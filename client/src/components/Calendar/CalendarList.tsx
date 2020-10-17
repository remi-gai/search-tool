import React from "react";
import CalendarEntry from "./CalendarEntry";
import {} from "./styles";
import { Calendar } from "../../interfaces/interfaces";

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
