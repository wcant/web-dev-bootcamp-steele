
const p1 = {
    score: 0,
    display: document.querySelector('.p1Display'),
    button: document.querySelector('.p1Button')
}

const p2 = {
    score: 0,
    display: document.querySelector('.p2Display'),
    button: document.querySelector('.p2Button')
}

const scoreSelect = document.querySelector('#scoreToWin');
const resetButton = document.querySelector('.resetButton');

// sets inital value; updated on change event
let scoreToWin = parseInt(scoreSelect.value);

function resetScores() {
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = '0';
    p2.display.textContent = '0';
    p1.display.classList.remove('green', 'red');
    p2.display.classList.remove('green', 'red');
    p1.button.disabled = false;
    p2.button.disabled = false;
}

function updateScore(player, opponent) {
    player.score+=1;
    player.display.textContent = `${player.score}`;
    player.score === scoreToWin ? declareWinner(player,opponent) : null;
}

function setWinningScore() {
    scoreToWin = parseInt(scoreSelect.value);
    resetScores();
}

function declareWinner(winner, loser) {
    p1.button.disabled = true;
    p2.button.disabled = true;

    winner.display.classList.add('green');
    loser.display.classList.add('red');
}


function playerScored(player, opponent) {
    return function () {
        updateScore(player,opponent);
    }
}

// add event listeners
p1.button.addEventListener('click', playerScored(p1,p2));
p2.button.addEventListener('click', playerScored(p2,p1));
scoreSelect.addEventListener('change', setWinningScore);
resetButton.addEventListener('click', resetScores);