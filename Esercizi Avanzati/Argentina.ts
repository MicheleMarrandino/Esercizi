let flag= false;

function sort(x){
  x.sort((a, b) => {
    if (a["attack"] === b["attack"]) {
      if (a["defense"] > b["defense"]) return 1;
      else return -1;
    }
    if(a["defense"] === b["defese"]){
        return (a["name"] < b["name"]) ? -1 : 1;
    }
    return a["attack"] > b["attack"] ? -1 : 1;
  });

  let attaccanti = [...x]
    .splice(0, 5)
    .sort((a, b) => (a["name"] < b["name"] ? -1 : 1));
  let difensori = [...x]
    .splice(5, 10)
    .sort((a, b) => (a["name"] < b["name"] ? -1 : 1));
  return [attaccanti, difensori];
}

function printNames(a, field){
  let len = a.length;
  let x = a[0].name + ", ";
  for (let i = 1; i < len; i++) {
    x += a[i].name;
    if (i === len - 1) x += ".";
    else x += ", ";
  }
  return field + ": " + x;
}

//----------------------------------------Hardcoded Input://-------------------------------------------------
let players = [{
    name: "sameezahur",
    attack: 20,
    defense: 21,
  },

  {
    name: "sohelh",
    attack: 18,
    defense: 9,
  },
  {
    name: "jaan",
    attack: 17,
    defense: 86,
  },
  {
    name: "sidky",
    attack: 16,
    defense: 36,
  },
  {
    name: "shamim",
    attack: 16,
    defense: 18,
  },
  {
    name: "shadowcoder",
    attack: 12,
    defense: 9,
  },
  {
    name: "muntasir",
    attack: 13,
    defense: 4,
  },
  {
    name: "brokenarrow",
    attack: 16,
    defense: 16,
  },
  {
    name: "emotionalblind",
    attack: 16,
    defense: 12,
  },
  {
    name: "tanaeem",
    attack: 20,
    defense: 97,
  },];
//------------------------------------------------------------------------------------------
//If you would like to choose the input, uncomment this and comment the hardcoded one: 
// class Player {

//     name: string;
//     attack: number;
//     defense: number;

//     constructor(name: string, attack: number, defense: number){
//         this.name = name;
//         this.attack = attack;
//         this.defense = defense;
//     }

// } 

// let players = [];
// let _name: string | null;
// let _attack: number | null;
// let _defense: number | null;
// let _player : Player;
// let attackers: string[] = [];
// let defenders: string[] = [];

// let i = 0;
// while(i<10){
//     _name = null;
//     _name = prompt("Inserisci il nome del giocatore! " + (i+1) + "/10");
//     if(!_name){
//     console.log('Input invalido.');
//     i = 10
//     flag = true;
//     players = [];
//     }
//     else{
//     _attack = Number(prompt("Inserisci quanto forte è in attacco " + _name + '.'));
//     _defense = Number(prompt("Inserisci quanto forte è in difesa " + _name + '.'));
//     _player = new Player(_name, _attack, _defense);
//     players.push(_player);
//     i++;
//     }
// }
//------------------------------------------------------------------------------------------


if(!flag){
    let x = sort(players);
    console.log(printNames(x[0], "Attaccanti"));
    console.log(printNames(x[1], "Difensori"));
}