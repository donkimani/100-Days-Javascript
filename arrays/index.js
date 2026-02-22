//  Implement map, filter, reduce from scratch (understand the mechanics)
// map
const arr = [1,2,3,4];
const arrmap = (x) => {
    newarr = [];
    for (let y=0; y<arr.length; y++){
        newarr.push(arr[y] * x);
    }
    return newarr;
};
console.log(`Map: ${arrmap(2)}`) 

// forEach
console.log("running forEach manually");
for (let x=0; x<arr.length; x++){
    console.log(`each number is: ${arr[x]}`);
}

// Reduce
console.log("running reduce manually");
let s = 0;
for (let x=0; x<arr.length; x++){
    s += arr[x]
}
console.log(`total is: ${s}`);