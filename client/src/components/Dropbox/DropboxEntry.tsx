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
import { PinWrapper, PinIcon } from "../Pin/styles";

import { TagWrapper, TagIcon } from "../Tag/styles";

import { Dropbox, Id, TaggedId } from "../../interfaces/interfaces";

interface Props {
  dropboxFile: Dropbox;
  id: string;
  pinSearchResult: Function;
  pinnedIds: Id;
  toggleModal: Function;
  taggedIds: TaggedId;
}

function DropboxEntry({
  dropboxFile,
  id,
  pinnedIds,
  pinSearchResult,
  toggleModal,
  taggedIds,
}: Props) {
  const isPinned = pinnedIds[id] ? true : false;
  const isTagged = taggedIds[id] ? true : false;

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
          {isPinned ? (
            <PinIcon
              onClick={() => pinSearchResult("dropbox", id)}
              src="./icons/pinned-icon.png"
            ></PinIcon>
          ) : (
            <PinIcon
              onClick={() => pinSearchResult("dropbox", id)}
              src="./icons/unpinned-icon.png"
            ></PinIcon>
          )}
        </PinWrapper>
        <TagWrapper>
          {isTagged ? (
            <TagIcon
              onClick={() => toggleModal("dropbox", dropboxFile)}
              src="./icons/tagged-icon.png"
            ></TagIcon>
          ) : (
            <TagIcon
              onClick={() => toggleModal("dropbox", dropboxFile)}
              src="./icons/untagged-icon.png"
            ></TagIcon>
          )}
        </TagWrapper>
      </DropboxRightWrappper>
    </DropboxOuterWrapper>
  );
}

export default DropboxEntry;
