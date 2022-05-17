// Scrivere un programma che, letti da input un intero positivo N ed una sequenza di interi positivi
// terminata dal tappo -1, verifichi se esistono almeno N elementi consecutivi della sequenza minori
// o uguali ad N.

// Se N fosse pari a 5 e la sequenza fosse 1 3 5 3 1 2 9 -1 il programma dovrebbe stampare OK
// Se N fosse pari a 3 e la sequenza fosse 1 0 5 2 2 3 -1 il programma dovrebbe stampare OK
// Se N fosse pari a 4 e la sequenza fosse 1 0 4 8 6 3 -1 il programma dovrebbe stampare NO

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

function verify(arr, x) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] <= x) count++;
      else count = 0;
    }
  }

  if (count >= x) return true;
  else return false;
}

let x = +prompt("Inserisci un intero positivo N");
let arr = getArr(-1, "Inserisci un numero nella sequenza");
verify(arr, x) ? console.log('OK') : console.log('NO');
