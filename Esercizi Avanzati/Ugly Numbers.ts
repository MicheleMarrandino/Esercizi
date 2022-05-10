function isUgly(n: number): boolean {
  while (n !== 1) {
    if (n % 2 === 0) n = n / 2;
    else if (n % 3 === 0) n = n / 3;
    else if (n % 5 === 0) n = n / 5;
    else return false;
  }
  return true;
}

let count = 0;
let which = 10;
let i = 1;

while (count < which) {
  if (isUgly(i)) {
    count++;
    if (count === which) {
      console.log("The " + which + "'th ugly number is " + i);
    }
  }

  i++;
}
