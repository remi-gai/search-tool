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
  ALL = "ALL",
  CONTACTS = "CONTACTS",
  DROPBOX = "DROPBOX",
  SLACK = "SLACK",
  TWITTER = "TWITTER",
}

interface Pinned {
  contacts: Contacts[];
  calendar: Calendar[];
  dropbox: Dropbox[];
  slack: Slack[];
  twitter: Twitter[];
}

interface Id {
  id: string;
}

export { Calendar, Contacts, Slack, Twitter, Dropbox, Category, Pinned, Id };
