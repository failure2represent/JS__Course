function toSum() {
    let count = 0; 

    return function(value) {
        count += value; 
        return count;    
    };
}

const sum = toSum(); 

console.log(sum(4));   
console.log(sum(6));  
console.log(sum(10)); 
console.log(sum(7));  