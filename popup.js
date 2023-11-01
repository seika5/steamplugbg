window.onload = function() {
    var img, sidebar, text;
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

    document.getElementById("save").onclick = function fun() {
        img = document.getElementById("in").value;
        sidebar = document.getElementById("in-sidebar").value;
        text = document.getElementById("in-text").value;

        chrome.storage.local.set({'img': img});
        chrome.storage.local.set({'sidebar': sidebar});
        chrome.storage.local.set({'text': text});
    }

    document.getElementById("reset").onclick = function fun() {
		document.getElementById("in").value = "";
		chrome.storage.local.set({'img': null});

        document.getElementById("in-sidebar").value = "#252526";
		chrome.storage.local.set({'sidebar': "#252526"});

        document.getElementById("in-text").value = "#cccccc";
		chrome.storage.local.set({'text': "#cccccc"});
    }
}
