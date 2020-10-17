import React from "react";
import ContactEntry from "./ContactEntry";

import {} from "./styles";

import { Contacts } from "../../interfaces/interfaces";

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
