//Chiedere all’utente di inserire una parola

var parolaUtente = prompt("inserisci una parola");

var splitParola = parolaUtente.split("");
console.log(splitParola);

//funzione per capire se la parola inserita è palindroma

/*
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


/*
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


function palindroma (esaminaParola) {
    for (var i = 0; i < esaminaParola.length; i++) {
        
    } for (var j = esaminaParola.length; j > 0; j--) {

    }
    if (esaminaParola[i] == esaminaParola[j]) {
        return "è palindroma";
    } else {
        return "non è palindroma"
    }
}

var risultato = palindroma (splitParola);
console.log(risultato);