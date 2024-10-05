const user = {
    name: 'John',
    surname: 'Smith',
    age: 30,
    city: 'Lviv',
    getFullData() {
        return `${this.name} ${this.surname}, ${this.age} y/o, ${this.city}`;
    }
}

console.log(user.getFullData());
