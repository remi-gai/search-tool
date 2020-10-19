import React from "react";

import CalendarEntry from "./CalendarEntry";
import {} from "./styles";
import { Calendar, Id, TaggedId } from "../../interfaces/interfaces";

interface Props {
  calendarData: Calendar[];
  pinSearchResult: Function;
  pinnedIds: Id;
  toggleModal: Function;
  taggedIds: TaggedId;
}

function CalendarList({
  calendarData,
  pinSearchResult,
  pinnedIds,
  toggleModal,
  taggedIds,
}: Props) {
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
            toggleModal={toggleModal}
            taggedIds={taggedIds}
          />
        );
      })}
    </div>
  );
}

export default CalendarList;
