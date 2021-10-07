
fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then((res) => {
       
        return res.json();
    })
    .then((data) => {
        console.log(data.ticker.price);
    })
    .catch((err) => {
        console.log(err);
        console.log('something went wrong')
    });