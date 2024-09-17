let inputSentence = prompt("Enter your sentence:", "Hello world");

function Trim(inputSentence){
    let x = prompt("Enter 1st letter:", "l");
    let y = prompt("Enter 2nd letter", "d");
    let letterArray = inputSentence.split("");
    let letterTrimmArry = [x.toLowerCase(),y.toLowerCase()];
    for(i = 0; i < letterArray.length; i++){
        if(letterTrimmArry.includes(letterArray[i].toLowerCase())){
            letterArray[i] = ""; 
        }
    }
    let result = letterArray.join("");
    return result
}

let result = Trim(inputSentence)
console.log(result)