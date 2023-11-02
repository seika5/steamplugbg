window.onmouseover = function() {
    // Background image
    chrome.storage.local.get('img', function (result) {
        var ele = document.querySelectorAll(".monaco-editor-background");
        if (result.img) {
            for (var i = 0; i < ele.length; i++) {
                ele[i].style.backgroundImage = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("' + result.img + '")';
            }
        } else {
            for (var i = 0; i < ele.length; i++) {
                ele[i].style.backgroundImage = '';
            }
        }
    });

    // Sidebar color
    chrome.storage.local.get('sidebar', function (result) {
        document.documentElement.style.setProperty("--theia-sideBar-background", result.sidebar);
    });

    // Text color
    chrome.storage.local.get('text', function (result) {
        document.documentElement.style.setProperty("--theia-foreground", result.text);
    });

    // Activity bar color
    chrome.storage.local.get('activitybar', function (result) {
        document.documentElement.style.setProperty("--theia-activityBar-background", result.activitybar);
    });

    // Title bar color
    chrome.storage.local.get('titlebar', function (result) {
        document.documentElement.style.setProperty("--theia-titleBar-activeBackground", result.titlebar);
    });
}