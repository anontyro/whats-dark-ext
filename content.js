let observer;

const setDarkHeader = () => {
  const headerList = document.querySelectorAll("header");
  if (!headerList) {
    return;
  }
  for (const header of headerList) {
    header.style.backgroundColor = "black";
  }
};

const setSetup = () => {
  const startup = document.querySelector("#startup");
  if (!startup) {
    return;
  }
  startup.style.backgroundColor = "black";
};

const appChangeEvent = () => {
  const targetNode = document.querySelector("#app");
  const config = { attributes: true, childList: true, subtree: true };

  const callback = function (mutationList, observer) {
    for (let mutation of mutationList) {
      console.log(mutation.addedNodes);
      setSetup();
      setDarkHeader();
    }
  };

  observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
};

window.onload = function () {
  chrome.storage.sync.get("darkMode", (data) => {
    const { darkMode } = data;
    if (darkMode) {
      appChangeEvent();
    } else {
      observer.disconnect();
    }
  });
};
