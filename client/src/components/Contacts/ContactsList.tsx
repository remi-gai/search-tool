import React from "react";

import ContactEntry from "./ContactEntry";

import {} from "./styles";

import { Contacts, Id, TaggedId } from "../../interfaces/interfaces";

interface Props {
  contactsData: Contacts[];
  pinSearchResult: Function;
  pinnedIds: Id;
  toggleModal: Function;
  taggedIds: TaggedId;
}

function ContactsList({
  contactsData,
  pinSearchResult,
  pinnedIds,
  toggleModal,
  taggedIds,
}: Props) {
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
            toggleModal={toggleModal}
            taggedIds={taggedIds}
          />
        );
      })}
    </div>
  );
}

export default ContactsList;
