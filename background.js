// background.js

// Fetch motivational quote from an API
async function fetchMotivationalQuote() {
  const apiUrl = "https://api.quotable.io/random";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.content; // return the quote
  } catch (error) {
    console.error("Failed to fetch motivational quote: ", error);
    return "Stay positive and keep going!";
  }
}

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getQuote") {
    fetchMotivationalQuote().then((quote) => sendResponse({ quote }));
    return true;
  }
});
