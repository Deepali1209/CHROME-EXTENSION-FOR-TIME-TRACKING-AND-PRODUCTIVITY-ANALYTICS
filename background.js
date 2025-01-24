let activeTabId = null;
let activeWebsite = null;
let timeSpent = {};
let startTime = null;

// When the active tab changes
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  await trackTime();
  const tab = await chrome.tabs.get(activeInfo.tabId);
  activeTabId = activeInfo.tabId;
  activeWebsite = new URL(tab.url).hostname;
  startTime = Date.now();
});

// When the tab is updated (e.g., URL change)
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (tabId === activeTabId && changeInfo.status === "complete") {
    await trackTime();
    activeWebsite = new URL(tab.url).hostname;
    startTime = Date.now();
  }
});

// Track the time spent when switching tabs or closing
async function trackTime() {
  if (activeWebsite && startTime) {
    const duration = Math.round((Date.now() - startTime) / 1000); // in seconds
    timeSpent[activeWebsite] = (timeSpent[activeWebsite] || 0) + duration;
    startTime = null;
    console.log(timeSpent); // Log data (can save to storage or display)
    await chrome.storage.local.set({ timeSpent });
  }
}
