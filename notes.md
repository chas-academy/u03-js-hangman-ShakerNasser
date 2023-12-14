Mina egna noteringar till U03

Börja med att lära sig mer om:

* Funktioner
* Array
* If och Else if med return sats
* Queryselector
* AddEventListener - removeEventListener
* AppenChild

``` function getNewWord() {
      return wordArr[Math.floor(Math.random() * wordArr.length)];
    }
```

 <ul>
                    <li><input type="text" disabled value="C" /></li>
                    <li><input type="text" disabled value="H" /></li>
                    <li><input type="text" disabled value="A" /></li>
                    <li><input type="text" disabled value="S" /></li>
                    <li><input type="text" disabled value="&nbsp;"  /></li>
                    <li><input type="text" disabled value="&nbsp;"  /></li>
                </ul>


// Skapa en callback-funktion som ska köras när knappen klickas

/**


// funktion för att hämta bild
function hangmanImage() {
  const imgSrcName = `images/h${wrongGuesses}.png`;
  hangmanImgEl.setAttribute("src", imgSrcName);
}

// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner

// Funktion som slumpar fram ett ord
function generateRandomWord() {
  let slumpmassigtOrdIndex = Math.floor(Math.random() * wordList.length);
  return wordList[slumpmassigtOrdIndex];
}

// Funktion som tar fram bokstävernas rutor, antal rutor beror på vilket ord slumptas fram
function createLetterBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newLiEl = document.createElement("LI");
    newLiEl.innerHTML = '<input type="text" disabled value="&nbsp;"/>';
    letterBoxContainerEl.appendChild(newLiEl);
  }
  letterBoxEls = document.querySelectorAll("#letterBoxes li");
}

// Funktion som körs när du trycker på bokstäverna och gissar bokstav
// Exempelanvändning:

function win() {} // Funktion som ropas vid vinst

function lose() {} // Funktion som ropas vid förlust

// Lyssnare för bokstavsknappar
letterButtonEls = document
  .getElementById("letterButtons")
  .getElementsByTagName("button");
for (var i = 0; i < letterButtonEls.length; i++) {
  letterButtonEls[i].addEventListener("click", function () {
    handleLetterClick(this.value);
  });
}
// function to change the hangman image
function hangmanImage() {
  const imgSrcName = `images/h${wrongGuesses}.png`;
  hangmanImgEl.setAttribute("src", imgSrcName);
}

// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på
*/





// Globala variabler

const wordList;      // Array: med spelets alla ord
let selectedWord;    // Sträng: ett av orden valt av en slumpgenerator från arrayen ovan

let guesses = 0;     // Number: håller antalet gissningar som gjorts
let hangmanImg;      // Sträng: sökväg till bild som kommer visas (och ändras) fel svar. t.ex. `/images/h1.png`

let msgHolderEl;     // DOM-nod: Ger meddelande när spelet är över
let startGameBtnEl;  // DOM-nod: knappen som du startar spelet med
let letterButtonEls; // Array av DOM-noder: Knapparna för bokstäverna
let letterBoxEls;    // Array av DOM-noder: Rutorna där bokstäverna ska stå

// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner
// Funktion som slumpar fram ett ord
// Funktion som tar fram bokstävernas rutor, antal rutor beror på vilket ord slumptas fram
// Funktion som körs när du trycker på bokstäverna och gissar bokstav
// Funktion som ropas vid vinst eller förlust, gör olika saker beroende tillståndet
// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på



--------------


// function createLetterBoxes(selectedWord) {
//   // Hitta det index där det valda ordet finns i wordList
//   const wordIndex = wordList.indexOf(selectedWord);

//   // Kontrollera om ordet finns i wordList
//   if (wordIndex !== -1) {
//     // Loopa igenom varje bokstav i det valda ordet
//     for (let i = 0; i < selectedWord.length; i++) {
//       // Skapa ett nytt li-element
//       let liElement = document.createElement('li');

//       // Skapa ett input-element
//       let inputElement = document.createElement('input');

//       // Lägg till input-elementet i li-elementet
//       liElement.appendChild(inputElement);

//       // Lägg till li-elementet i ul-elementet
//       letterBoxEls.appendChild(liElement);
//     }
//   }
// }

/**


// Skapa en callback-funktion som ska köras när knappen klickas

// funktion för att hämta bild
function hangmanImage() {
  const imgSrcName = `images/h${wrongGuesses}.png`;
  hangmanImgEl.setAttribute("src", imgSrcName);
}

// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner

// Funktion som slumpar fram ett ord
function generateRandomWord() {
  let slumpmassigtOrdIndex = Math.floor(Math.random() * wordList.length);
  return wordList[slumpmassigtOrdIndex];
}

// Funktion som tar fram bokstävernas rutor, antal rutor beror på vilket ord slumptas fram
function createLetterBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newLiEl = document.createElement("LI");
    newLiEl.innerHTML = '<input type="text" disabled value="&nbsp;"/>';
    letterBoxContainerEl.appendChild(newLiEl);
  }
  letterBoxEls = document.querySelectorAll("#letterBoxes li");
}

// Funktion som körs när du trycker på bokstäverna och gissar bokstav
// Exempelanvändning:

function win() {} // Funktion som ropas vid vinst

function lose() {} // Funktion som ropas vid förlust

// Lyssnare för bokstavsknappar
letterButtonEls = document
  .getElementById("letterButtons")
  .getElementsByTagName("button");
for (var i = 0; i < letterButtonEls.length; i++) {
  letterButtonEls[i].addEventListener("click", function () {
    handleLetterClick(this.value);
  });
}
// function to change the hangman image
function hangmanImage() {
  const imgSrcName = `images/h${wrongGuesses}.png`;
  hangmanImgEl.setAttribute("src", imgSrcName);
}

// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på
*/

// // Funktion för att skapa letter boxes baserat på längden av det slumpmässiga ordet
// function createLetterBoxes(amount) {
//   for (let i = 0; i < amount; i++) {
//     const newLiEl = document.createElement("LI");
//     const newInputEl = document.createElement("INPUT");
//     newInputEl.setAttribute("type", "text");
//     newInputEl.setAttribute("disabled", true);
//     newInputEl.value = "";
//     newLiEl.appendChild(newInputEl);
//     letterBoxContainerEl.appendChild(newLiEl);
//   }
//   letterBoxEls = document.querySelectorAll("#letterBoxes li");
// }