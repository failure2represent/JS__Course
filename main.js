let inputNumber = +prompt("Enter your number:", 1);
let isPrime = true;

if(inputNumber <= 1){
    isPrime = false
}
else{
    for(let i = 2; i < inputNumber; i++){
        if(inputNumber % i === 0){
            isPrime = false;
            break;
        }
    }
}
console.log(isPrime ? "NUMBER IS PRIME" : "NUMBER IS NOT PRIME")