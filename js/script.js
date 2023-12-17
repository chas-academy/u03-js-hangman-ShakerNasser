// Variabler i global Scope
const wordList = ["APA", "PINGVIN", "STRUTS", "BAGGE", "KATT", "GORILLA", "PANDA"];
// Spara det slumpmässigt genererade ordet
let selectedWord = null;
// Antal felgissningar gjorda
let wrongGuesses = 0;
// Antal felgissningar kvar innan förlust
let wrongGuessesLeft = 6;
// Antal korrekta bokstäver
let correctLetters = 0;
// DOM-nod: hänga mannen-bild
const hangmanImgEl = document.querySelector("#hangman");
// DOM-nod: där meddelanden visas
const msgHolderEl = document.querySelector("#message");
// DOM-nod: knapp för att starta spelet
const startGameBtnEl = document.querySelector("#startGameBtn");
// DOM-nod: meddelandeelement
const messageEl = document.querySelector("#message");
// DOM-nod: meddelandeelement
const letterButtons = document.querySelectorAll("#letterButtons button");
// DOM-nodLista: bokstavsknappar
let letterBoxEls = document.querySelectorAll("#letterBoxes li");
// DOM-nodLista: bokstavslådor
const letterBoxContainerEl = document.querySelector("#letterBoxes ul");
// Lägg till en event-lyssnare för knappklick
startGameBtnEl.addEventListener("click", startGame);

// Lägg till en eventlistener på varje knapp
letterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    handleLetterGuess(button);
  });
});

// Funktion för att få ett slumpmässigt ord från wordList
// Användning av keyboards som genererar random selected ord
function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
}

// Funktion för att kolla om bokstaven finns i ordet
// Funktionen loopar genom och retunerar det bokstaven i selected word.
function isLetterInWord(letter) {
  const letterIndices = [];
  for (let i = 0; i < selectedWord.length; i++) {
    if (letter === selectedWord[i].toLowerCase()) {
      letterIndices.push(i);
    }
  }
  return letterIndices;
}

// Funktion för att hantera gissning av en bokstav
function handleLetterGuess(clickedLetter) {
  const guessedLetter = clickedLetter.value.toLowerCase();
  const isValidLetter = wordList.includes(guessedLetter);

  if (!isValidLetter) {
    // Om bokstaven inte finns i wordList, inaktivera knappen
    clickedLetter.disabled = true;
  }

  doGuess(guessedLetter);
}

// Funktion för att starta ett nytt spel
function startGame() {
  selectedWord = getRandomWord();
  wrongGuesses = 0;
  wrongGuessesLeft = 6;
  correctLetters = 0;
  msgHolderEl.textContent = "";

  // Återaktivera alla knappar
  setButtonsDisabledStatus(false);

  // Återställ hangman-bilden till startbilden
  hangmanImgEl.src = "images/h0.png";

  letterBoxContainerEl.innerHTML = "";
  createLetterBoxes(selectedWord.length);
}

// Funktion för att kolla om användaren har gissat alla bokstäver korrekt
function hasUserGuessedAllLetters() {
  return correctLetters === selectedWord.length;
}

// Funktion som är kallad när spelaren vinner
function win() {
  setButtonsDisabledStatus(true);
  remainingLetters();
  showGameResultMessage("Grattis! Du är mästare på Hangman! 🎉🏆 Rätt ord var: " + selectedWord);
}

// Funktion som är kallad när spelaren förlorar
function lose() {
  // Inaktivera bokstavsknappar och visa återstående bokstäver
  setButtonsDisabledStatus(true);
  remainingLetters();

}
// Funktion för att uppdatera letter boxes med rätt gissad bokstav
function updateLetterBoxes(guessedLetter) {
  for (let i = 0; i < selectedWord.length; i++) {
    if (selectedWord[i].toLowerCase() === guessedLetter) {
      letterBoxEls[i].querySelector("input").value = guessedLetter;
    }
  }
  correctLetters++;
}

// Funktion för att uppdatera hangman-bilden
function updateHangmanImage() {
  const imagePath = `images/h${wrongGuesses}.png`;
  hangmanImgEl.src = imagePath;
}

// Funktion för att visa meddelande om spelets resultat
function showGameResultMessage(message) {
  messageEl.textContent = message;

  letterButtons.forEach(function (button) {
    button.disabled = true;
  });
}

// Funktion för att fylla i letter boxes med rätt bokstav
function fillLetterBox(guessedLetterPosition, guessedLetter) {
  for (let i = 0; i < guessedLetterPosition.length; i++) {
    const position = guessedLetterPosition[i];
    const box = letterBoxEls[position];
    box.firstElementChild.value = guessedLetter;
  }
}

// Funktion för att göra gissningen
function doGuess(letter) {
  const letterPosition = isLetterInWord(letter);

  if (letterPosition.length > 0) {
    fillLetterBox(letterPosition, letter);
    correctLetters += letterPosition.length;

    if (hasUserGuessedAllLetters()) {
      win();
    }
  } else {
    wrongGuesses++;

    if (wrongGuessesLeft > 0) {
      wrongGuessesLeft--;
    }

    updateHangmanImage();

    if (wrongGuessesLeft === 0) {
      const imgSrcName = `images/h${wrongGuesses}.png`;
      hangmanImgEl.setAttribute("src", imgSrcName);
      showGameResultMessage("Zorry :( du har förlorat. Rätt ord var: " + selectedWord);
    } else {
      messageEl.textContent = `Du har ${wrongGuessesLeft} felgissningar kvar`;

      if (wrongGuessesLeft === 0) {
        lose();
      }
    }
  }
}

// Funktion för att skapa letter boxes
function createLetterBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newLiEl = document.createElement("LI");
    newLiEl.innerHTML = '<input type="text" disabled value="">';
    letterBoxContainerEl.appendChild(newLiEl);
  }
  letterBoxEls = document.querySelectorAll("#letterBoxes li");
}

// Funktion för att sätta knapparnas inaktiveringsstatus
function setButtonsDisabledStatus(status) {
  letterButtons.forEach(function (button) {
    button.disabled = status;
  });
}

// Funktion för att visa återstående bokstäver
function remainingLetters() {
  for (let i = 0; i < selectedWord.length; i++) {
    if (letterBoxEls[i].querySelector("input").value === "") {
      letterBoxEls[i].querySelector("input").value = selectedWord[i];
    }
  }
}