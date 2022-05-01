//Concatena due parole, e poi invertile.

//--------------Dichiaro Funzioni-------------------
function concatenate(a:string,b:string):string{
    return(a+b);
}

//----------------Input Utente----------------------
let wordOne:string = prompt("Inserisci prima parola");
let wordTwo:string = prompt("Inserisci seconda parola");

//---------------------Main-------------------------
console.log("La prima frase è " + concatenate(wordOne,wordTwo));
console.log("La seconda frase è " + concatenate(wordTwo,wordOne));