// popup.js

// Refresh motivational content
document.getElementById("refreshButton").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "refreshContent" });
    });
  });