//Calcolare area e perimetro di un rettangolo 

//--------------Dichiaro Funzioni-------------------
function getArea(base:number, altezza:number):number{
    return base*altezza;
}

function getPerimeter(base:number, altezza:number):number{
    return (2*base)+(2*altezza);
}

//----------------Input Utente----------------------
let b:number = parseFloat(prompt("Inserisci base:"));
let h:number = parseFloat(prompt("Inserisci altezza:"));

//---------------------Main-------------------------
console.log("L'area del rettangolo da te costruito è: " + getArea(b,h) + " cm2.");
console.log("\nIl perimetro del rettangolo da te costruito è: " + getPerimeter(b,h) + " cm.");