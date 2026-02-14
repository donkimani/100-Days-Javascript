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
    console.log(`${temp}°C is ${fahrenheit.toFixed(2)}°F`);
}