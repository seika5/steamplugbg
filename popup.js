window.onload = function() {
    var img;
    chrome.storage.local.get('img', function (result) {
        if (result.img){
		    document.getElementById("in").value = result.img;
        }
    });

    document.getElementById("save").onclick = function fun() {
		img = document.getElementById("in").value;
		chrome.storage.local.set({'img': img});
    }

    document.getElementById("reset").onclick = function fun() {
		document.getElementById("in").value = "";
		chrome.storage.local.set({'img': null});
    }
}
