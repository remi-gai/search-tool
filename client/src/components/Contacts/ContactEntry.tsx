import React from "react";

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

interface Contacts {
  id: string;
  name: string;
  company: string;
  emails: string[];
  phones: string[];
  matching_terms: string[];
  last_contact: string;
}

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
        <ContactDate>{"Last Contacted: " + contact.last_contact}</ContactDate>
      </ContactRightWrappper>
    </ContactOuterWrapper>
  );
}

export default ContactEntry;
