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

// UTENTE:
// 1: inserisce (via prompt) un num (min 1 max 100)

// CALCOLI:
// 1: match if the number insert by user match the one generated random
// if yes, match end. else match continue.
// 2: when match end, communicate the points

// CONTROLLI:
// 1: i 16 numeri vietati/mina, devono essere tutti diversi, non possono esserci doppioni.
// 2: l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.




//  Il computer deve generare 16 numeri casuali da 1 a 100.
numrandom (1, 100)

function numrandom (min, max){
  return Math.floor(Math.random*(max-min))
}
