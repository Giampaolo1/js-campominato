// DESCRIZIONE:
//  Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato” o
// raggiunge il numero massimo possibile di numeri consentiti.

// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.

// Ci sono 2 controlli che van fatti già di base per dar senso all’ex:
// i 16 numeri vietati/mina, devono essere tutti diversi, non possono esserci doppioni;
// l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.


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

var numeri = [];

// FOR E' IL CICLO SBAGLIATO xke' non riempira' 16 caselle, ma contera' anche i num gia presenti (doppioni)

// for (var i = 0; i < 16; i++) {
//   var numRand = getRandomInt(1, 101);
//   // CONTROLLO 1 - controlla se il num random è già inserito
//   var found = inArray(numRand, numeri);
//     if (found == false) {
//       numeri.push(numRand);
//     }
// }


// l array deve essere lungo 16
while (numeri.length < 16) {
  var numRand = getRandomInt(1, 101);
  // CONTROLLO 1 - controlla se il num random è già inserito
  var found = inArray(numRand, numeri);
  if (found == false) {
  numeri.push(numRand);
  }
}
console.log(found);
console.log("lunghezza array", numeri.length);
console.log(numeri);

// Creare la FUNZIONE IN ARRAY vista nel recap:

function inArray (value, array){
  var found = false;

  var i = 0
  while (found == false && i < array.length) {
    if array[i] == value {
      found = true;
    }
    i++
  }
  return found;
}


// MDN FUNZIONE X NUM RANDOM
function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}




// numrandom (1, 100)
//
// function numrandom (min, max){
//   return Math.floor(Math.random*(max-min))
// }
