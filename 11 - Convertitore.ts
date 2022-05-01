//Conversione


//--------------Dichiaro Funzioni-------------------
function convertG(value:number, to:string):number{
    if(to == 'C' || to == 'F')
    switch (to) {

        case 'C':
        return ((value - 32) * 5/9); 
            
        case 'F':
        return ((value * 9/5) + 32);

    }
}

function convertD(value:number, to:string):number{
    if(to == 'KM' || to == 'MI')
    switch (to) {
        
        case 'KM':
        return (value * 1.609); 
            
        case 'MI':
        return (value / 1.609);

    }
}

function converter(choice:string, value:number, to:string):number{

    if(choice == '1' || choice == '2')
    switch (choice) {

        case '1':
        return convertG(value, to);

        case '2':
        return convertD(value, to);
        
    }
}

function choose(word:string):string{
    switch (word) {

        case 'KM':
        return 'MI';
        
        case 'MI':
        return 'KM';
        
        case 'C':
        return 'F';

        case 'F':
        return 'C';
        
    }
}

//----------------Input Utente----------------------
let choice:string = prompt("Gradi    (1)\tcentigradi (C)\tfahrenheit (F)\nDistanza (2)\tkilometri (KM)\tmiglia (MI)\n\nChe tipo di misurazione vuoi convertire ? (1 o 2)");
let num:number = parseFloat(prompt("Inserisci i seguenti valori:\nMisurazione originale:"));
let gd:string = prompt("Unita` di misura originale");

//---------------------Main-------------------------
if((choice!= null || choice!= undefined) && (num!= null || num!= undefined) && (gd!= null || gd!= undefined)){
gd = gd.toUpperCase();
console.log("Il valore convertito e`: " + Math.round(converter(choice, num, choose(gd))) + " " + choose(gd));
} else console.log("Input errati.")