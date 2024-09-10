let userBirthYear = prompt("Please enter your birth year (YYYY):");
let userAge = 2024 - userBirthYear
    if(!userBirthYear){
        console.log("Too bad you didn't want to specify the year of birth (╥﹏╥)")
    }
    else if(isNaN(userBirthYear) || userAge < 0){
        console.log("You didn't enter the year correctly!")
    }
    else console.log(`Your age is ${userAge}`)

let userCity = prompt("Please enter the city where you live:");
    if(userCity){
        userCity = userCity.toLowerCase();
        if(userCity === "kyev"){
            console.log("You live in the capital of Ukraine!");
        }
        else if(userCity === "washington"){
            console.log("You live in the capital of the USA!");
        }
        else if (userCity === "london"){
            console.log("You live in the capital of Great Britain!");
        }
        else if(!isNaN(userCity)){
            console.log("You didn't enter the city correctly!")
        }
        else console.log(`You live in ${userCity.charAt(0).toUpperCase() + userCity.slice(1)}`)
    }
    else console.log("Too bad you didn't want to specify your city (╥﹏╥)")
    
let userSportKind = prompt("Please enter your favourite kind of sport:");
    if(userSportKind){
        if(!isNaN(userSportKind)){
            console.log("You didn't enter the sport correctly!")
        }
        else{
            userSportKind = userSportKind.toLowerCase();
            switch(userSportKind){
                case "boxing":
                    console.log("Wow! You wanna be Mike Tyson one day ?");
                    break;
                case "hockey":
                    console.log("Whoa! You want be Wayne Gretzky one day ?");
                    break;
                case "soccer":
                    console.log("Huh, you wanna play soccer instead of rugby ?  (ㆆ _ ㆆ)");
                    break;
                default:
                    console.log(`Your favourite sport is ${userSportKind.charAt(0).toUpperCase() + userSportKind.slice(1)}`)
                    break;
            }
        }
        
    }
    else console.log("Too bad you didn't want to specify your favourite kind of sport (╥﹏╥)")
    