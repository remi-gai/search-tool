import React from "react";

import ContactEntry from "./ContactEntry";

import {} from "./styles";

import { Contacts, Id } from "../../interfaces/interfaces";

interface Props {
  contactsData: Contacts[];
  pinSearchResult: Function;
  pinnedIds: Id;
}

function ContactsList({ contactsData, pinSearchResult, pinnedIds }: Props) {
  return (
    <div>
      {contactsData.map((contact) => {
        return (
          <ContactEntry
            contact={contact}
            key={contact.id}
            id={contact.id}
            pinnedIds={pinnedIds}
            pinSearchResult={pinSearchResult}
          />
        );
      })}
    </div>
  );
}

export default ContactsList;
