const changeMode = document.querySelector("#whatsAppDark");

chrome.storage.sync.get("hide", function (data) {
  changeMode.checked = data.hide;
});

changeMode.onchange = function (element) {
  let value = this.checked;

  chrome.storage.sync.set({ hide: value }, function () {
    console.log(`This value is ${value}`);
  });
};
