//https://www.fon.hum.uva.nl/praat/manual/lexicographic_permutation_order.html

function nextCode(code: string[]) {
  const len = code.length;
  let max: number;
  
  for (let k = len; k >= 0; k--) {
    if (k === 0) max = 0;
    if (code[k] > code[k - 1]) {
      max = k;
      break;
    }
  }

  for (let j = len - 1; j >= 0; j--) {
    if (code[j] > code[max - 1]) {
      swap(code, j, max - 1);
      break;
    }
  }

  let s = max;
  let e = len - 1;

  while (s < e) {
    swap(code, s, e);
    s++;
    e--;
  }
  return code;
}

function pal(code: string, A: string[]) {
  let B = code.split("");
  const len = B.length - 1;

  for (let i = len; i >= 0; i--) {
    if (B[i] !== A[len - i]) return false;
  }
  return true;
}

function swap(A: string[], i: number, j: number) {
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

//manca controllo input
let code = prompt("inserisci codice:");
let A = code.split("");
A = nextCode(A);
if (!pal(code, A)) {
  console.log("Hai inserito: " + code + ".\nIl successore è: " + A.join(""));
} else {
  console.log("Nessun successore.");
}


