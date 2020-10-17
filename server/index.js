const express = require("express");
const path = require("path");

const contactsData = require("./data/contacts");
const calendarData = require("./data/calendar");
const dropboxData = require("./data/dropbox");
const slackData = require("./data/slack");
const tweetData = require("./data/tweet");

const app = express();

const PORT = 3000;

app.get("/api/results/:search", (req, res) => {
  const searchTerm = req.params.search;
  const result = {
    contacts: [],
    calendar: [],
    dropbox: [],
    slack: [],
    tweet: [],
  };

  result.contacts = getCategoryData("contacts", searchTerm);
  result.calendar = getCategoryData("calendar", searchTerm);
  result.dropbox = getCategoryData("dropbox", searchTerm);
  result.slack = getCategoryData("slack", searchTerm);
  result.tweet = getCategoryData("tweet", searchTerm);

  res.send(result);
});

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
  } else if (category === "tweet") {
    category = tweetData.tweet;
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

app.use(express.static(path.join(__dirname, "../client/dist")));
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
