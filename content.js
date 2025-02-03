// content.js

// Detect and replace ads with motivational content
function replaceAdsWithContent(quote) {
  const adSelectors = [
    ".ad",
    ".banner",
    ".advertisement",
    "[id*='ad']",
    "[class*='ad']",
  ];

  adSelectors.forEach((selector) => {
    const adElements = document.querySelectorAll(selector);
    adElements.forEach((adElement) => {
      adElement.innerHTML = `
              <div class="motivational-content">
                <p>${quote}</p>
              </div>
            `;
      adElement.style.backgroundColor = "#f0f0f0";
      adElement.style.padding = "10px";
      adElement.style.borderRadius = "5px";
      adElement.style.textAlign = "center";
    });
  });
}

// Request a motivational quote from the background script
chrome.runtime.sendMessage({ action: "getQuote" }, (response) => {
  if (response.quote) {
    replaceAdsWithContent(response.quote);
  }
});
