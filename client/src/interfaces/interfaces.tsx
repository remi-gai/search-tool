interface Calendar {
  date: string;
  id: string;
  invitees: string;
  title: string;
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
  NORESULTS = "NO RESULTS",
}

export { Calendar, Contacts, Slack, Twitter, Dropbox, Category };
