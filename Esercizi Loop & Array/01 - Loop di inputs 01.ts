//Scrivere un programma che prenda in input una sequenza di numeri,
//e quando l'utente inserisce -1 termini restituendo
//il valore piu` grande inserito

//--------------Dichiaro Funzioni-------------------
function input(): number{
    let x = prompt(`Inserisci un numero:\n-1 per terminare.`);
    if(x !== null && x!== undefined && x.trim().length !== 0 && !isNaN(Number(x)))
    return Number(x);
    else return -1;
}

function getMax(A: number[]): number{
    let x: number = A[0];
    let i: number = 0;
    let MAX = A.length;
    
    while(i < MAX-1){
        if(A[i+1] > x){
            x = A[i+1];
            i++;
        } else i++;
    }
    return x;
}

//--------------Dichiaro Variabili------------------
let A: number[] = [];
let num: number;
let end: boolean = true;

//---------------------Main-------------------------
while(end){
    num = input();
    if(num !== -1)
    A.push(num);
    else end = false;
}

if(A[0])
console.log('Il numero maggiore è: ' + getMax(A));
else console.log('Inserisci un numero!');