// Scrivere un programma restituisca i primi 30 numeri primi.
// Un numero si dice primo se e` divisibile SOLO e soltanto per se stesso e per 1 .

//--------------Dichiaro Funzioni-------------------
function input(): number | null{
    let x = prompt(`Inserisci un numero massimo di numeri primi da calcolare:\n-1 se ne vuoi uno random.`);
    if(Number(x) > 0 && x !== null && x!== undefined && x.trim().length !== 0 && !isNaN(Number(x)))
    return Number(x);
    else return null;
}

function isPrime(x: number): boolean{

    for(let i = x -1 ; i >= 2; i--){
        if(x%i === 0)
        return false;
    }
    
    return true;
}

function generatePrime(): number[]{
    let flag = false;
    let x: number;
    
    while(!flag){
        x = Math.floor(Math.random() * 100) + 2;
        if(isPrime(x))
        flag = true;
    }

    return [x];
}

function getList(MAX:number): number[]{
    let A = [];
    let i = 2;

    while(A.length < MAX){
        if(isPrime(i))
        A.push(i);
        i++;
    }

    return A;
}

//--------------------Input-------------------------
let MAX: number = input();
let A: number[] = [];

if(MAX)
A = getList(MAX);
else A = generatePrime();

//---------------------Main-------------------------
if(MAX !== null){
console.log(`Ecco ${MAX} numeri primi:`);
A.forEach(el => console.log(el));
}
else console.log("Ecco un numero primo: " + A[0]);
