const array = [1, 30, true, 3, "Bob", NaN];
let sum = 0;
let eq = 0;

function count(array){
    for(i = 0; i < array.length; i++){
        if(typeof(array[i]) === "number" && !isNaN(array[i])){
            sum += array[i];
            eq++
        }
    }
}
count(array)
console.log(sum/eq)

// const array = [1, 30, true, 3, "Bob", NaN];
// let sum = 0;
// let eq = 0;

// array.forEach(item => {
//     if(typeof item === "number" && !isNaN(item)){
//         sum += item;
//         eq++
//     }
// });

// console.log(sum/eq)