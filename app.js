console.log("hello world")
//multiplication table
let multiTable = (int) => {
    for(let i = 1; i <= 10; i++){
        console.log(i +' * '+ int + ' = ' + i * int);
    }
}


//decimal to binary
let DB = (num) => {
    let remender = [];
    let int = num;
    let divided;
    while(int > 0){
        remender.push(int%2);
        divided = int / 2;
        int = Math.trunc(divided)
    }
    
    return remender.reverse()
}
console.log(DB(6))


function pythagorean(arr){
        let isPaytha = false;
        for(let i = 0; i < arr.length; i++){
            const square1 = arr[i] * arr[i];
            const square2 = arr[i + 1] * arr[i + 1];
            const square3 = arr[i + 2] * arr[i + 2];
            if(square1 + square2 == square3){
                isPaytha = true;
            }
        }
        console.log(isPaytha);
}
pythagorean([3, 4, 5]);

//wilson primes
function wilsonPrimes(int){
    let isWilsonPrime = false;
    let isPrime = int;
    for(let i = 2; i < int; i++){
        if(int % i == 0){
            isPrime = null;
        }
    }

    let factorial = 1;
    for(let i = 1; i < isPrime; i++){
        factorial = factorial * i;
    }
    console.log(isPrime);
    console.log(factorial)
    const pSquare = isPrime * isPrime;
    const factPlusOne = factorial + 1;
    if((factPlusOne / pSquare) % 1 == 0){
        isWilsonPrime = true;
    }
    return isWilsonPrime;
}
console.log(wilsonPrimes(13));

//hyperFactorial
function hyperFact(int){
    let product = 1;
    for(let i = 1; i <= int; i++){
        product = (product * i ** i) % 1000000007;
    }
    
    return product
}
console.log(hyperFact(3))