// Prese in input due parole
// Creare una terza parola, composta dalla prima e dall'inverso della seconda.

function input(msg: string) {
  let x = prompt(msg);
  if (typeof x === "string") return x;
  else return null;
}

function inverse(x: string) {
  let y: string[] = [];
  for (let i = x.length-1; i >= 0; i--) {
    y.push(x[i]);
  }
  return y;
}

function join(x: string[]) {
  const len = x.length;
  let y: string = x[0];
  for (let i = 1; i < len; i++) {
    y += x[i];
  }
  return y;
}

let x = input(
  "Inserisci due parole e le unirò seguendo le condizioni!\nInserisci la prima parola:"
);
const len = x.length;
let y = input(
  "Inserisci due parole e le unirò seguendo le condizioni!\nInserisci la seconda parola (massimo " +
    len +
    " lettere)"
);

if (x.length !== y.length) console.log("Input invalido.");
else
  console.log(
    "Prima parola: " +
      x +
      "\n" +
      "Seconda parola: " +
      y +
      "\n" +
      "Unione (seconda inversa): " +
      x +
      join(inverse(y))
  );
