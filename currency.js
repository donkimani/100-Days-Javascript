// this is a simple currency converter command line tool
// converts between ksh, usd, gbp and btc
const args = process.argv.slice(2);
const number = parseFloat(args[0]);
const currency = args[1] ? args[1].toUpperCase() : 'KSH';

if (isNaN(number)) {
    console.log("Not a number!!");
    process.exit(1);
}

if(currency === 'KSH'){
    let gbp = number * 0.0057;
    let usd = number / 130;
    let btc = number / 8290904;
    console.log(`usd is ${usd}, pgb is ${gbp} and btc is ${btc}`)
}else if(currency === 'USD'){
    let gbp = number * 0.74;
    let ksh = number * 130;
    let btc = number * 0.000016;
    console.log(`ksh is ${ksh}, pgb is ${gbp} and btc is ${btc}`)
}else if(currency === 'GBP'){
    let usd = number * 1.35;
    let ksh = number * 173.95;
    let btc = number * 0.000021;
    console.log(`ksh is ${ksh}, usd is ${usd} and btc is ${btc}`)
}else if(currency === 'BTC'){
    let pgb = number * 47485;
    let ksh = number * 8265601;
    let usd = number * 64081;
    console.log(`ksh is ${ksh}, pgb is ${pgb} and btc is ${usd}`)
}else {
    console.log("invalid currency");
}