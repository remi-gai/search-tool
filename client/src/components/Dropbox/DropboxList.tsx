import React from "react";

import {} from "./styles";
import DropboxEntry from "./DropboxEntry";

import { Dropbox, Id } from "../../interfaces/interfaces";

interface Props {
  dropboxData: Dropbox[];
  pinSearchResult: Function;
  pinnedIds: Id;
}

function DropboxList({ dropboxData, pinSearchResult, pinnedIds }: Props) {
  return (
    <div>
      {dropboxData.map((dropboxFile) => {
        return (
          <DropboxEntry
            dropboxFile={dropboxFile}
            key={dropboxFile.id}
            id={dropboxFile.id}
            pinnedIds={pinnedIds}
            pinSearchResult={pinSearchResult}
          />
        );
      })}
    </div>
  );
}

export default DropboxList;
