// Scrivere un programma prenda una sequenza di numeri, terminata -1.
// Restituisca il numero con il piu` alto numero di occorrenze.

//--------------Dichiaro Funzioni-------------------
function input(): number{
    let x = prompt(`Inserisci un numero:\n-1 per terminare.`);
    if( x !== null && x!== undefined && x.trim().length !== 0 && !isNaN(Number(x)))
    return Number(x);
    return -1;
}

function whichNumber(A: number[]): number[]{
    let c = 0;
    let d: number = 0;
    let f: number;
    
    for(let i = 0; i < A.length; i++){
        c=0;
        for(let j = i+1; j < A.length; j++){
            if(A[i] == A[j]){
                c++;
            }

            if(d < c){
                d = c;
                f = A[i];
            }
        }
    }

    if(f == undefined)
    return [undefined];
    else return [f, d];
}

//--------------------Input-------------------------
let A: number[] = [];
let num: number;
let end: boolean = true;

while(end){
    num = input();
    if(num !== -1)
    A.push(num);
    else end = false;
}

//---------------------Main-------------------------
let x = whichNumber(A);
if(x[0] !== undefined)
console.log(`Nell'Array ${A} Il numero ${x[0]} è presente ${x[1]+1} volte.`);
else console.log("Non ho trovato occorrenze nell'array " + A);