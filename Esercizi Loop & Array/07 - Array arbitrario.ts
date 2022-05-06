// Scrivere un programma che popoli due array A , B di dimensione N identica ed arbitraria ( min 5 , Max 10 ) i cui valori sono presi in input.
// Successivamente creare un terzo array C di dimensione N dove nelle posizioni pari verranno inseriti i valori dell'array A e in quelle dispari
// i valori dell'array B

function input(min: number, max: number){
  let Y: number[] = [];
  let count: number = 0;
  let x: string = '';
  while(count < max){
    x = String(prompt(`Inserisci un numero.\nLa serie richiede un minimo di ${min} valori e un massimo di ${max}.\nInserisci -1 per terminare.`));
    if(Number(x) >= 0 && x !== null && x!== undefined && x.trim().length !== 0 && !isNaN(Number(x)) && x!== '-1'){
      Y.push(Number(x));
      count++;
    } else break;
  };   
  if(count < min || count > max){
  console.log('Dimensione non ammessa.');
  return null;
  }
  return Y;
};

function alternate(A: number[], B: number[]): number[]{
  const max = A.length;
  let C = [];
  for (let i = 0; i < max; i++){ 
    if(i%2==0)
    C[i]=A[i];
    else C[i]=B[i];
  }
  return C;
}

let A:number[] = input(5,10);
if(A){
alert('I valori ' + A + ' sono stati registrati.\nInserisci i valori del prossimo array.')
let B: number[] = input(A.length, A.length);
if(B){
console.log('Array 1: ' + A);
console.log('Array 2: ' + B);
let C: number[] = alternate(A,B);
console.log('Array risultante: ' + C);
} else console.log('Input invalidi.') }
