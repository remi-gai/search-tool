import React from "react";
import moment from "moment";

import {
  ContactOuterWrapper,
  ContactLeftWrapper,
  ContactRightWrappper,
  ContactIcon,
  ContactIconWrapper,
  ContactDetailsWrapper,
  ContactTitle,
  ContactEmail,
  ContactDate,
} from "./styles";

import { PinWrapper, PinIcon } from "../Pin/styles";

import { TagWrapper, TagIcon } from "../Tag/styles";

import { Contacts, Id, TaggedId } from "../../interfaces/interfaces";

interface Props {
  contact: Contacts;
  id: string;
  pinSearchResult: Function;
  pinnedIds: Id;
  toggleModal: Function;
  taggedIds: TaggedId;
}

function ContactEntry({
  contact,
  id,
  pinnedIds,
  pinSearchResult,
  toggleModal,
  taggedIds,
}: Props) {
  const isPinned = pinnedIds[id] ? true : false;
  const isTagged = taggedIds[id] ? true : false;

  return (
    <ContactOuterWrapper>
      <ContactLeftWrapper>
        <ContactIconWrapper>
          <ContactIcon></ContactIcon>
        </ContactIconWrapper>
        <ContactDetailsWrapper>
          <ContactTitle>{contact.name}</ContactTitle>
          <ContactEmail>{contact.emails[0]}</ContactEmail>
        </ContactDetailsWrapper>
      </ContactLeftWrapper>
      <ContactRightWrappper>
        <ContactDate>
          {"Last contacted: " +
            moment(contact.last_contact, "YYYY-MM-DD").fromNow()}
        </ContactDate>
        <PinWrapper>
          {isPinned ? (
            <PinIcon
              onClick={() => pinSearchResult("contacts", id)}
              src="./icons/pinned-icon.png"
            ></PinIcon>
          ) : (
            <PinIcon
              onClick={() => pinSearchResult("contacts", id)}
              src="./icons/unpinned-icon.png"
            ></PinIcon>
          )}
        </PinWrapper>
        <TagWrapper>
          {isTagged ? (
            <TagIcon
              onClick={() => toggleModal("contacts", contact)}
              src="./icons/tagged-icon.png"
            ></TagIcon>
          ) : (
            <TagIcon
              onClick={() => toggleModal("contacts", contact)}
              src="./icons/untagged-icon.png"
            ></TagIcon>
          )}
        </TagWrapper>
      </ContactRightWrappper>
    </ContactOuterWrapper>
  );
}

export default ContactEntry;
