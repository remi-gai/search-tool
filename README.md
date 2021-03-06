# Universal Search Tool

![](searchToolDemo.gif)

This is the demo of a universal search engine that allows users to quickly find relevant search results based on a specific keyword across contacts, calendar, dropbox, twitter and slack. Here's the [video demo](https://youtu.be/lo5niYYjJr4).

## Getting Started

### Installation

```
npm install
```

To generate the bundle file with Webpack:

```
npm run build
```

To start the server:

```
npm start
```

Finally, open http://localhost:3000/ on your browser.

Suggested search term with the most results: **Acme**

## Additional Feature

User interaction with search results (pin, delete, tagging):

**Pin**:

- [x] As a user, I can pin my search results to the pin board by clicking on the pin icon next to the result, which will then be marked in orange.

![ReadMe-images/Screen_Shot_2020-10-21_at_6.13.44_PM.png](ReadMe-images/Screen_Shot_2020-10-21_at_6.13.44_PM.png)

- [x] As a user, I can remove pinned search results by clicking on the pin icon from the pin board or results board.

![ReadMe-images/Screen_Shot_2020-10-21_at_6.14.01_PM.png](ReadMe-images/Screen_Shot_2020-10-21_at_6.14.01_PM.png)

**Tag**:

- [x] As a user, I can tag my search results based with specific keywords by clicking on the tag icon, which will prompt the Edit Tags box.

![ReadMe-images/Screen_Shot_2020-10-21_at_6.17.47_PM.png](ReadMe-images/Screen_Shot_2020-10-21_at_6.17.47_PM.png)

- [x] As a user, I can add tags to a specific search result.

![ReadMe-images/Screen_Shot_2020-10-21_at_6.17.42_PM.png](ReadMe-images/Screen_Shot_2020-10-21_at_6.17.42_PM.png)

- [x] As a user, I can retrieve search results based on a specific tag from the tag menu or by directly searching a tag name (starting with "#") in the search box.

![ReadMe-images/Screen_Shot_2020-10-21_at_6.18.50_PM.png](ReadMe-images/Screen_Shot_2020-10-21_at_6.18.50_PM.png)

**Delete Tag**:

- [x] As a user, I can delete the tags on a specific result by clicking on the cross next to the tag name in the Edit Tags box.

![ReadMe-images/Screen_Shot_2020-10-21_at_6.19.29_PM.png](ReadMe-images/Screen_Shot_2020-10-21_at_6.19.29_PM.png)

- [x] As a user, I can untag all the results related to specific tag by clicking on the Trash icon in the tag menu.

![ReadMe-images/Screen_Shot_2020-10-21_at_6.19.57_PM.png](ReadMe-images/Screen_Shot_2020-10-21_at_6.19.57_PM.png)

## Design Decisions

### **The search results are ordered based on categories:**

- **Reason**: Grouping the results by category will allow the user to filter the results at his/her convenience. This feature becomes more handy as the list of search results becomes longer for different categories and doesn't fit into a single page. The reasons for the current order (Contacts > Calendar > Dropbox > Slack > Twitter) is that Contacts and Calendar are more likely to be searched on a daily basis (sending an email or checking for the schedule), followed by finding documents, then communication tools and lastly social media.

![ReadMe-images/Screen_Shot_2020-10-21_at_6.24.21_PM.png](ReadMe-images/Screen_Shot_2020-10-21_at_6.24.21_PM.png)

- **Trade-off**: Ideally, the results should be ordered based on the likelyhood of usage, similar to the feature on Spotlight Search on Mac, which can be a combination of relevance and frequency of usage, and even include a "Top Hits" section.

![ReadMe-images/Untitled.png](ReadMe-images/Untitled.png)

- Alternatively, the results can also be ordered by the degree of accuracy on the matching term (which would get more accurate as more words are added into the search box), and use machine learning to better optimize the relevance of the search based on time or location. For example, a user is less likely to be querying for a "John" in San Francisco if he/she is in New York, or is more likely to query an upcoming event rather than a past event.

