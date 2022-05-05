// Scrivere un programma che popoli due array A , B di dimensione N identica ed arbitraria ( min 5 , Max 10 ) i cui valori sono presi in input.
// Successivamente creare un terzo array C di dimensione N dove nelle posizioni pari verranno inseriti i valori dell'array A e in quelle dispari
// i valori dell'array B

function input(x: number, max?: number){
  let A = [];
  let flag = true;
  switch (x) {
    case 1:
    while(flag){
    let y = prompt(`Inserisci un numero:\n-1 per terminare.`);
    if(Number(y) >= 0 && y !== null && y!== undefined && y.trim().length !== 0 && !isNaN(Number(y)))
    A.push(Number(y));
    else flag = false;
    }
    
    case 2:
    for(let i=0; i<max; i++){
    let z = prompt(`Inserisci ${max} numeri:`);
    if(Number(z) >= 0 && z !== null && z!== undefined && z.trim().length !== 0 && !isNaN(Number(z)))
    A.push(Number(z));
    }
  }
  return A;
}

function alternate(A, B): number[]{
  const max = A.length;
  let C = [];
  for (let i = 0; i < max; i++){
    if(i%2==0)
    C[i]=A[i];
    else C[i]=B[i];
  }
  return C;
}

let A:number[] = input(1);
let max: number = A.length;
let B: number[] = input(2, max)
let C: number[] = alternate(A,B);
console.log(C);
