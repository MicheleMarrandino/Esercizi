//Scrivere un programma che calcoli il massimo in un vettore di dimensione 10
//(Valori HARDCODED)

//--------------Dichiaro Funzioni-------------------
function getMax(A: number[], MAX: number): number{
    let x: number = nums[0];
    let i: number = 0;
    
    while(i < MAX-1){
        if(A[i+1] > x){
            x = A[i+1];
            i++;
        } else i++;
    }
    return x;
}

//--------------------Input-------------------------
let nums: number[] = [0,1,2,3,5,8,2,4,0,2];
let MAX: number = 10;

//---------------------Main-------------------------
console.log('Il numero maggiore è: ' + getMax(nums, MAX));

