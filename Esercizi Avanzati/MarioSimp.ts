function countJumps(wallsHeight: string[]): void {
  const len = wallsHeight.length;

  let lowJumps = 0;
  let highJumps = 0;

  for (let i = 0; i < len - 1; i++) {
    if (wallsHeight[i] < wallsHeight[i + 1]) highJumps++;
    else if (wallsHeight[i] > wallsHeight[i + 1]) lowJumps++;
  }

  console.log(`High Jumps: ${highJumps}, Low Jumps: ${lowJumps}`);
}

let wallsHeight = prompt(
  "Inserisci tutte altezze dei muri divise da uno spazio."
);

if (wallsHeight && wallsHeight.trim().length > 1) {
  let walls: string[];
  walls = wallsHeight.split(" ");
  countJumps(walls);
} else console.log("Invalid input.");
