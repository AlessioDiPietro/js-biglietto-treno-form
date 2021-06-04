// Creiamo un layout come da screenshot, ma personalizzabile.
// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza (numero casuale tra 1 e 9 incluso)
// Prezzo calcolato in base all'esercizio visto in precedenza
// Categoria selezionata dall'utente
// Al click su "Genera" appare la schermata con le caratteristiche del biglietto.
// Al click su "Annulla" dobbiamo ripulire il form e far sparire la sezione che calcola il prezzo del biglietto.
// Bonus: aggiungete qualche controllo sui dati di input!


var genetatore = document.getElementById;("generatore");

generatore.addEventListener("click", function(){

    document.getElementById("dettagli").className = "restart-det";

    // nome passeggero
    var nomePass = document.getElementById("nomepass").value;
    document.getElementById("ris-nome").innerHTML = nomePass.charAt(0).toUpperCase() + nomePass.substring(1).toLowerCase();;

    // selezione fascia eta
    var eta = document.getElementById("eta").value;
    document.getElementById("ris-offerta").innerHTML = "Sconto" + "<br>" + eta;


    // km percorrenza
    var disKm = document.getElementById("numero-km").value;

    // bonus1
    if (disKm <= 0) {
        alert ("inserisci un numero superiore a  0 PERFAVORE")
    }


    // prezzo
    var prezzo = disKm * 0.21;
    
    // sconto
    if (eta == "Minorenne") {
        prezzo -= prezzo * 0.2;
        
    }else if ( eta == "Over65") {
        prezzo -= prezzo * 0.4
    }
    document.getElementById("ris-costo").innerHTML = prezzo.toFixed(2) + " €";

    // numero carrozza
    var numCarrozza = Math.floor(Math.random() * 10 + 1);
    document.getElementById("ris-carrozza").innerHTML = "numero " + numCarrozza;

    // numero treno
    var numTreno = Math.floor(Math.random() *  (100000 - 90000) + 90000);
    document.getElementById("ris-codice").innerHTML = "codice " + numTreno;
});




var reset = document.getElementById("reset");

reset.addEventListener("click", function(){

    // dettagli
    document.getElementById("dettagli").className = "reset-det";


    document.getElementById("nomepass").value = "";
    
    document.getElementById("numero-km").value = "";

    document.getElementById("eta").value = "Minorenne";
})