let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    },
};

function totalSalary(dep){
    if (Array.isArray(dep)){
        return dep.reduce((sum, employee) => sum += employee.salary, 0)
    }
    else{
        let sum = 0;
        for(let subdep in dep){
            sum += totalSalary(dep[subdep])
        }
        return sum;
    }
}

let totalSum = totalSalary(company);
console.log(totalSum)