let randomNumber;

const guessForm = document.getElementById('guessForm');
const guessInput = document.getElementById('guessInput');
const messageArea = document.getElementById('messageArea');
const resetBtn = document.getElementById('resetBtn');
const submitBtn = document.getElementById('submitBtn');
const gameCard = document.querySelector('.game-card');

function initGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    messageArea.innerHTML = '';
    guessInput.value = '';
    guessInput.disabled = false;
    submitBtn.disabled = false;
    guessInput.focus();
}

function displayMessage(message, type, emoji = '') {
    messageArea.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show">
            <strong>${emoji}</strong> ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
}

function checkGuess(guess) {
    if (guess < 1 || guess > 10) {
        alert('Please enter a number between 1 and 10!');
        shakeCard();
        return;
    }

    if (guess === randomNumber) {
        displayMessage(
            `🎉 <strong>CONGRATULATIONS!</strong> You guessed the number ${randomNumber} correctly.`,
            'success',
            '🎊'
        );
        pulseCard();
        guessInput.disabled = true;
        submitBtn.disabled = true;
    } 
    else if (guess > randomNumber) {
        alert('Wrong guess! Try a smaller number.');
        shakeCard();
    } 
    else {
        alert('Wrong guess! Try a larger number.');
        shakeCard();
    }

    guessInput.value = '';
    guessInput.focus();
}

function shakeCard() {
    gameCard.classList.add('shake');
    setTimeout(() => gameCard.classList.remove('shake'), 500);
}

function pulseCard() {
    gameCard.classList.add('pulse');
    setTimeout(() => gameCard.classList.remove('pulse'), 500);
}

guessForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const guess = parseInt(guessInput.value);
    if (isNaN(guess)) {
        alert('Please enter a valid number!');
        return;
    }
    checkGuess(guess);
});

resetBtn.addEventListener('click', initGame);

guessInput.addEventListener('keypress', function (e) {
    if (['e', 'E', '+', '-', '.'].includes(e.key)) {
        e.preventDefault();
    }
});

window.addEventListener('load', initGame);
