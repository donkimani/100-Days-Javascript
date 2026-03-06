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
// console.log(city);

// spread operators
const arr1 = [1,2,3]
// console.log(...arr1)

function sum(x,y,z,k,l){
    return x+y+z+k+l;
}
const numbers = [1,2,3];
// console.log(sum(...numbers,6,...[3]))

const datefield = [1970,0,1];
// console.log(new Date(...datefield))
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
// console.log(lyrics)

// rest operator
function product(...nums){
    return nums.reduce((acc,num) => acc*num)
}
// console.log(product(12,3,2))

// Define a function with three parameters:
function myBio(firstName, lastName, company) { 
  return `${firstName} ${lastName} runs ${company}`;
}

// Use spread to expand an array’s items into individual arguments:
// console.log(myBio("Oluwatobi", "Sofela", "CodeSweetly"));


// this keyword(bindinfg,call,apply)
// explicit binding
function greet(l1,l2,l3){
    console.log(
        `Hello my name is ${this.name} and I know ${l1}, ${l2}, ${l3}`
    )
}
const user = {
    name: 'tyler',
    age:27,
}
const languages = ['js','py', 'c++'];
// greet.call(user, ...languages);

// .apply helps with the spreading
// greet.apply(user, languages);

// .bind creates a whole new other funtion
const newGreet = greet.bind(user, ...languages);
// newGreet()

// New Binding 
function User(name,age){
    this.name = name;
    this.age = age;
}
User.prototype.sayHello = function (){
    console.log(`My name is ${this.name}`);
}
const me = new User('Tyler', 27)
me.sayHello = function (){
    console.log(`My name is ${this.name} and I'm ${this.age} yrs old`);
};
me.sayHello();
console.log(me.name)
console.log(me.__proto__ === User.prototype)
const you = new User("Grace");
you.sayHello();


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