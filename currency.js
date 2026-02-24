// this is a simple currency converter command line tool
// converts between ksh, usd, gbp and btc
const args = process.argv.slice(2);
const number = parseFloat(args[0]);
const currency = args[1] ? args[1].toUpperCase() : 'KSH';

