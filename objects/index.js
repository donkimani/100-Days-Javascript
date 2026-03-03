// ways to create objects
// constructor function
function Person(name, age){
    this.name = name;
    this.age = age;
}
// let user = new Person('jane', '56');
// console.log(user);
// console.log(Person);

// object.create()
const Person2 = Object.create({
    fname: 'jane',
    age:23
})
// console.log(Person2.age);

const person1 = {
    city: 'london',
    calculateAge: function(){
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.yearOfBirth;
        console.log(`${this.name} is ${age} years old`);
    }
}
// const jane = Object.create(person1);
// jane.name = 'Jane';
// jane.yearOfBirth = '1999';
// jane.calculateAge()


// factory function(functions that return objects)
function createPerson(name,age){
    return {name, age}
}
// console.log(createPerson('jane','30'))

const rand = Math.random();
const animal = {};
animal["birds of the sky"] = 'nyonde';
animal.type = 'bird';
animal.speed = '100km/hr';
animal[rand] = 'weight'
// console.log(animal);
// for(let key in animal){
//     console.log(key)
// }
// console.log(Object.keys(animal));


function showProps(obj, objName) {
  let result = "";
  Object.keys(obj).forEach((i) => {
    result += `${objName}.${i} = ${obj[i]}\n`;
  });
  console.log(result);
}
// showProps(animal,'animal')

// Object methods: Object.keys(), Object.values(), Object.entries()

// Destructuring
const obj = {ky1: 1, ky2: 2, ky3: 3};
const {ky1: x, ky2: y, ky3: z} = obj;
// console.log(x)

const personx = {
    name: "Kim",
    address: {city: "new york",
    country: "kenya"}
}
const {name, address: {city, country}} = personx;
console.log(city);

// Implement your own class inheritance system
class Vehicle {
    constructor(name, model){
        this.name = name;
        this.model = model;
        this.to
    }

    details(){
        console.log(`${this.name}, model ${this.model}`);
    }
}

class Car extends Vehicle {
    constructor(name, model, color){
        super(name,model);
        this.color = color;
        this._topSpeed1 = '';
    }

    color2(){
        console.log(`we have a ${this.color} ${this.name} ${this.model}`);
    }
    details(){
        super.details();
        console.log(`we have this car called ${this.name} ${this.model} and its one of our best seller`);
    }
    set topSpeed(value){
        return this._topSpeed1 = value;
    }
    get topSpeed(){
        return `${this.name} ${this.model} maxes out at ${this._topSpeed1}`;
    }
}

// const car1 = new Car('subaru', 'forester', 'black');
// car1.color2()
// car1.topSpeed = '186km/hr'
// console.log(car1.topSpeed);

// Object methods: Object.keys(), Object.values(), Object.entries()

// object.entries()
const obj1 = {
    fname: 'roy',
    sname: 'king'
}