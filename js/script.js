function playGame(userChoice) {
    const options = ['Камінь', 'Ножиці', 'Папір'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    let result = '';
    if (userChoice === computerChoice) {
        result = `Нічия! Ви обрали ${userChoice}, а комп'ютер обрав ${computerChoice}.`;
    } else if (
        (userChoice === 'Камінь' && computerChoice === 'Ножиці') ||
        (userChoice === 'Ножиці' && computerChoice === 'Папір') ||
        (userChoice === 'Папір' && computerChoice === 'Камінь')
    ) {
        result = `Ви виграли! Ви обрали ${userChoice}, а комп'ютер обрав ${computerChoice}.`;
    } else {
        result = `Ви програли! Ви обрали ${userChoice}, а комп'ютер обрав ${computerChoice}.`;
    }

    document.getElementById('result').textContent = result;
}
