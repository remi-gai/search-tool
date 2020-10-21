const onTagWordChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setTagWord
) => {
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
}) => {
  if (tagWord.length === 0) {
    return;
  }

  const copyOfTaggedSearches = JSON.parse(JSON.stringify(taggedSearches));
  const copyOfTaggedIds = JSON.parse(JSON.stringify(taggedIds));
  if (!taggedSearches[tagWord]) {
    const template = {
      contacts: [],
      calendar: [],
      dropbox: [],
      slack: [],
      twitter: [],
    };
    copyOfTaggedSearches[tagWord] = template;
  }
  if (!taggedIds[tagElement.id]) {
    copyOfTaggedIds[tagElement.id] = [];
  }

  copyOfTaggedSearches[tagWord][tagCategory].push(tagElement);
  if (copyOfTaggedIds[tagElement.id].indexOf(tagWord) === -1)
    copyOfTaggedIds[tagElement.id].push(tagWord);
  setTaggedSearches(copyOfTaggedSearches);
  setTaggedIds(copyOfTaggedIds);
  setTagWord("");
};

const deleteTag = (tag, tagHooks) => {
  const copyOfTaggedSearches = JSON.parse(
    JSON.stringify(tagHooks.taggedSearches)
  );
  delete copyOfTaggedSearches[tag];
  tagHooks.setTaggedSearches(copyOfTaggedSearches);
  deleteTagFromAllTaggedIds(tag, tagHooks);
};

const deleteTagFromAllTaggedIds = (tag, { setTaggedIds, taggedIds }) => {
  const keysInTaggedIds = Object.keys(taggedIds);
  const copyOfTaggedIds = JSON.parse(JSON.stringify(taggedIds));

  keysInTaggedIds.forEach((id) => {
    const idTags = copyOfTaggedIds[id];
    for (let i = 0; i < idTags.length; i++) {
      const currentTag = idTags[i];
      if (tag === currentTag) {
        idTags.splice(i, 1);
        if (idTags.length === 0) {
          delete copyOfTaggedIds[id];
        }
        break;
      }
    }
  });
  setTaggedIds(copyOfTaggedIds);
};

const deleteElementFromTag = (tag, tagHooks) => {
  const id = tagHooks.tagElement.id;
  const category = tagHooks.tagCategory;
  deleteElementFromTaggedSearches(id, tag, category, tagHooks);
  deleteTagFromIdInTaggedIds(id, tag, tagHooks);
};

const deleteElementFromTaggedSearches = (
  id,
  tag,
  category,
  { setTaggedSearches, taggedSearches }
) => {
  const copyOfTaggedSearches = JSON.parse(JSON.stringify(taggedSearches));
  const tagAndCategoryData = copyOfTaggedSearches[tag][category];
  for (let i = 0; i < tagAndCategoryData.length; i++) {
    const currentElement = tagAndCategoryData[i];
    if (id === currentElement.id) {
      tagAndCategoryData.splice(i, 1);
      break;
    }
  }
  setTaggedSearches(copyOfTaggedSearches);
};

const deleteTagFromIdInTaggedIds = (id, tag, { setTaggedIds, taggedIds }) => {
  const copyOfTaggedIds = JSON.parse(JSON.stringify(taggedIds));
  const idTags = copyOfTaggedIds[id];
  for (let i = 0; i < idTags.length; i++) {
    const currentTag = idTags[i];
    if (tag === currentTag) {
      idTags.splice(i, 1);
      if (idTags.length === 0) {
        delete copyOfTaggedIds[id];
      }
      break;
    }
  }
  setTaggedIds(copyOfTaggedIds);
};

const toggleTagMenu = ({ setTagMenu, showTagMenu }) => {
  setTagMenu(!showTagMenu);
};

export {
  onTagWordChange,
  onSaveTag,
  deleteTag,
  deleteElementFromTag,
  toggleTagMenu,
};
