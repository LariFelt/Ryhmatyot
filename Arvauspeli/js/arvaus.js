let wins = 0;
let losses = 0;
let attempts = 3;
let minNumber = 1;
let maxNumber = 10;

const messageElement = document.getElementById("message");
const winsElement = document.getElementById("wins");
const lossesElement = document.getElementById("losses");
const numberButtonsElement = document.getElementById("number-buttons");

let targetNumber;

function startGame() {
    attempts = 3;
    minNumber = 1;
    maxNumber = 10;
    targetNumber = Math.floor(Math.random() * 10) + 1;
    messageElement.textContent = "Arvaa luku välillä 1 - 10. Sinulla on 3 yritystä.";
    numberButtonsElement.innerHTML = "";
    for (let i = minNumber; i <= maxNumber; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.addEventListener("click", () => guessNumber(i));
        numberButtonsElement.appendChild(button);
    }
}

function hideNumbers(min, max) {
    const buttons = document.querySelectorAll("#number-buttons button");
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        const buttonNumber = parseInt(button.textContent);
        if (buttonNumber < min || buttonNumber > max) {
            button.style.display = "none";
        } else {
            button.style.display = "block";
        }
    }
}

function guessNumber(userGuess) {
    if (attempts > 0) {
        attempts--;

        if (userGuess === targetNumber) {
            messageElement.textContent = "Onneksi olkoon! Arvasit oikein.";
            wins++;
            winsElement.textContent = wins;
            endGame();
        } else {
            if (userGuess < targetNumber) {
                messageElement.textContent = "Luku on suurempi.";
                minNumber = userGuess + 1;
                hideNumbers(minNumber, maxNumber);
            } else {
                messageElement.textContent = "Luku on pienempi.";
                maxNumber = userGuess - 1;
                hideNumbers(minNumber, maxNumber);
            }

            if (attempts === 0) {
                messageElement.textContent = `Valitettavasti arvausyritykset loppuivat. Oikea luku oli ${targetNumber}.`;
                losses++;
                lossesElement.textContent = losses;
                endGame();
            }
        }
    }
}

function endGame() {
    numberButtonsElement.innerHTML = '<button onclick="startGame()">Pelaa uudelleen</button>';
}

startGame();