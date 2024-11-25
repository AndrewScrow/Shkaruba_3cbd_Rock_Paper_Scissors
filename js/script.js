let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const options = ['Камінь', 'Ножиці', 'Папір'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    let result = '';
    const resultDiv = document.getElementById('result');

    if (userChoice === computerChoice) {
        result = `Нічия! Ви обрали ${userChoice}, а комп'ютер обрав ${computerChoice}.`;
        resultDiv.className = 'tie';
    } else if (
        (userChoice === 'Камінь' && computerChoice === 'Ножиці') ||
        (userChoice === 'Ножиці' && computerChoice === 'Папір') ||
        (userChoice === 'Папір' && computerChoice === 'Камінь')
    ) {
        result = `Ви виграли! Ви обрали ${userChoice}, а комп'ютер обрав ${computerChoice}.`;
        resultDiv.className = 'win';
        userScore++;
    } else {
        result = `Ви програли! Ви обрали ${userChoice}, а комп'ютер обрав ${computerChoice}.`;
        resultDiv.className = 'lose';
        computerScore++;
    }

    resultDiv.textContent = result;
    updateScores();
}

function updateScores() {
    document.getElementById('userScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    updateScores();
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Гра перезапущена. Почніть спочатку!';
    resultDiv.className = '';
}
