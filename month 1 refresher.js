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