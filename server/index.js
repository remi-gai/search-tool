const express = require("express");
const path = require("path");
const shortid = require("shortid");
const { getCategoryData, insertUniqueIDs } = require("./serverUtils");

const contactsData = require("./data/contacts");
const calendarData = require("./data/calendar");
const dropboxData = require("./data/dropbox");
const slackData = require("./data/slack");
const twitterData = require("./data/twitter");

const app = express();

const PORT = 3000;

insertUniqueIDs(contactsData.contacts);
insertUniqueIDs(calendarData.calendar);
insertUniqueIDs(dropboxData.dropbox);
insertUniqueIDs(slackData.slack);
insertUniqueIDs(twitterData.twitter);

app.get("/api/results/:search", (req, res) => {
  const searchTerm = req.params.search;
  const result = {
    contacts: [],
    calendar: [],
    dropbox: [],
    slack: [],
    twitter: [],
  };

  result.contacts = getCategoryData("contacts", searchTerm);
  result.calendar = getCategoryData("calendar", searchTerm);
  result.dropbox = getCategoryData("dropbox", searchTerm);
  result.slack = getCategoryData("slack", searchTerm);
  result.twitter = getCategoryData("twitter", searchTerm);

  // setTimeout to simulate delay to display the spinner on the front end
  setTimeout(() => {
    res.status(200);
    res.send(result);
    res.end();
  }, 1000);
});

app.use(express.static(path.join(__dirname, "../client/dist")));
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
