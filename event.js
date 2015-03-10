function getBgColors (tab) {
  // But for now, let's just make sure what we have so
  // far is working as expected.
  //alert("hello!!!");
  //chrome.tabs.create({ url: "http://google.com" });
}

// When the browser action is clicked, call the
// getBgColors function.
chrome.browserAction.onClicked.addListener(getBgColors);


chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  //console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript(null, { file: "jquery-1.11.2.min.js" }, function() {
    chrome.tabs.executeScript(null, { file: "content.js" });
});
  
});