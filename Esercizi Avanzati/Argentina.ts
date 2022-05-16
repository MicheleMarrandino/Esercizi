//INPUT CONTROL
let flag= false;

//UTILITY FUNCTIONS USING SORT() METHOD.
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

//UTILITY FUNCTIONS *W/OUT* USING BUILT-IN METHOD.
function swap(arr, i, j){
  let temp = arr[i];
  arr[i]= arr[j];
  arr[j] = temp;
  return arr;
}

function sorter(arr){
  for(let i=0; i<9; i++){
    for(let j=0; j<9; j++){
      if(arr[j].attack < arr[j+1].attack){
        swap(arr, j, j+1);
     } else if(arr[j].attack === arr[j+1].attack && arr[j].defense > arr[j+1].defense){
      swap(arr, j, j+1);
     } else if (arr[j].defense === arr[j+1].defense && arr[j].name > arr[j+1].name){
       swap(arr, j, j+1);
     }
    }
  }
  return arr;
}

function finalSort(arr){
  const len = arr.length;
  for(let i = 0; i<len -1; i++){
    for(let j = 0; j<len -1; j++){
      if(arr[j].name > arr[j+1].name)
      swap(arr, j, j+1);
    }
  }
  return arr;
}

function getTeams(arr){
  let attaccanti = arr.splice(0,5);
  let difensori = arr;
  attaccanti = finalSort(attaccanti);
  difensori = finalSort(difensori);
  return [attaccanti, difensori];
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
//--------------------------OPTIMIZED BUILT-IN WAY-------------------------------------
if(!flag){
      let x = sort(players);
      console.log(printNames(x[0], "Attaccanti"));
      console.log(printNames(x[1], "Difensori"));
  }

//--------------------------W/OUT BUILT-IN SORT------------------------------------------
// if(!flag){
//   players = sorter(players);
//   let x = getTeams(players);
//   console.log(printNames(x[0], "Attaccanti"));
//   console.log(printNames(x[1], "Difensori"));
// }