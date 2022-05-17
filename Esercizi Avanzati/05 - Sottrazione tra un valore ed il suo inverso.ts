// Scrivere un programma che, letto da input un intero positivo N stampi il valore N-Ninv, dove Ninv è l'intero
// che si ottiene da N invertendo le sue cifre. Il programma dovrà stampare la sottrazione tra N ed il suo inverso.

function verify(n) {
  n = Array.from(n.toString());
  let z = Number(n.join(""));
  let x = [];

  for (let i = n.length - 1; i >= 0; i--) {
    x.push(n[i]);
  }

  let y = Number(x.join(""));
  return z - y;
}

let n = +prompt("Inserisci un numero:");
console.log(verify(n));
