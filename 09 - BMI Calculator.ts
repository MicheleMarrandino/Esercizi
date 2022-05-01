//Calcolatore di BMI in Typescript.


//--------------Dichiaro Interfacce Typescript------------
interface Values {
    [key: string]: {
        x: number;
        y: number;
    };
}

interface Table {
    bmi?: Values;
    ossa?: {
        uomo:Values;
        donna:Values;
    };
}
//--------------------------------------------------------


//--------------------Dichiaro costanti-------------------
const MAX:number = 100;
const table: Table = {
    bmi: {
    'Sottopeso severo': {x: 0, y: 16.4},
    'Sottopeso': {x: 16.5, y: 18.4},
    'Normale': {x: 18.5, y: 24.9},
    'Sovrappeso': {x: 25, y: 30},
    'Obesità primo grado': {x: 30.1, y: 34.9},
    'Obesità secondo grado': {x: 35, y:40},
    'Obesità terzo grado': {x: 40.1, y: MAX}
    },
    ossa: {
        uomo: {
        'Esile': {x: 0, y: 17},
        'Normale': {x: 17.1, y: 18},
        'Robusta': {x: 18.1, y: MAX}
        },
        donna: {
        'Esile': {x: 0, y: 15},
        'Normale': {x: 15.1, y: 17},
        'Robusta': {x: 17.1, y: MAX}
        }
    }
}
const { bmi, ossa } = table;
//--------------------------------------------------------


//----------------------Funzioni--------------------------

//Questa funzione cerca un valore in una tavola di riferimento e ritorna una categoria.
//Il valore non può superare MAX.
function getResult(value:number, lookupTable: Table):string{  
    if(value<MAX)
    for (let i in lookupTable) {
        if(value >= lookupTable[i].x && value <= lookupTable[i].y)
        return i;
    } else return 'Input invalido.'
}

//Questa funzione converte un valore in KG o MT.
function convert(value:number, to:string):number{
    if(to == 'MT' || to == 'KG')
    switch (to) {
        case 'MT':
        return (value/3.2808);

        case 'KG':
        return value/2.2046;    
    } else return -1
}


//Questa funzione calcola il BMI dati i valori in MT e KG.
function calculateBMI(w:number, h:number):number{
    return parseFloat((w/(h*h)).toFixed(1));
}
//--------------------------------------------------------


//--------------------Codice Main-------------------------

//Codice inteso per la compilazione nel Playground Typescript Online.
alert("Ciao! Per conoscere il tuo Bmi e Costituzione ho bisogno di farti alcune domande!");
let nome:string = prompt("Inserisci qui il tuo nome:");
let sesso:string = prompt("Ciao " + nome + "!\nSei un uomo o una donna?").toLowerCase();
let pesoLbs:number = parseFloat(prompt("Inserisci il tuo peso in Lbs:"));
let altezzaFt:number = parseFloat(prompt("Pesi " + pesoLbs + " lbs.\nInserisci la tua altezza in Ft:"));
let polsoCm:number = parseFloat(prompt("Bene " + nome + "!\nOra Ho solo bisogno di conoscere quanto misura la circonferenza del tuo polso in Cm:"));

let bodyMassIndex = calculateBMI(convert(pesoLbs, 'KG'),convert(altezzaFt, 'MT')) * 1;

if((sesso == 'uomo' || sesso == 'donna')  && !isNaN(bodyMassIndex))
console.log(nome + ", Il tuo BMI è di: " + bodyMassIndex + " kg/m2.\nSei classificato come: " + getResult(bodyMassIndex, bmi) + ".\nLa tua costituzione è " + getResult(polsoCm, ossa[sesso.toLowerCase()]) + ".");
else console.log("Gli input inseriti non sono validi.");
//--------------------------------------------------------

//Dev-log: Sono le 4:20 ed ho un serio problema di insonnia.