import React from "react";
import ContactEntry from "./ContactEntry";

import {} from "./styles";

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
  contactsData: Contacts[];
}

function ContactsList({ contactsData }: Props) {
  return (
    <div>
      {contactsData.map((contact) => {
        return <ContactEntry contact={contact} />;
      })}
    </div>
  );
}

export default ContactsList;
