//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

var evenOdd = prompt("scegli pari o dispari");
var numUtente = Number(prompt("inserisci un numero da 1 a 5"));

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function numPcRandom (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
  }