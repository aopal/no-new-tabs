
function noNewTabs(tab) {
  console.log("created new tab", tab.id, tab.url)
  const requestedUrl = tab.url
  if (localStorage.getItem("noNewTabs.enabled") == "true") {
    localStorage.setItem("noNewTabs.requestedUrl", requestedUrl)

    browser.tabs.update(
      tab.id,
      {
        url: browser.runtime.getURL("src/blocked.html?"),
        loadReplace: false,
      }
    )
  }
}

browser.tabs.onCreated.addListener(noNewTabs)
