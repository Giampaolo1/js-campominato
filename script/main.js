// COMPUTER
// 1: gen 16 num random (min 1 max 100)
// E (CONTROLLO1) i 16 numeri vietati/mina, devono essere tutti diversi, non possono esserci doppioni.

// UTENTE:
// 1: inserisce (via prompt) un num (min 1 max 100)
// E (CONTROLLO2) l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.

// CALCOLI:
// 1: match if the number insert by user match the one generated random
// if yes, match end. else match continue.
// 2: when match end, communicate the points

// CONTROLLI:
// 1: i 16 numeri vietati/mina, devono essere tutti diversi, non possono esserci doppioni.
// 2: l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.
// I controlli sono molto simili, una volta lo fa il comp e una volta l utente, quindi una funzione è l ideale, che richiamo al momento del bisogno

//  Il computer deve generare 16 numeri casuali da 1 a 100.
// dove li conservo? Array.

function fxStart() {
var numeri = [];

// FOR E' IL CICLO SBAGLIATO xke' non riempira' 16 caselle, ma contera' anche i num gia presenti (doppioni)
// l array deve essere lungo 16:

while (numeri.length < 16) {
  var numRand = getRandomInt(1, 101);
  // CONTROLLO 1 - controlla se il num random è già inserito
  var found = inArray(numRand, numeri);
  if (found == false) {
  numeri.push(numRand);
  }
}
numeri.sort(); // Me li metto in ordine

console.log("I numeri BOMBA sono", numeri);
document.getElementById("numBomb").innerHTML = "I Numeri Bomba sono: " + numeri;

// Creare la FUNZIONE IN ARRAY vista nel recap:

function inArray (value, array){
  var found = false;
  var i = 0;
  while (found == false && i < array.length) {
    if (array[i] == value) {
      found = true;
    }
    i++
  }
  return found;
}

// FUNZIONE X NUM RANDOM
function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}

// -------------------------------------------------------------

var minaPresa = false;
var punteggio = 0;
var numeriUtente = [];

while (minaPresa == false && punteggio < 84) {
  var promptUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
     numeriUtente.push(promptUtente);

  if (inArray(promptUtente, numeri) == true) {
    minaPresa = true;
    console.log("Hai preso una mina");
    alert("Hai preso una mina! GAME OVER");
  }
  else {
    punteggio++;
    console.log("Mina scansata");
    alert("Mina Scansata!");
  }

  // IDEA: Controllo
  // if (inArray(promptUtente, numeriUtente) === true) {
  //   alert("Hai già inserito questo numero!");
  // }

}

console.log("I numeri UTENTE sono", numeriUtente);
document.getElementById("numUte").innerHTML = "I Numeri Utente sono: " + numeriUtente;

console.log("Punteggio", punteggio);
document.getElementById("punteggio").innerHTML = "Punteggio: " + punteggio;

}











// Quante volte l utente dovrà inserire un numero ?
// Fino a che non prende una mina quindi Creati una variabile minaPresa
// E le dai inizialmente valore false

// Quindi apriti un while che ingloberà tutto
// E gli dai come condizione che while (minaPresa == false && punteggio<84 )

// Chiaramente devi creare anche una var punteggio che inizialmente è = 0

// Ti apri il tuo while che ingloba tutto e poi inizi a mettere il prompt
// Per far ripetere le domande del numero

// IDEA:

// Poi inizi a porre le condizioni
// Ad esempio una condizione sarà sicuramente
// Se che il numero scelto dell' utente
// Sarà uguale ai numeri presenti nelle bombe
// Il giocatore sarà morto
// Quindi la tua variabile minaPresa assumerà valore true
// E uscirai dal ciclo
// Altrimenti se non sarà uguale
// Mina presa rimane sempre a false
// E punteggio aumenta di uno
// Se raggiungesse 84
// Usciremmo cmq dal ciclo
// Per il momento inizia a scrivere questo
// Poi rifletti su come puoi introdurre la condizione che il giocatore non può inserire 2 volte lo stesso valore

// // UTENTE:
// // 1: inserisce (via prompt) un num (min 1 max 100)
// var promptUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
//
// // Li conservo in un array vuoto:
// var numeriUtente = [];
//
// // E (CONTROLLO2) l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.
// while (numeriUtente !== numeri) {
//   var found2 = inArray(promptUtente, numeriUtente);
//   if (found2 == false) {
//   numeriUtente.push(promptUtente);
//   }
// }
// console.log("I numeri UTENTE sono", numeriUtente);
