

$.get('https://api.cryptonator.com/api/ticker/btc-usd', function (data) {
    console.log(data.ticker.price);
})