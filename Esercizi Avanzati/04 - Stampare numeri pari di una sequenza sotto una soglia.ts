// Scrivere un programma che, letti da input in quest'ordine un intero X, un intero N e una sequenza di N
// interi, stampi tutti i numeri pari strettamente minori di X presenti all'interno della sequenza.

// Se X fosse 10, N fosse 7 e la sequenza di numeri fosse 12 32 15 2 4 9 18,  il programma dovrebbe
// stampare 24 poiché 2 e 4 sono gli unici numeri pari nella sequenza minori di 10.

function populateArr(len) {
  let arr = [];
  let _num: number;
  for (let i = 0; i < len; i++) {
    _num = +prompt("Inserisci " + (i + 1) + "º numero della sequenza.");
    arr.push(_num);
  }
  return arr;
}

function verify(arr, n, x) {
  let print = "";

  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 0 && arr[i] < x) print += arr[i].toString();
  }

  console.log(print);
}

let x = +prompt("Inserisci il valore X:");
let n = +prompt("Inserisci la grandezza della sequenza:");
let arr = populateArr(n);

verify(arr, n, x);
