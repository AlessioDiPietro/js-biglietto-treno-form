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


    // nome passeggero
    var nomePass = document.getElementById("nomepass").value;
    console.log(nomePass);
    document.getElementById("ris-nome").innerHTML = nomePass;

    // selezione fascia eta
    var eta = document.getElementById("eta").value;
    console.log(eta);
    document.getElementById("ris-offerta").innerHTML = "Sconto" + "<br>" + eta;


    // km percorrenza
    var disKm = document.getElementById("numero-km").value;
    console.log(disKm);


    // prezzo
    var prezzo = disKm * 0.21;
    
    // sconto
    if (eta == "Minorenne") {
        prezzo -= prezzo * 0.2;
        
    }else if ( eta == "Over65") {
        prezzo -= prezzo * 0.4
    }
    
    document.getElementById("ris-costo").innerHTML = prezzo.toFixed(2) + " €";
    console.log("prezzo: ", prezzo.toFixed(2), "€")
  
});

var reset = document.getElementById("reset");

reset.addEventListener("click", function(){
    var nomePass = "";
})