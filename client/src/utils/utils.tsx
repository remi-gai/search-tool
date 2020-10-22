import { onSearchWordSubmit } from "./searchUtils";
import { onSaveTag } from "./tagUtils";

import {
  Entry,
  TagHooks,
  SearchHooks,
  ModalHooks,
} from "../interfaces/interfaces";

const toggleModal = (
  category: string,
  element: Entry,
  { showModal, setModal }: ModalHooks,
  { setTagWord, setTagCategory, setTagElement }: TagHooks
): void => {
  setModal(!showModal);
  if (category === null) {
    return;
  }
  setTagWord("");
  setTagCategory(category);
  setTagElement(element);
};

const onKeyUp = (
  event: KeyboardEvent,
  refName: string,
  tagHooks: TagHooks,
  searchHooks: SearchHooks,
  setIsLoading: Function
): void => {
  if (event.key === "Enter") {
    if (refName === "search") {
      onSearchWordSubmit(searchHooks, tagHooks, setIsLoading);
    } else {
      onSaveTag(tagHooks);
    }
  }
};

export { toggleModal, onKeyUp };
