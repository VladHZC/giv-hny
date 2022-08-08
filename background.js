function updatePrice() {
    var request = new Request('https://api.coingecko.com/api/v3/simple/price?ids=giveth&vs_currencies=usd', {
        method: 'GET'
    });

    fetch(request)
    .then(response => response.json());

    request.onload = () => {
        if (request.status == 200) {
            var response = JSON.parse(request.responseText);
            chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
            chrome.browserAction.setBadgeText({text: response['giveth'].usd.toString()});
        }
    }
}
updatePrice();
setInterval(updatePrice, 60000);