// Scrivere  un  programma  che,  letta  da  input  una  sequenza  di  interi  terminata  da  un  tappo  pari  a  0
// (ZERO), stampi SI se la sequenza ha un andamento strettamente crescente fino ad un certo punto e un
// andamento strettamente decrescente dal quel punto in poi; stampi NO altrimenti.

function getArr(endCap, driverString) {
  let _num;
  let i = 0;
  let arr = [];
  while (_num !== endCap) {
    _num = +prompt(driverString + "\nSei al " + (i + 1) + " numero.");
    if (_num === endCap) return arr;
    else arr.push(_num);
    i++;
  }
  return arr;
}

function verify(arr) {
  if (arr.length <= 0) return;

  let isAscending = false;
  let isDescending = false;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      if (!isDescending) isAscending = true;
      else return false;
    }
    if (arr[i] > arr[i + 1]) {
      if (isAscending) isDescending = true;
      else return false;
    }
    if (arr[i] === arr[i + 1]) {
      return false;
    }
  }

  return isAscending && isDescending;
}

let arr = getArr(0, "Inserisci un numero nella sequenza:");
console.log(verify(arr) ? "SI" : "NO");
