// Si scriva un programma che, letta da input una lista di interi di 10 elementi, ed un numero
// intero X,  verifichi  stampi  la  stringa  OK  se  NESSUN  elemento  della lista  è  divisibile  per  X,
// e  la  stringa  NO altrimenti.

function populateArr(len) {
  let arr = [];
  let _num: number;
  for (let i = 0; i < len; i++) {
    _num = +prompt("Inserisci " + (i + 1) + "º numero della sequenza.");
    arr.push(_num);
  }
  return arr;
}

function verify(arr, n) {
  let flag = true;
  for (let i = 0; i < 9; i++) {
    if (arr[i] % n === 0) {
      flag = false;
    }
  }
  return flag;
}

let x = +prompt('Inserisci un numero intero X');
let arr = populateArr(9);
console.log(verify(arr, x) ? "OK" : "NO");
