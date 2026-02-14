// Calculator running on terminal

const arg = process.argv.slice(2);
const num1 = parseFloat(arg[0]);
const ass = arg[1];
const num2 = parseFloat(arg[2])

if(isNaN(num1) || isNaN(num2)){
    console.log("Enter valid numbers")
    process.exit(1)
}

if (ass === '+'){
    let final = num1 + num2;
    console.log(`${num1} + ${num2} = ${final}`);
}else if (ass === '-'){
    let final = num1 - num2;
    console.log(`${num1} - ${num2} = ${final}`);
}else if (ass === '/'){
    let final = num1 / num2;
    console.log(`${num1} / ${num2} = ${final}`);
}else if (ass === '*'){
    let final = num1 * num2;
    console.log(`${num1} * ${num2} = ${final}`);
}else{
    console.log(`Enter a valid assignment operator between ${num1} and ${num2}`);
}
