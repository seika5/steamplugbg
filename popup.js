window.onload = function() {
    var img, sidebar, text, activitybar, titlebar;
    chrome.storage.local.get('img', function (result) {
        if (result.img){
		    document.getElementById("in").value = result.img;
        }
    });

    chrome.storage.local.get('sidebar', function (result) {
        if (result.sidebar){
		    document.getElementById("in-sidebar").value = result.sidebar;
        } else {
            document.getElementById("in-sidebar").value = "#252526";
        }
    });

    chrome.storage.local.get('text', function (result) {
        if (result.text){
		    document.getElementById("in-text").value = result.text;
        } else {
            document.getElementById("in-text").value = "#cccccc";
        }
    });

    chrome.storage.local.get('activitybar', function (result) {
        if (result.activitybar){
		    document.getElementById("in-activitybar").value = result.activitybar;
        } else {
            document.getElementById("in-activitybar").value = "#333333";
        }
    });

    chrome.storage.local.get('titlebar', function (result) {
        if (result.titlebar){
		    document.getElementById("in-titlebar").value = result.titlebar;
        } else {
            document.getElementById("in-titlebar").value = "#3c3c3c";
        }
    });

    document.getElementById("save").onclick = function fun() {
        img = document.getElementById("in").value;
        sidebar = document.getElementById("in-sidebar").value;
        text = document.getElementById("in-text").value;
        activitybar = document.getElementById("in-activitybar").value;
        titlebar = document.getElementById("in-titlebar").value;

        chrome.storage.local.set({'img': img});
        chrome.storage.local.set({'sidebar': sidebar});
        chrome.storage.local.set({'text': text});
        chrome.storage.local.set({'activitybar': activitybar});
        chrome.storage.local.set({'titlebar': titlebar});
    }

    document.getElementById("reset").onclick = function fun() {
		document.getElementById("in").value = "";
		chrome.storage.local.set({'img': null});

        document.getElementById("in-sidebar").value = "#252526";
		chrome.storage.local.set({'sidebar': "#252526"});

        document.getElementById("in-text").value = "#cccccc";
		chrome.storage.local.set({'text': "#cccccc"});

        document.getElementById("in-activitybar").value = "#333333";
		chrome.storage.local.set({'activitybar': "#333333"});

        document.getElementById("in-titlebar").value = "#3c3c3c";
		chrome.storage.local.set({'titlebar': "#3c3c3c"});
    }
}
