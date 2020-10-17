import React from "react";
import DropboxEntry from "./DropboxEntry";
import {} from "./styles";

interface Dropbox {
  id: string;
  path: string;
  title: string;
  shared_with: string[];
  matching_terms: string[];
  created: string;
}

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
