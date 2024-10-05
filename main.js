const oldArray = [1, 2, 3, 4, 5 ,6 ,7 ,8 ,9 ,10];

function evenFilter(array) {
    const evenArray = array.filter((item) => item % 2 === 0);
    return evenArray;
}
console.log(evenFilter(oldArray))
