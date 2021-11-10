const req = new XMLHttpRequest();

req.onload = function () {
    console.log('All done with request');
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price);

}

req.onerror = function () {
    console.log('error');
    console.log(this);
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
req.send();