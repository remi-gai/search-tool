import React from "react";

import {
  DropboxOuterWrapper,
  DropboxLeftWrapper,
  DropboxRightWrappper,
  DropboxDate,
  DropboxIcon,
  DropboxIconWrapper,
  DropboxDetailsWrapper,
  DropboxTitle,
  DropboxPath,
} from "./styles";

interface Dropbox {
  id: string;
  path: string;
  title: string;
  shared_with: string[];
  matching_terms: string[];
  created: string;
}

interface Props {
  dropboxFile: Dropbox;
}

function DropboxEntry({ dropboxFile }: Props) {
  return (
    <DropboxOuterWrapper>
      <DropboxLeftWrapper>
        <DropboxIconWrapper>
          <DropboxIcon></DropboxIcon>
        </DropboxIconWrapper>
        <DropboxDetailsWrapper>
          <DropboxTitle>{dropboxFile.title}</DropboxTitle>
          <DropboxPath>{"File Path: " + dropboxFile.path}</DropboxPath>
        </DropboxDetailsWrapper>
      </DropboxLeftWrapper>
      <DropboxRightWrappper>
        <DropboxDate>{"Creation Date: " + dropboxFile.created}</DropboxDate>
      </DropboxRightWrappper>
    </DropboxOuterWrapper>
  );
}

export default DropboxEntry;
