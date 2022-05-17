// Scrivere  un  programma  che,  letta  da  input  una  sequenza  di  interi  terminata  da  -1,  controlli  che  siano
// tutte cifre decimali (ovvero numeri compresi tra 0 e 9), calcoli il numero che si ottiene giustapponendo le
// cifre,  e  verifichi  se  il  numero  ottenuto  è  divisibile  per  3.

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
  const len = arr.length;

  if (len <= 0) return arr;

  for (let i = 0; i < len; i++) {
    if (arr[i] < 0 || arr[i] > 9) {
      console.log("ERRORE");
      return arr;
    }
  }

  let n = arr.join("");
  console.log(n);
  n % 3 === 0 ? console.log("SI") : console.log("NO");
}

let arr = getArr(-1, "Inserisci un numero tra 0 e 9.");
verify(arr);
