# CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS
**COMPANY** : CODTECH IT SOLUTIONS
**NAME** : DEEPALI SANJAY HIRAVE
**INTERN ID** : CT08HRX
**DOMAIN NAME**: FULL STACK WEB DEVELOPMENT
**BATCH DURATION** : December 30th, 2024 to January 30th, 2025.
**MENTOR NAME:** : Neela Santhosh Kumar
# DESCRIPTION 
This extension helps track the time spent on different websites by monitoring user activity in Chrome tabs. It logs the time spent per domain and displays it in a popup for easy access. Below is a detailed description of the tools, resources, libraries, and the expected output:

**Tools Used**
Google Chrome:
Browser required to run and test the Chrome extension.

Visual Studio Code (VS Code):
Code editor used to write and manage the extension files.

Chrome Developer Tools:
For debugging the extension, viewing logs, and testing the extension’s behavior.

Chrome Extensions Platform:
Provides the APIs (chrome.tabs, chrome.storage) used to monitor and log website activity.

**Resources**
Manifest File (manifest.json):
Defines the extension's metadata, permissions, and the services used.

JavaScript Files:
background.js: Tracks active tab changes and logs the time spent on each website.
popup.js: Displays the stored time data dynamically in the popup.

HTML and CSS:
popup.html: Provides the user interface (UI) to display the tracked data.
Inline CSS: Styles the popup table for a clean and simple look.

Chrome API Documentation:
Used for implementing APIs like chrome.tabs and chrome.storage.

Documentation: Chrome Extension APIs

**Libraries**

Features
Time Tracking:
Tracks the total time spent on each domain (e.g., google.com, facebook.com).
Updates the time dynamically as users switch or close tabs.

User Interface:
Provides a simple popup displaying a table of websites and the time spent on each.

Data Persistence:
Stores time data using chrome.storage.local, allowing data to persist across browser sessions.

Dynamic Updates:
Automatically logs and updates the time as the user navigates different websites or switches tabs.

**Output**
 Popup UI:
Displays the tracked time in a tabular format for easy readability.
The popup loads dynamically and updates in real-time.

Console Logs:
Debugging information is logged in the Chrome Developer Console, showing real-time tracking and updates.

How It Works
Background Script:
Listens to tab activation (chrome.tabs.onActivated) and URL changes (chrome.tabs.onUpdated).
Tracks the active website and calculates the time spent using timestamps.
Stores the time data in Chrome’s local storage.
Popup Script:
Fetches stored time data from local storage.
Dynamically updates the popup table to display the websites and their corresponding time spent.

Extension Interface:
Users can click the extension icon in the toolbar to view the tracked time in the popup.
Possible Enhancements

Advanced Features:
Add daily/weekly reports of website usage.
Include a reset button in the popup to clear time data.
 
 
![Image](https://github.com/user-attachments/assets/608415ba-6de1-4996-92e9-3c31cd751621)
