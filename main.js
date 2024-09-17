let userInput = prompt("SENTENCE", "Hello world");
while(true){
    if(userInput === null){
        userInput = prompt("SENTENCE", "Hello world");
        continue;
    }
    else break;
}
let x = prompt("1st letter", "l");
while(true){
    if(x === null){
        x = prompt("1st letter", "l");
        continue;
    }
    else break;
}
let y = prompt("2nd letter", "d");
while(true){
    if(y === null){
        y = prompt("2nd letter", "d");
        continue;
    }
    else break;
}

let TrimArray = [x.toLowerCase(),y.toLowerCase()];

function Trim(userInput, TrimArray){
    letterArray = userInput.split("");
    for(i = 0; i < letterArray.length; i++){
        if(TrimArray.includes(letterArray[i].toLowerCase())){
            letterArray[i] = "";
        }
    }
    userInput = letterArray.join("");
    return userInput;
}

console.log(Trim(userInput, TrimArray))