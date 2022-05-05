// Scrivere un programma che popoli due array A , B di dimensione N,M arbitraria ( min 5 , Max 10 ) i cui valori sono presi in input.
// Successivamente creare un terzo array C di dimensione N+M dove nelle posizioni da 0 a N inserite i valori A e nelle posizioni da N+1
// a M inserite i valori di B al contrario

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

function fillInverse(A, B): number[]{
    let C: number[] = A;
    const max: number = B.length -1 ;
    for(let i = max; i >= 0; i--){
        C.push(B[i]);
    }

    return C;
}


let A: number[] = input(1);
alert("Segue un'altra serie di numeri:");
let B: number[] = input(1);
let C: number[] = fillInverse(A,B);

console.log(C);
