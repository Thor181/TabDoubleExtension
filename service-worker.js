chrome.commands.onCommand.addListener((command, tab) => {
    chrome.tabs.duplicate(tab.id);
});