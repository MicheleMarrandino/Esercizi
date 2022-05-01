//Calcolatrice tra due valori.

//--------------Dichiaro Funzioni-------------------
function add(a:number,b:number):number{
    return a+b;
}

function substract(a:number,b:number):number{
    return a-b;
}

function multiply(a:number,b:number):number{
    return a*b;
}

function divide(a:number,b:number):number{
    return a/b;
}

function calculate(a:number,b:number):number[]{
    let x: number[] = [];
    
    x.push(add(a,b), substract(a,b), multiply(a,b), divide(a,b));

    return x;
}

//----------------Input Utente----------------------
let numOne:number = parseFloat(prompt("Inserisci un numero:"));
let numTwo:number = parseFloat(prompt("Inseriscine un altro:"));

//---------------------Main-------------------------

let values:number[] = calculate(numOne,numTwo);
let operation:string[] = ["Addizione", "Sottrazione", "Moltiplicazione", "Divisione"];

for (const value in values) {
    console.log(operation[value] + ": " + values[value]);
}