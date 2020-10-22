import { onSearchWordSubmit } from "./searchMethods";
import { onSaveTag } from "./tagMethods";

const toggleModal = (
  category,
  element,
  { showModal, setModal },
  { setTagWord, setTagCategory, setTagElement }
) => {
  setModal(!showModal);
  if (category === null) {
    return;
  }
  setTagWord("");
  setTagCategory(category);
  setTagElement(element);
};

const onKeyUp = (
  event,
  refName,
  pinHooks,
  tagHooks,
  searchHooks,
  setIsLoading
) => {
  if (event.key === "Enter") {
    if (refName === "search") {
      onSearchWordSubmit(searchHooks, pinHooks, tagHooks, setIsLoading);
    } else {
      onSaveTag(tagHooks);
    }
  }
};

export { toggleModal, onKeyUp };
