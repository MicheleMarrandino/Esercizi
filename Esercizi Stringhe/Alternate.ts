// Prese in input due parole
// Creare una terza parola, composta dalle lettere della prima e della seconda in maniera alternata.
function input(msg: string) {
  let x = prompt(msg);
  if (typeof x === "string") return x;
  else return null;
}

function construct(x: string, y: string) {
  let z: string[] = [];
  let i = -1;
  while (z.length < x.length) {
    i++;
    z.push(x[i]);
    i++;
    z.push(y[i]);
  }
  return z;
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
  "Inserisci due parole e le unirò in modo alternato!\nInserisci la prima parola:"
);
let y = input(
  "Inserisci due parole e le unirò in modo alternato!\nInserisci la seconda parola:"
);

if (x.length !== y.length) console.log("Input invalido.");
else console.log('Prima parola: ' + x + '\n' + 'Seconda parola: ' + y + '\n' + 'Unione (alternata): ' + join(construct(x,y)));
