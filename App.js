const randomNumber = Math.floor(Math.random() * 100) + 1;
let lives = 5;

const input = document.getElementById("guessInput");
const button = document.getElementById("submitGuess");
const feedback = document.getElementById("feedback");
const livesDisplay = document.getElementById("lives");

button.addEventListener("click", () => {
  const guess = Number(input.value);

  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = "Enter a number between 1 and 100.";
    return;
  }

  if (guess === randomNumber) {
    feedback.textContent = "🎉 You guessed it!";
    feedback.style.color = "lime";
    input.disabled = true;
    button.disabled = true;
  } else {
    lives--;
    feedback.textContent = guess < randomNumber ? "Too low!" : "Too high!";
    feedback.style.color = "orange";
    livesDisplay.textContent = `Lives: ${lives}`;

    if (lives === 0) {
      feedback.textContent = `💀 Game over! The number was ${randomNumber}.`;
      feedback.style.color = "red";
      input.disabled = true;
      button.disabled = true;
    }
  }

  input.value = "";
});