### **The result dates are based on relative time:**

- **Reason**: It would be more practical for the user to get a general sense of recency instead of mentally calculating dates and times and count back from the present day. For example, if the user queries for an event, it might be more helpful to know that it will happen in 2 hours or 2 days instead of a specific date. Another potential issue with absolute date/time is that it might require the user to convert timezones to get their local time (when traveling or working with remote teams), leading to more chance for calculations errors, and consequently missing events or meetings.
- **Trade-off**: the absolute time display will provide more accuracy and can be more helpful if the user wants to directly see an exact date. Perhaps the choice between relative and absolute time can be a choice offered in the settings.

### **The results are ordered by recency within each category:**

- **Reason**: The results are ordered based on recency as it would be more likely to be relevant to a user. For example, a user is more likely to search an upcoming event instead of a past event, or looking for a more recent slack message instead of a message from a month ago.

![ReadMe-images/Screen_Shot_2020-10-21_at_6.35.07_PM.png](ReadMe-images/Screen_Shot_2020-10-21_at_6.35.07_PM.png)

- **Trade-off**: Ordering the results this way might prioritize recency over accuracy on the search, which might not always be the ideal approach.

### **The pin board allows users to pin search results:**

- **Reason**: I decided to include the pin board on the main page instead of having the pinned results displayed on a separate page (like the "favorite" section on Google Drive). This is because having the pin board on a separate page might be a redundant feature since we already have tags. Instead, users can make a multiple queries, such as looking up for a client's contact information, finding a specific contract, and looking for recent Twitter news for a the specific company, and pin specific results to the pin board, which would serve more like a temporary work station. For long-term storage of queries, users can add tags to specific results and access them at any time in the future. In sum, having a pin board can provide more convenience and productivity value to the user (if used correctly) and avoid redundancy of features.

![ReadMe-images/Screen_Shot_2020-10-21_at_6.50.27_PM.png](ReadMe-images/Screen_Shot_2020-10-21_at_6.50.27_PM.png)

- **Trade-off**: Ideally the pin board should be used as temporary result storage and be cleared often. If the pin board gets too long, it could take up too much space on the main page. A way to mitigate this would be to make the pin board collapsible. More UX research would be required to see if users actually wants this feature, but also if the users will use the board as temporary or long-term storage.

### **The spinner animation helps provide feedback to the user:**

- **Reason**: Searching across multiple sources could take time and having a loading animation would give the feedback that data is being fetched, suggesting the users to remain on the page and avoid re-submitting the same queries again.

![ReadMe-images/Screen_Shot_2020-10-21_at_6.54.52_PM_(2).png](<ReadMe-images/Screen_Shot_2020-10-21_at_6.54.52_PM_(2).png>)

- **Trade-off**: This feature wouldn’t be necessary if the query speed is really fast.

### **The total number of results are displayed next to the filter:**

- **Reason**: Having the total number of results displayed to the category can help the user get a better sense of how much relevant data is present for different categories. For example, if the filter shows that the message category has an overwhelming amount of results, the user can then directly filter the search results to a specific category and avoid information overload.

![ReadMe-images/Screen_Shot_2020-10-21_at_6.59.21_PM.png](ReadMe-images/Screen_Shot_2020-10-21_at_6.59.21_PM.png)

- **Trade-off**: This feature might not be as useful if all the search results can fit within one page.

### **The clear button will clear the search box, search results and focus the cursor back to the search bar:**

- **Reason**: Provides more convenience for making new queries.

![ReadMe-images/Screen_Shot_2020-10-21_at_7.01.02_PM.png](ReadMe-images/Screen_Shot_2020-10-21_at_7.01.02_PM.png)

- **Trade-off**: Users will have to click on the "clear" button or manually clear the search box. Alternatively, we can consider having search results being displayed as the user types in the search box. However, this might add more load on the backend to fetch multiple times as the user is typing. A way to mitigate this issue would be to use a debouncer to reduce the amount of unnecessary queries.

