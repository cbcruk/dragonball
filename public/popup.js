const emptyTabUrls = ['chrome://newtab/', 'chrome-search://local-ntp/local-ntp.html']

async function updateTab(tabId, options) {
  await browser.tabs.update(tabId, options)
  window.close()
}

async function queryTabs(urlList) {
  const currentWindow = true
  return browser.tabs.query({ currentWindow, url: urlList })
}

async function openTab(url) {
  const matchingUrls = ['chrome-extension://*/index.html']

  const existingTabs = await queryTabs(matchingUrls)

  if (existingTabs && existingTabs.length > 0) {
    return updateTab(existingTabs[0].id, { url, active: true })
  }

  const emptyTabs = await queryTabs(emptyTabUrls)

  if (emptyTabs && emptyTabs.length > 0) {
    return updateTab(emptyTabs[0].id, { url, active: true })
  }

  await browser.tabs.create({ url })
}

openTab('index.html')