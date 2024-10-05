const user = {
    name: 'John',
    surname: 'Smith',
    age: 30,
    city: 'Lviv',
    getFullData() {
        return `User name: ${this.name}\nUser surname: ${this.surname}\nUser age: ${this.age}\nUser city: ${this.city}\nUser full data: ${this.name} ${this.surname}, ${this.age} y/o, ${this.city}`;
    }
}

console.log(user.getFullData());
