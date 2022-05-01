//Scrivere un programma che calcoli il massimo in un vettore di dimensione 10
//(Valori da INPUT)

//--------------Dichiaro Funzioni-------------------
function getMax(A: number[], MAX: number): number{
    let x: number = A[0];
    let i: number = 0;
    
    while(i < MAX-1){
        if(A[i+1] > x){
            x = A[i+1];
            i++;
        } else i++;
    }
    return x;
}

function input(choice): number{
    let x = prompt(`Inserisci 10 numeri:\n${choice} su 10`);
    return x.trim().length !== 0 ? Number(x) : null;
}

//--------------------Input-------------------------
let A: number[] = [];
let MAX: number = 10;
let num: number;

for(let i=0; i < MAX; i++){
    num = input(i+1);
    if(num !== null && num!== undefined && !isNaN(Number(num)))
    A.push(num);
    else i = MAX;
}

//---------------------Main-------------------------
if(A[0])
console.log('Il numero maggiore è: ' + getMax(A, MAX));
else console.log('Inserisci numero!');

