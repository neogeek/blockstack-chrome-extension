// @ts-ignore
chrome.runtime.onInstalled.addListener(() => {
  // @ts-ignore
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [
      {
        id: 1,
        priority: 1,
        action: {
          type: 'redirect',
          redirect: {
            // @ts-ignore
            url: chrome.runtime.getURL('blocked.html')
          }
        },
        condition: {
          urlFilter: `*://*.substack.com/*`,
          resourceTypes: ['main_frame']
        }
      }
    ]
  });
});
