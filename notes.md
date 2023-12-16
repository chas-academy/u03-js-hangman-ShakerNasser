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

## Svårt att komma igång?
Det viktigaste är att greppa alla saker som behöver ske för att kunna spela spelet.

Innan du tittar på förslagen nedan, försök spela hänga gubbe lite - antingen själv eller med någon kamrat och så försöker ni lista alla aktiviteter som behöver ske.

Börja sedan titta i `index.html` och `script.js` för att få grepp om vilka saker som behöver kopplas ihop. Det vill säga, vilka element vilka vi ska kunna lyssna på specifika events för.

I `scripts.js` ligger där förslag på olika variabler och förslag på vilka funktioner som behövs för att kunna lösa uppgiften. Allt i `script.js` är endast förslag och är inte tvunget att användas. Men om du känner dig osäker är det en god idé att försöka bibehålla det mesta däri.

Om du fortfarande inte vet hur du ska börja så försök igen låtsas som att allt redan fungerar när du öppnar upp `index.html` i webbläsaren. Om det hjälper kan du börja använda `console.log` i funktionsanrop eller dylikt för att se att saker och ting fungerar.

Skulle det nu fortfarande kännas helt omöjligt kan du kika på förslagen nedan, notera dock att dessa inte kommer ge dig en fullständig lösning på uppgiften utan nu är det upp till dig att tillämpa _grunderna_ i JavaScript för att lösa uppgiften.

### Förslag på steg att prova

- Definiera lite ord som spelaren ska gissa på i arrayen `wordList`.
- Använd `document.querySelector()` för att hämta knappen "Starta Spelet" i DOM, lagra den i `startGameBtnEl` variabeln.
- Skapa en event-lyssnare för knappen (`.addEventListener('click', callbackFn)`).
-
  2. Skapa en funktion, kalla den för `createLetterBoxes()`
    - Inuti denna funktion:
      - Använd `document.querySelector()` för att hämta `#letterBoxes > ul`, lagra det i variablen `letterBoxEls`.
      - Baserat på längden i `selectedWord` (loopa/iterera):
        - skapa ett nytt `<li>`-element innehåller en `<input>`
      - Använd `.appendChild()` för att lägga till det skapade elementet inuti `letterBoxEls`
---

Det du måste göra nu är att på egen hand få rätt på följande funktionalitet:

- Lyssna på klick på alla bokstavsknappar
- Skriv en callback som hanterar när spelaren trycker på alla bokstavsknappar
  - I den callbacken behöver det ske lite saker:
    1. Kolla värdet på bokstavsknappen som spelaren tryckte på och jämför det med alla bokstäverna i `selectedWord`. _Observera att bokstäver ska kunna förekomma flera gånger_.
    2. _Nedan beskrivs förslag på beslutskedjan_:
        - Om bokstaven finns och användaren inte har gissat alla bokstäverna rätt:
          1. Deaktivera bokstavsknappen som spelaren tryckte på
          2. Leta upp i vilken position (index) i ordet som bokstaven förekommer
          3. Sätt attributet `value` på elementet i indexet som motsvarar positionen från steg 2 inuti i arrayen `letterBoxEls[positionOfGuessedLetter].value = ...`

      - Om bokstaven finns och användaren har gissat _alla_ bokstäverna rätt:
        - Visa meddleande i `msgHolderEl` om att användaren har vunnit och låt dem börja om spelet (här får man _inte_ använda `location.reload()` utan det ska gå att programmatiskt starta om spelet igen)

      b) Om bokstaven inte finns och användaren inte har gissat 6 gånger:
        1. Inkrementera `guesses`
        2. Sätt `hangmanImg` till att vara en sträng som består av:
          `images/h{guesses}.png`
        3. Använd `document.querySelector` för att hitta `<img>`-taggen och sätt dess `src` egenskap att vara lika med `hangmanImg`.

      - Om bokstaven _inte_ finns och användaren har gissat 6 gånger:
         - Sätt `msgHolderEl` visa meddelande om att användaren har förlorat och låt dem börja om spelet (här får man _inte_ använda `location.reload()` utan det ska gå att programmatiskt starta om spelet igen)

---

## För dig som strävar efter högre betyg

1. Börja om från scratch med egen styling och HTML samt JS.
2. I så stor utsträckning som möjligt visa på att du förstår begreppen med globala/lokala variabler, scopes, closures, events, iteration, konditionsblock, inbyggda metoder m.m. etc.
3. *Bonus*: implementera stöd för tangenbordsgissning, eller kanske rentav gissa med mikrofonen eller någon annan tokig lösning!