import React from "react";
import moment from "moment";

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

import { Dropbox } from "../../interfaces/interfaces";

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
        <DropboxDate>
          {"Created: " + moment(dropboxFile.created, "YYYY-MM-DD").fromNow()}
        </DropboxDate>
      </DropboxRightWrappper>
    </DropboxOuterWrapper>
  );
}

export default DropboxEntry;
