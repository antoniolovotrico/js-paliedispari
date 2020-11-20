//Chiedere all’utente di inserire una parola



//funzione per capire se la parola inserita è palindroma

/*           PRIMA SOLUZIONE FUNZIONANTE MA DA MODIFICARE
function palindroma (esaminaParola) {
    for (var i = 0 ; i < (Math.floor(esaminaParola.length / 2)); i++) {
        if (esaminaParola[i] !== esaminaParola[esaminaParola.length - 1 - i]) {
            return "non è palindroma";
        } else {
            return "è palindroma"
        }

    }
}

var risultato = palindroma (parolaUtente);
console.log(risultato);
*/


/*              SECONDA SOLUZIONE NON FUNZIONANTE
function palindroma (esaminaParola , ParolaInvertita) {
    for (var i = 0; i < esaminaParola.length; i++) {
        
    } for (var i = ParolaInvertita.length; i > 0; i--) {

    }
    if (esaminaParola[i] == ParolaInvertita[i]) {
        return "è palindroma";
    } else {
        return "non è palindroma"
    }
}

var risultato = palindroma (parolaUtente , splitParola);
console.log(risultato);
*/
var parolaUtente = prompt("inserisci una parola");



            // TERZA SOLUZIONE  FUNZIONANTE
function palindroma (esaminaParola) {
    var splitParola = esaminaParola.split("");
    //console.log(splitParola);
    var revParola = "";
    for (var i = splitParola.length - 1; i >= 0; i--) {
      // console.log(splitParola[i]);
       revParola += splitParola[i];     
    }
    //console.log(esaminaParola);
    //console.log(revParola);
    if (esaminaParola == revParola) {
        return "è palindroma";
    } else {
        return "non è palindroma";
    }
}  
    

var risultato = palindroma (parolaUtente);
console.log(risultato);