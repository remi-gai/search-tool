import { TagHooks } from "../interfaces/interfaces";

const onTagWordChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setTagWord: Function
): void => {
  const word = event.target.value;
  setTagWord(word);
};

const onSaveTag = ({
  tagWord,
  tagElement,
  taggedIds,
  taggedSearches,
  tagCategory,
  setTaggedSearches,
  setTaggedIds,
  setTagWord,
}: TagHooks): void => {
  if (tagWord.length === 0) {
    return;
  }

  let newTaggedIdsList;
  let newTaggedSearchesList;

  tagWord = tagWord.toLowerCase();

  const shallowCopyOfTaggedSearches = { ...taggedSearches };
  const shallowCopyOfTaggedIds = { ...taggedIds };

  if (!taggedSearches[tagWord]) {
    const template = {
      contacts: [],
      calendar: [],
      dropbox: [],
      slack: [],
      twitter: [],
    };
    shallowCopyOfTaggedSearches[tagWord] = template;
  }

  if (!taggedIds[tagElement.id]) {
    shallowCopyOfTaggedIds[tagElement.id] = [];
  }

  newTaggedSearchesList = shallowCopyOfTaggedSearches[tagWord][
    tagCategory
  ].slice();
  newTaggedSearchesList.push(tagElement);
  shallowCopyOfTaggedSearches[tagWord][tagCategory] = newTaggedSearchesList;

  if (shallowCopyOfTaggedIds[tagElement.id].indexOf(tagWord) === -1) {
    newTaggedIdsList = shallowCopyOfTaggedIds[tagElement.id].slice();
    newTaggedIdsList.push(tagWord);
    shallowCopyOfTaggedIds[tagElement.id] = newTaggedIdsList;
  }

  setTaggedSearches(shallowCopyOfTaggedSearches);
  setTaggedIds(shallowCopyOfTaggedIds);
  setTagWord("");
};

const deleteTag = (tag: string, tagHooks: TagHooks): void => {
  const shallowCopyOfTaggedSearches = { ...tagHooks.taggedSearches };
  delete shallowCopyOfTaggedSearches[tag];
  tagHooks.setTaggedSearches(shallowCopyOfTaggedSearches);
  deleteTagFromAllTaggedIds(tag, tagHooks);
};

const deleteTagFromAllTaggedIds = (
  tag: string,
  { setTaggedIds, taggedIds }: TagHooks
): void => {
  const keysInTaggedIds = Object.keys(taggedIds);
  const shallowCopyOfTaggedIds = { ...taggedIds };

  keysInTaggedIds.forEach((id) => {
    const idTags = shallowCopyOfTaggedIds[id];
    for (let i = 0; i < idTags.length; i++) {
      const currentTag = idTags[i];
      if (tag === currentTag) {
        idTags.splice(i, 1);
        if (idTags.length === 0) {
          delete shallowCopyOfTaggedIds[id];
        }
        break;
      }
    }
  });
  setTaggedIds(shallowCopyOfTaggedIds);
};

const deleteElementFromTag = (tag: string, tagHooks: TagHooks): void => {
  const id = tagHooks.tagElement.id;
  const category = tagHooks.tagCategory;
  deleteElementFromTaggedSearches(id, tag, category, tagHooks);
  deleteTagFromIdInTaggedIds(id, tag, tagHooks);
};

const deleteElementFromTaggedSearches = (
  id: string,
  tag: string,
  category: string,
  { setTaggedSearches, taggedSearches }: TagHooks
): void => {
  let newList;
  const tagAndCategoryData = taggedSearches[tag][category];

  for (let i = 0; i < tagAndCategoryData.length; i++) {
    const currentElement = tagAndCategoryData[i];
    if (id === currentElement.id) {
      newList = tagAndCategoryData.slice();
      newList.splice(i, 1);
      break;
    }
  }

  setTaggedSearches({
    ...taggedSearches,
    [tag]: {
      ...taggedSearches[tag],
      [category]: newList,
    },
  });
};

const deleteTagFromIdInTaggedIds = (
  id: string,
  tag: string,
  { setTaggedIds, taggedIds }: TagHooks
): void => {
  const shallowCopyOfTaggedIds = { ...taggedIds };
  const idTags = shallowCopyOfTaggedIds[id];
  for (let i = 0; i < idTags.length; i++) {
    const currentTag = idTags[i];
    if (tag === currentTag) {
      idTags.splice(i, 1);
      if (idTags.length === 0) {
        delete shallowCopyOfTaggedIds[id];
      }
      break;
    }
  }
  setTaggedIds(shallowCopyOfTaggedIds);
};

const toggleTagMenu = ({ setTagMenu, showTagMenu }: TagHooks): void => {
  setTagMenu(!showTagMenu);
};

export {
  onTagWordChange,
  onSaveTag,
  deleteTag,
  deleteElementFromTag,
  toggleTagMenu,
};
