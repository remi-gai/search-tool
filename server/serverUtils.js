const shortid = require("shortid");
const contactsData = require("./data/contacts");
const calendarData = require("./data/calendar");
const dropboxData = require("./data/dropbox");
const slackData = require("./data/slack");
const twitterData = require("./data/twitter");

const getCategoryData = (category, searchWord) => {
  const result = [];

  if (category === "contacts") {
    category = contactsData.contacts;
  } else if (category === "calendar") {
    category = calendarData.calendar;
  } else if (category === "dropbox") {
    category = dropboxData.dropbox;
  } else if (category === "slack") {
    category = slackData.slack;
  } else if (category === "twitter") {
    category = twitterData.twitter;
  }

  for (let i = 0; i < category.length; i++) {
    const currentEntry = category[i];
    const matchingTerms = currentEntry["matching_terms"];
    for (let j = 0; j < matchingTerms.length; j++) {
      const currentTerm = matchingTerms[j];
      if (currentTerm === searchWord) {
        result.push(currentEntry);
      }
    }
  }

  return result;
};

const insertUniqueIDs = (list) => {
  list.forEach((element) => (element.id = shortid.generate()));
};

module.exports = { getCategoryData, insertUniqueIDs };
