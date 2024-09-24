function luckyNumber(){
    let retryCount = 0;
    let userInput
    let inputs =[];
    
    while(retryCount < 10){
        userInput = +prompt("Enter your number again")
        if(userInput < 100){
            retryCount++
        }
        else if (isNaN(userInput)){
            userInput = +prompt("Enter your number again")
            continue;
        }
        else{
            console.log(`Congrats! Lucky number is ${userInput}`)
            console.log("Your inputs: ", inputs)
            break;
        }
        inputs.push(userInput)
    }
    if(retryCount === 10){
        console.log("You reached out attempts.")
        console.log("Your inputs: ", inputs)
    }
}

luckyNumber()
