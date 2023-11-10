let tabCount = 0;
let windowCount = 0;

function updateTabAndWindowCount(tabCount, windowCount) {
  console.log("yolo yolo");
  tabCount = tabCount;
  windowCount = windowCount;
  document.getElementById("tabCount").textContent = tabCount;
  document.getElementById("windowCount").textContent = windowCount;
}

window.onload = function () {
  chrome.tabs.query({}, function (tabs) {
    document.getElementById("tabCount").textContent = tabs.length;
    if (tabs.length > 50 && tabs.length < 100) {
      document.getElementById(
        "warning"
      ).textContent = `You have more than 50 tabs open! You might want to tidy up a bit! 
        Are you sure you need them all?`;
    } else if (tabs.length > 100) {
      document.getElementById(
        "warning"
      ).textContent = `You have more than 100 tabs open! It can be resource intensive! 
        Are you sure you need them all?`;
    }
  });
  chrome.windows.getAll({}, function (windows) {
    document.getElementById("windowCount").textContent = windows.length;
  });
};
