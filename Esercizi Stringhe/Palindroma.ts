// Verificare se una parola e` palindroma .
// Una parola si dice palindroma se letta al contrario ha lo stesso valore.

function input(msg: string){
  let x = prompt(msg);
  if(typeof x === 'string')
  return x.toLowerCase();
  else return null;
}

function verify(x: string){
  const len = x.length - 1;
  let flag = false;
  for (let i = 0; i < len / 2; i++) {
    if (x[i] === x[len - i]) flag = true;
    else flag = false;
  }
  return flag;
}


let x = input('Inserisci una parola e verificherò se è palindroma!');
if(verify(x)){
  console.log("La parola E' palindroma.")
} else console.log("La parola NON è palindroma.")
