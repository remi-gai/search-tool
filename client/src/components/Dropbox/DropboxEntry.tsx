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
import { PinWrapper, PinnedIcon, UnpinnedIcon } from "../Pin/styles";

import { Dropbox, Id } from "../../interfaces/interfaces";

interface Props {
  dropboxFile: Dropbox;
  id: string;
  pinSearchResult: Function;
  pinnedIds: Id;
}

function DropboxEntry({ dropboxFile, id, pinnedIds, pinSearchResult }: Props) {
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
        <PinWrapper>
          {pinnedIds[id] ? (
            <PinnedIcon
              onClick={() => pinSearchResult("dropbox", id)}
            ></PinnedIcon>
          ) : (
            <UnpinnedIcon
              onClick={() => pinSearchResult("dropbox", id)}
            ></UnpinnedIcon>
          )}
        </PinWrapper>
      </DropboxRightWrappper>
    </DropboxOuterWrapper>
  );
}

export default DropboxEntry;
