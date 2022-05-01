//Calcola il numero maggiore tra i tre

//--------------Dichiaro Funzioni-------------------
function whoseMax(A: number[]):number{
    let x: number = A[0];

    for (const i in A) {
        if(A[i]>x)
        x = A[i];
    }

    return x;
}

//----------------Input Utente----------------------
let a:number = parseFloat(prompt("Inserisci un numero"));
let b:number = parseFloat(prompt("Inserisci un'altro numero"));
let c:number = parseFloat(prompt("Inseriscine ancora un' altro"));

//---------------------Main-------------------------
let array: number[] = [a,b,c];

console.log("Il numero piu' grande è: " + whoseMax(array));