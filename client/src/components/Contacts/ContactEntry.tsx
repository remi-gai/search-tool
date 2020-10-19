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

import { PinWrapper, PinnedIcon, UnpinnedIcon } from "../Pin/styles";

import { TagWrapper, TaggedIcon, UntaggedIcon } from "../Tag/styles";

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
          {pinnedIds[id] ? (
            <PinnedIcon
              onClick={() => pinSearchResult("contacts", id)}
            ></PinnedIcon>
          ) : (
            <UnpinnedIcon
              onClick={() => pinSearchResult("contacts", id)}
            ></UnpinnedIcon>
          )}
        </PinWrapper>
        <TagWrapper>
          {taggedIds[id] ? (
            <TaggedIcon
              onClick={() => toggleModal("contacts", contact)}
            ></TaggedIcon>
          ) : (
            <UntaggedIcon
              onClick={() => toggleModal("contacts", contact)}
            ></UntaggedIcon>
          )}
        </TagWrapper>
      </ContactRightWrappper>
    </ContactOuterWrapper>
  );
}

export default ContactEntry;
