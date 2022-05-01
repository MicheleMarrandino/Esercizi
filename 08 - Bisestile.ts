//Anno bisestile?

//--------------Dichiaro Funzioni-------------------
function isLeap(a:number):string{
    let x = (a%400 == 0 || a%4 == 0 && a%100 != 0) ? true : false;
    return x ? " E' Bisestile." : " NON è Bisestile.";
}

//----------------Input Utente----------------------
let a:number = parseInt(prompt("Inserisci anno e ti dirò se è bisestile!"));

//---------------------Main-------------------------
console.log(a + isLeap(a));

