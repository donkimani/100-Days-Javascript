// higher order unctions
function multiplier(factor) {
    // console.log(`factor: ${factor}`);
    return (number) => number * factor;
}
const double = multiplier(2);
double(5); // 10

// array methods
const numbers = [1, 2, 3, 4, 5, 6];
// forEach
// numbers.forEach((num) => console.log(num+2));
// map
const doubles = numbers.map(n => n*2);
// console.log(doubles)
// filter
const evens = numbers.filter(n => n % 2 === 0);
// console.log(evens)
// reduce
const sum = numbers.reduce((acc,n) => n + acc, 0);
// console.log(sum);
// find
const firstEven = numbers.find(n => n % 2 === 0);
// console.log(firstEven);
// FindIndex
const index = numbers.findIndex(n => n > 4);
// console.log(index);
// some
numbers.some(n => n > 5); //returns true or false if one element passes 
// every
console.log(numbers.every(n => n > 0));//returns true or false if all element passes 

// Array Manipulation: push, pop, shift, unshift, splice, slice
let arr = [2,3,4];

// splice (Removes/replaces/adds elements in place.)
let fruits = ['apple', 'banana', 'cherry', 'date'];
fruits.splice(1, 0, 'mango', 'melon');
// console.log(fruits);

// sorting of arrays
let arr12 = [3, 1, 10, 2];
arr12.sort((a,b) => a-b);
console.log(arr12)

// Array Matrix
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
// console.log(matrix[2][2]);
// looping in the matrix
for(let row of matrix){
    for(let cell of row){
        // console.log(cell);
    }
}
// map mthod on the array
const doubmatrix = matrix.map(row => row.map(cell => cell*2));
// console.log(doubmatrix);

// Objects
const protoPerson = {
    greet(){
        return `Hi, I'm ${this.name}!`
    }
};
const don = Object.create(protoPerson)
don.name = 'don';
// console.log(don.greet());

const obj = {name: 'ada'};
Object.defineProperty(obj, 'secret', {
    value: 'hidden',
    enumerable: false,
    writable: false,
    configurable: false
});
// console.log(Object.getOwnPropertyNames(obj));
for (let key in obj){
    // console.log(key)
}
// console.log(Object.keys(obj))

let x = 1, y = 2;
[x,y] = [y,x]
// console.log(x,y)

const person = {
  name: 'Ada',
  job: {
    title: 'Mathematician',
    year: 1843
  }
};

const { name, job, job: { title, year } } = person;
// console.log(name, job, title, year);

const response = {
  status: 200,
  data: ['Ada', 'Charles', 'Alan']
};

const {status, data:[first, , last]} = response
console.log(status, first, last);