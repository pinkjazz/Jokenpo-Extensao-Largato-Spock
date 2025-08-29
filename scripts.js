
const result = document.querySelector('.result');
const humanScore = document.querySelector('#score');
const aiScore = document.querySelector('#ai-score');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');

let humanScoreNumber = 0;
let aiScoreNumber = 0;

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
}

const playMachine = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const emojiMap = {
    'Rock': '✊',
    'Paper': '🖐️',
    'Scissors': '✌️',
    'Lizard': '🦎',
    'Spock': '🖖'
};

const humanChoiceSpan = document.getElementById('human-choice');
const iaChoiceSpan = document.getElementById('ia-choice');

const playTheGame = (human, machine) => {
    console.log('Jogada do jogador: ' + human);
    console.log('Jogada da máquina: ' + machine);

    // Atualiza escolhas na tela
    if (humanChoiceSpan) humanChoiceSpan.textContent = `Você: ${emojiMap[human] || ''}`;
    if (iaChoiceSpan) iaChoiceSpan.textContent = `IA: ${emojiMap[machine] || ''}`;

    if (human === machine) {
        result.textContent = 'Deu Empate!';
    }
    else if (
        (human === 'Scissors' && machine === 'Paper') ||
        (human === 'Paper' && machine === 'Rock') ||
        (human === 'Rock' && machine === 'Lizard') ||
        (human === 'Lizard' && machine === 'Spock') ||
        (human === 'Spock' && machine === 'Scissors') ||
        (human === 'Scissors' && machine === 'Lizard') ||
        (human === 'Lizard' && machine === 'Paper') ||
        (human === 'Paper' && machine === 'Spock') ||
        (human === 'Spock' && machine === 'Rock') ||
        (human === 'Rock' && machine === 'Scissors')) {
            humanScoreNumber++;
    humanScore.textContent = humanScoreNumber;
    result.textContent = 'Você ganhou! 😁';
    if (humanScoreNumber === 15) {
        showPopup('win');
    }
}
    else {
    aiScoreNumber++;
    aiScore.textContent = aiScoreNumber;
    result.textContent = 'Você perdeu! 😭';
    if (aiScoreNumber === 15) {
        showPopup('lose');
    }
}
}

function showPopup(type) {
    const popupTitle = document.getElementById('popup-title');
    if (type === 'win') {
        popupImg.src = './assets/Win.gif';
        if (popupTitle) popupTitle.textContent = 'PARABÉNS! Você ganhou! 👏';
    } else if (type === 'lose') {
        popupImg.src = './assets/Lose.png';
        if (popupTitle) popupTitle.textContent = 'Você perdeu! 😭';
    }
    popup.classList.remove('popup-hidden');
}

function resetGame() {
    humanScoreNumber = 0;
    aiScoreNumber = 0;
    humanScore.textContent = 0;
    aiScore.textContent = 0;
    result.textContent = '';
    if (humanChoiceSpan) humanChoiceSpan.textContent = 'Você: ';
    if (iaChoiceSpan) iaChoiceSpan.textContent = 'IA: ';
    popup.classList.add('popup-hidden');
}