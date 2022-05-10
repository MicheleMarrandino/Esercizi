let a = prompt("Inserisci codice.");
let y = a;

if (a.length % 2 == 0) {
  let x = a.split("");
  let MAX = x.length / 2;
  let b = x.splice(0, MAX);
  let z = b.join("") + x.join("");

  if (z === y) {
    console.log("Nessun successore.");
  } else console.log(z);
} else console.log("Nessun successore.");
