// Variabler i global Scope (näste)

// Array: med spelets alla ord, för att underlätta, följer ett tema
const wordList = ["apa", "delfin", "hund", "mus", "katt", "elefant", "fågel"];

// Sträng: ett av orden valt av en slumpgenerator från arrayen ovan
let selectedWord = null;

// Number: håller antalet gissningar som gjorts
let guesses = 0;

// Sträng: sökväg till bild som kommer visas (och ändras) fel svar. t.ex. `/images/h1.png`
let hangmanImg;

// DOM-nod: Ger meddelande när spelet är över
let msgHolderEl;

// DOM-nod: knappen som du startar spelet med
let startGameBtnEl;

// Array av DOM-noder: Knapparna för bokstäverna
let letterButtonEls;

// Array av DOM-noder: Rutorna där bokstäverna ska stå
let letterBoxEls;

// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner
// Funktion som slumpar fram ett ord
// Funktion som tar fram bokstävernas rutor, antal rutor beror på vilket ord slumptas fram
// Funktion som körs när du trycker på bokstäverna och gissar bokstav

function win() {} // Funktion som ropas vid vinst

function lose() {} // Funktion som ropas vid förlust

console.log(wordList[3]);

// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på