### **Clicking on the submit button or pressing the 'return' key will make the query:**

- **Reason**: Pressing the 'return' key to submit a query is becoming more intuitive. Additionally, if the tag modal is currently open, pressing the 'return' key will save the tag instead of running a search query.
- **Trade-off**: Having a submit button might lead the user to believe that he/she can only submit the query through the click of the search button instead of directly pressing the 'return' key.

### **Tags are sorted by alphabet:**

- **Reason**: Sorting will provide convenience for the user to find a specific tag. Additionally, the tag modal and menu will have a vertical scrolling bar if the list of tags gets long.

![ReadMe-images/Screen_Shot_2020-10-21_at_7.08.25_PM.png](ReadMe-images/Screen_Shot_2020-10-21_at_7.08.25_PM.png)

![ReadMe-images/Screen_Shot_2020-10-21_at_7.09.35_PM.png](ReadMe-images/Screen_Shot_2020-10-21_at_7.09.35_PM.png)

- **Trade-off**: This feature wouldn't be as useful if users have to scroll through a very long list of tags to find a specific tag. Moreover, users might prefer seeing more recent tags at the top. The alternative would be to have a search/auto complete feature imbedded so that the user can quickly find existing tags. This feature is not part of the demo, but here are some visual representations of the idea:

![ReadMe-images/Untitled%201.png](ReadMe-images/Untitled%201.png)

![ReadMe-images/Untitled%202.png](ReadMe-images/Untitled%202.png)

### **Long result details are trimmed with an ellipsis:**

- **Reason**: The text within the details section might be trimmed to make sure that the format of all the results is uniform. We often just need a portion of the relevant message to get a general sense of whether the current search result is relevant. If the user wants more details, then he/she can directly click on the result to expand the details or be directed to the search result (not part of this MVP).

![ReadMe-images/Screen_Shot_2020-10-21_at_7.33.13_PM.png](ReadMe-images/Screen_Shot_2020-10-21_at_7.33.13_PM.png)

- **Trade-off**: Users will have to click on the search result to get more details. Ideally, we want the snippet to display the relevant portions of the details that are closest to the search terms.

### **The tagged results can be retrieved by searching with a '#':**

- **Reason**: Convenience for quickly retrieving previously stored results based on hashtags.

![ReadMe-images/Screen_Shot_2020-10-21_at_7.40.11_PM.png](ReadMe-images/Screen_Shot_2020-10-21_at_7.40.11_PM.png)

- **Tradeoff**: this behavior might not be as intuitive for many users and require learning (through a 'tips' section).

### **Search results from the pin and search boards can be cleared with a single click:**

- **Reason**: This is to add convenience for the user to declutter the pin and search boards. Specifically, the pin board is meant to be used in a temporary fashion.

![ReadMe-images/Screen_Shot_2020-10-21_at_7.41.36_PM.png](ReadMe-images/Screen_Shot_2020-10-21_at_7.41.36_PM.png)

![ReadMe-images/Screen_Shot_2020-10-21_at_7.41.42_PM.png](ReadMe-images/Screen_Shot_2020-10-21_at_7.41.42_PM.png)

- **Trade-off**: The user might clear the pin and search boards by mistake.

### **Additional filter idea (not included in this MVP):**

If more data sources are added to the app, additional categories in the filter menu would be helpful:

- **Reason**: Better categorization if more applications such as Notion, Evernote, Google Drive, Gmail, linkedIn, etc. are added.

![ReadMe-images/Untitled%203.png](ReadMe-images/Untitled%203.png)

- **Trade-off**: The filter will take more space if the list of apps gets longer. We can then consider making each category in the filter collapsible.

## Built with:

- React 16
- Typescript 4
- ts-loader 8
- Node.js
- Webpack 4
- Eslint 7
