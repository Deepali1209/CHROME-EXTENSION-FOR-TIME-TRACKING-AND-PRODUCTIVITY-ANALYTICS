let activeTabId = null;
let activeStartTime = null;

chrome.tabs.onActivated.addListener(({ tabId }) => {
  trackTime();
  activeTabId = tabId;
  activeStartTime = Date.now();
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tabId === activeTabId && changeInfo.url) {
    trackTime();
    activeStartTime = Date.now();
  }
});

chrome.tabs.onRemoved.addListener(() => trackTime());

function trackTime() {
  if (activeTabId && activeStartTime) {
    const timeSpent = Date.now() - activeStartTime;

    chrome.tabs.get(activeTabId, (tab) => {
      if (tab && tab.url) {
        const domain = new URL(tab.url).hostname;
        sendToBackend({ domain, timeSpent });
      }
    });
  }
}

function sendToBackend(data) {
  fetch("http://localhost:3000/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).catch(console.error);
}
