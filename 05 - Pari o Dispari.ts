//Pari o Dispari?

//--------------Dichiaro Funzioni-------------------
function isEven(num:number): string{
    return (num%2==0) ? "Pari" : "Dispari";
}

//----------------Input Utente----------------------
let num:number = parseInt(prompt("Inserisci un numero e ti dirò se è pari o dispari!"));

//---------------------Main-------------------------
console.log("Il numero è: " + isEven(num) + ".");

