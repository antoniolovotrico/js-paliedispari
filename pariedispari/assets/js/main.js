//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

var userBid = prompt("scegli pari o dispari");
var numUtente = Number(prompt("inserisci un numero da 1 a 5"));

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function numPcRandom (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
    
}

var pcNum = numPcRandom(1 ,5);
console.log(pcNum);
//Sommiamo i due numeri

var sum = pcNum + numUtente;
console.log(sum);

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function evenOdd (somma , bid) {
  if (somma % 2 == 0 && bid == "pari") {
    return "Hai Vinto, la somma dei numeri è pari";
  } else if (somma % 2 !== 0 && bid == "dispari") {
    return "Hai Vinto, la somma dei numeri è dispari";
  } else {
    return "hai perso la somma dei numeri restituisce un risultato differente dalla tua puntata";
  }

}

//Dichiariamo chi ha vinto.
var winLose = evenOdd(sum , userBid);
console.log(winLose);
