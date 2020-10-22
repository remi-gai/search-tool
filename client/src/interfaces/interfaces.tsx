interface Calendar {
  id: string;
  title: string;
  date: string;
  invitees: string;
  matching_terms: string[];
}

interface Contacts {
  id: string;
  name: string;
  company: string;
  emails: string[];
  phones: string[];
  matching_terms: string[];
  last_contact: string;
}

interface Dropbox {
  id: string;
  path: string;
  title: string;
  shared_with: string[];
  matching_terms: string[];
  created: string;
}

interface Slack {
  id: string;
  channel: string;
  author: string;
  message: string;
  timestamp: string;
  matching_terms: string[];
}

interface Twitter {
  id: string;
  user: string;
  message: string;
  timestamp: string;
  matching_terms: string[];
}

enum Category {
  ALL = "all",
  CONTACTS = "contacts",
  DROPBOX = "dropbox",
  SLACK = "slack",
  TWITTER = "twitter",
}

interface SearchData {
  contacts: Contacts[];
  calendar: Calendar[];
  dropbox: Dropbox[];
  slack: Slack[];
  twitter: Twitter[];
}

interface Id {
  id: string;
}

interface Tag {
  contacts: Contacts[];
  calendar: Calendar[];
  dropbox: Dropbox[];
  slack: Slack[];
  twitter: Twitter[];
}

interface TaggedSearches {
  [tagName: string]: Tag;
}

interface TaggedId {
  [tagId: string]: string[];
}

interface Entry {
  id: string;
  user: string;
  message: string;
  timestamp: string;
  matching_terms: string[];
  channel: string;
  author: string;
  path: string;
  invitees: string;
  last_contact: string;
  company: string;
  emails: string[];
  phones: string[];
}

interface SearchHooks {
  searchData: SearchData;
  category: string;
  searchWord: string;
  searchedWord: string;
  setSearchData: Function;
  setCategory: Function;
  setSearchWord: Function;
  setSearchedWord: Function;
}

interface TagHooks {
  taggedSearches: TaggedSearches;
  taggedIds: TaggedId;
  tagWord: string;
  tagCategory: string;
  tagElement: Entry;
  showTagMenu: Boolean;
  setTaggedSearches: Function;
  setTaggedIds: Function;
  setTagWord: Function;
  setTagCategory: Function;
  setTagElement: Function;
  setTagMenu: Function;
}

interface PinHooks {
  pinnedSearches: SearchData;
  pinnedIds: Id;
  setPinnedSearches: Function;
  setPinnedIds: Function;
}

interface ModalHooks {
  showModal: boolean;
  setModal: Function;
}

interface LoadingHooks {
  isLoading: boolean;
  setIsLoading: Function;
}

interface SearchInputRef {
  current: HTMLInputElement;
}

export {
  Calendar,
  Contacts,
  Slack,
  Twitter,
  Dropbox,
  Category,
  SearchData,
  Id,
  Tag,
  TaggedSearches,
  TaggedId,
  Entry,
  TagHooks,
  SearchHooks,
  PinHooks,
  ModalHooks,
  LoadingHooks,
  SearchInputRef,
};
