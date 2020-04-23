const bkg = chrome.extension.getBackgroundPage();
const changeMode = document.querySelector("#whatsAppDark");

chrome.storage.sync.get("darkMode", function (data) {
  bkg.console.log(`init script for popup`, data);
  changeMode.checked = data.darkMode;
});

changeMode.onchange = function (element) {
  let value = this.checked;

  chrome.storage.sync.set({ darkMode: value }, function () {
    bkg.console.log(`This value is ${value}`);
  });

  if (value) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { command: "init", darkMode: value });
    });
  } else {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { command: "remove", hide: value });
    });
  }
};
