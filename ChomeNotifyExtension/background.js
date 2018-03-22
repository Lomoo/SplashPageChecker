var options ={
  type:"basic",
  title: "Passed Splash Page",
  message: "One of your browsers has passed the queue"
}
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // console.log(sender.tab ?
    //             "from a content script:" + sender.tab.url :
    //             "from the extension");
    if (request.notify == "Passed Splash")
    options.iconUrl = chrome.runtime.getURL("shaka-64x64.png")
    chrome.notifications.create("splashNotify", options);
    sendResponse({passedQueue: "On Splash"});
  });
