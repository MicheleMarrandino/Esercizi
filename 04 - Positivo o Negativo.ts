//Positivo o negativo?

//--------------Dichiaro Funzioni-------------------
function isPositive(num:number): string{
    return (num >=0) ? "Positivo" : "Negativo";
}

//----------------Input Utente----------------------
let num:number = parseFloat(prompt("Inserisci un numero e ti dirò se è positivo o negativo!"));

//---------------------Main-------------------------
console.log("Il numero è: " + isPositive(num) + ".");

