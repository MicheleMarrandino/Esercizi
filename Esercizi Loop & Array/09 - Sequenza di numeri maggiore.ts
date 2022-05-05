// Prendere in input una sequenza di numeri terminata da -1 e stampare a schermo la lunghezza della sequenza ripetuta piu` lunga.
// Una sequenza e` la successione di numeri uguali e consecutiva senza interruzioni di almeno lunghezza 2
// Se esistono piu` sequenze con lo stesso valore, stampare la prima di esse

function input(): number[] {
  let A = [];
  let flag = true;
  while (flag) {
    let y = prompt(`Inserisci un numero:\n-1 per terminare.`);
    if (
      Number(y) >= 0 &&
      y !== null &&
      y !== undefined &&
      y.trim().length !== 0 &&
      !isNaN(Number(y))
    )
      A.push(Number(y));
    else flag = false;
  }
  return A;
}

function consecutiveNumbers(A): number[] {
  let count = 0;
  let prevCount = -1;
  let x;

  for (let i = 1; i < A.length; i++) {
    if (A[i] == A[i-1]) {
      count++;
    } else count = 0;

    if (prevCount < count) {
      prevCount = count;
      x = A[i];
    }
  }
  return [prevCount, x];
}

let A: number[] = input();
let res: number[] = consecutiveNumbers(A);

if (res[0] >= 1)
  console.log(
    `La prima sequenza piu' lunga è ${res[1]}, presente ${res[0]+1} volte.`
  );
else console.log("Non ho trovato una sequenza piu lunga.");
