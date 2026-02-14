// convert temperature on commandline 

const args = process.argv.slice(2);
const temp = parseFloat(args[0]);
const unit = args[1] ? args[1].toUpperCase() : 'C';

if (isNaN(temp)) {
    console.log("Usage: node temp.js <temparature> <C|F>");
    process.exit(1);
}

if (unit === 'C'){
    // celcius to fahrenheit
    const fahrenheit = (temp * 9/5) + 32;
    const kelvin = temp + 273.15;
    console.log(`${temp}°C is ${fahrenheit.toFixed(2)}°F or ${kelvin.toFixed(2)}°K`);
}else if (unit === 'F'){
    // celcius to fahrenheit
    const celcius = (temp - 32) * 5/9;
    const kelvin = celcius + 273.15;
    console.log(`${temp}°F is ${celcius.toFixed(2)}°C or ${kelvin.toFixed(2)}°K`);
}else if (unit === 'K'){
    // celcius to fahrenheit
    const celcius = temp - 273.15;
    const fahrenheit = celcius * 9/5 + 32;
    console.log(`${temp}°K is ${celcius.toFixed(2)}°C or ${fahrenheit.toFixed(2)}°F`);
}else{
    console.log("Please specify 'C' for celcius or 'F' for fahrenheit.");
}