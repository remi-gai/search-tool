import React from "react";

import {} from "./styles";
import DropboxEntry from "./DropboxEntry";

import { Dropbox, Id, TaggedId } from "../../interfaces/interfaces";

interface Props {
  dropboxData: Dropbox[];
  pinSearchResult: Function;
  pinnedIds: Id;
  toggleModal: Function;
  taggedIds: TaggedId;
}

function DropboxList({
  dropboxData,
  pinSearchResult,
  pinnedIds,
  toggleModal,
  taggedIds,
}: Props) {
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
            toggleModal={toggleModal}
            taggedIds={taggedIds}
          />
        );
      })}
    </div>
  );
}

export default DropboxList;
