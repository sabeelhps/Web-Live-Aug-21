// const res = `{"ticker":{"base":"BTC","target":"USD","price":"54443.78504937","volume":"59595.34595152","change":"-132.90876402"},"timestamp":1633617181,"success":true,"error":""}`
// const data = JSON.parse(res);
// console.log(data.ticker.price);


const req = new XMLHttpRequest();

req.onload = function () {
    const res = this.responseText;
    const data = JSON.parse(res);
    console.log(data.ticker.price);
}

req.onerror = function () {
    console.log(this);
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
req.send();
