import React from "react";

import {} from "./styles";
import DropboxEntry from "./DropboxEntry";

import { Dropbox } from "../../interfaces/interfaces";

interface Props {
  dropboxData: Dropbox[];
}

function DropboxList({ dropboxData }: Props) {
  return (
    <div>
      {dropboxData.map((dropboxFile) => {
        return <DropboxEntry dropboxFile={dropboxFile} />;
      })}
    </div>
  );
}

export default DropboxList;
