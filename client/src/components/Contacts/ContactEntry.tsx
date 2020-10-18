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

import { Contacts } from "../../interfaces/interfaces";

interface Props {
  contact: Contacts;
}

function ContactEntry({ contact }: Props) {
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
      </ContactRightWrappper>
    </ContactOuterWrapper>
  );
}

export default ContactEntry;
