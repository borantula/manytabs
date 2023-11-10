chrome.tabs.onCreated.addListener(function () {
  updateBadge();
});

chrome.tabs.onRemoved.addListener(function () {
  updateBadge();
});

function updateBadge() {
  chrome.tabs.query({}, function (tabs) {
    chrome.windows.getAll({}, function (windows) {
      const text = `${tabs.length}/${windows.length}`;
      chrome.action.setBadgeText({ text: text });
    });
  });
}
