//Maiuscolo e Minuscolo

//--------------Dichiaro Funzioni-------------------
function maiuscolo(word:string):string{
    if(word == word.toLowerCase())
    return word.toUpperCase();
    else return "invalida: Non hai inserito una parola interamente in minuscolo"
}

function minuscolo(word:string):string{
    if(word == word.toUpperCase())
    return word.toLowerCase();
    else return "invalida: Non hai inserito una parola interamente in MAIUSCOLO"
}
//----------------Input Utente----------------------
let wordOne:string = prompt("Inserisci una parola in minuscolo");
let wordTwo:string = prompt("Inserisci una parola in maiuscolo");
//---------------------Main-------------------------
console.log("La tua parola " + wordOne + " in MAIUSCOLO è " + maiuscolo(wordOne) + ".");
console.log("La tua parola " + wordTwo + " in minuscolo è " + minuscolo(wordTwo) + ".");