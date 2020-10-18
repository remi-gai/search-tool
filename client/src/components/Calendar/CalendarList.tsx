import React from "react";

import CalendarEntry from "./CalendarEntry";
import {} from "./styles";
import { Calendar, Id } from "../../interfaces/interfaces";

interface Props {
  calendarData: Calendar[];
  pinSearchResult: Function;
  pinnedIds: Id;
}

function CalendarList({ calendarData, pinSearchResult, pinnedIds }: Props) {
  return (
    <div>
      {calendarData.map((calendar) => {
        return (
          <CalendarEntry
            calendar={calendar}
            key={calendar.id}
            id={calendar.id}
            pinnedIds={pinnedIds}
            pinSearchResult={pinSearchResult}
          />
        );
      })}
    </div>
  );
}

export default CalendarList;
