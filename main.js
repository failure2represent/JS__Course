const array = [1, 3, 7, 6, 2, 5, 7, 4];

function removeElement(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            array.splice(i, 1);  
        }
    }
}

removeElement(array, 7);

console.log(array); 


// const array = [1, 3, 7, 6, 2, 5, 7, 4];

// function removeElement(array, item){
//     return array.filter(element => element !== item)
// }

// const newArr = removeElement(array,7);

// console.log(newArr)