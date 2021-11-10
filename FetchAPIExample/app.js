// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(response => {
//         console.log('Reponse, waiting to parse...', reponse);
//         return response.json();
//     })
//     .then(data => {
//         console.log('Data parsed...');
//         console.log(data.ticker.price);
//     })
//     .catch(err => {
//         console.log(err);
//     })



const getData = async () => {
    try {
        const response = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        data = await response.json();
        console.log(data.ticker.price);
    } catch(e) {
        console.log('error');
        console.log(this);
    }
}
getData();
