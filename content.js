window.onmouseover = function() {
    chrome.storage.local.get('img', function (result) {
        document.querySelector(".monaco-editor-background").style.backgroundImage
            = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("' + result.img + '")';
    });
}