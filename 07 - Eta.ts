//Età dall'anno di nascita.

//--------------Dichiaro Funzioni-------------------
function getAge(year:number):number{
   let a = new Date().getFullYear();

   return Math.abs((a-year)-1);
}

//----------------Input Utente----------------------
let year:number = parseInt(prompt("Inserisci il tuo anno di nascita!"));

//---------------------Main-------------------------
console.log("Hai " + getAge(year) + " anni!.");
