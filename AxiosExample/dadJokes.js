// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price);
//     })
//     .catch(err => {
//         console.log('error', err);
//     })


// Bitcoin price
const getBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log(res);
        console.log(res.data.ticker.price);
    } catch(err) {
        console.log('error', err);
        console.log(this);
    }
}
getBitcoinPrice();


// Dad Jokes
const jokes = document.querySelector('.jokes');
const jokeButton = document.querySelector('button');
const getDadJoke = async () => {
    const config = {headers:{Accept:'application/json'}};
    const response = await axios.get('http://icanhazdadjoke.com/', config);
    const newLi = document.createElement('li');
    newLi.textContent = response.data.joke;
    jokes.append(newLi);
}
jokeButton.addEventListener('click', getDadJoke);



