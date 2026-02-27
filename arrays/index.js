//  Implement map, filter, reduce from scratch (understand the mechanics)
// map
const arr = [1,2,3,4,5,6,7];
const arr3 = ["john doe", "carley mackinon", "jack bram"];
const arrmap = (x) => {
    newarr = [];
    for (let y=0; y<arr.length; y++){
        newarr.push(arr[y] * x);
    }
    return newarr;
};
// console.log(`Map: ${arrmap(2)}`) 

// forEach
// console.log("running forEach manually");
for (let x=0; x<arr.length; x++){
    // console.log(`each number is: ${arr[x]}`);
}


// fliter
const filt = arr3.filter((nme) => nme.includes("john"));
// console.log(`filtered names: ${filt}`);


// Reduce
// console.log("running reduce manually");
let s = 0;
for (let x=0; x<arr.length; x++){
    s += arr[x]
}
// console.log(`total is: ${s}`);

// reducer
// const initial_value = 0;
// const reducer = (accumulator, value) => {
//     console.log(`accumulator is: ${accumulator}   value is ${value}`);
//     return accumulator + value;
// }
// const total = arr.reduce(reducer, 0);

//  Create utility functions (chunk, flatten, unique, groupBy)
// chunk
const chunk = (arr1, chunksize) => {
    let tempArray = [];
    for (let i=0; i<arr1.length; i+=chunksize){
        tempArray.push(arr1.slice(i, i+chunksize));
    }
    return tempArray;
}
// console.log(chunk(arr, 2))

// flattenarray
const arr2 = [1,2,[3,4],[5,6]];
function flattenArray(data, initialValue = []){

    return data.reduce((acc, value) => {
        Array.isArray(value) ? flattenArray(value, acc) : acc.push(value);
        return acc;
    }, initialValue);
}
// console.log(flattenArray(arr2))

// functional programming
// closure functions
function bash(){
    age = 0;
    function ongezamiaka(){
        return age++;
    }
    function wish(){
        console.log(`Kid is ${age}. Happy Birthday`);
    }
    return {ongezamiaka, wish};
}
// const kido = bash();
// kido.ongezamiaka()
// kido.wish()
// kido.ongezamiaka()
// kido.wish()
// kido.ongezamiaka()
// kido.wish()


function makePerson(name){
    let _name = name;

    const setName = (newName) => (_name=newName);
    const getName = () => _name;

    return {setName, getName};
}
// const me = makePerson("kim");
// console.log(me.getName());
// console.log(me.setName("roy"));
// console.log(me.getName());


// curry functions
const addCustomer = fn => (...args) => {
    console.log(`saving customer info....`);
    return fn(...args);
}

const processOrder = fn => (...args) => {
    console.log(`processing order #${[args[0]]}`);
    return fn(...args);
}

let completeOrder = (...args) => {
    console.log(`Order #${[...args].toString()} completed`);
}

// completeOrder = (processOrder(completeOrder))
// completeOrder = (addCustomer(completeOrder))
// completeOrder(1000);


const curry = (fn) => {
    return curried = (...args) => {
        if (fn.length !== args.length){
            return curried.bind(null, ...args);
        }
        return fn(...args);
    };
}

// const total = (x, y, z) => x + y + z;
// const curriedTotal = curry(total);
// console.log(curriedTotal(10)(20)(30))


// compose and pipe functions 
const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val);
const compResult = compose()