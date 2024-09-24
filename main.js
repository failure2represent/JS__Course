
function multyply(firstID){{
        return function (secondID){
            return firstID*secondID
        }
    }
}
const firstNumber = prompt("Enter your multyplyer")
const secondNumber = prompt("Enter your number to multyply")

console.log(multyply(firstNumber)(secondNumber))
