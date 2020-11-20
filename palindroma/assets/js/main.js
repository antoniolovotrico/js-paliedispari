//Chiedere all’utente di inserire una parola

var parolaUtente = prompt("inserisci una parola");

//funzione per capire se la parola inserita è palindroma

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