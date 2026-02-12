// number n, we count i to n, multiple of 3 is fizz,multiple of 5 is buzz and both is fizzbuzz

function fizzbuzz(n){
    let x = [];
    for (let i = 1; i <= n; i++){
        if( i % 3 && i % 5 === 0){
            x.push("fizzbuzz");
        }
        else if( i % 5 === 0){
            x.push("buzz");
        }
        else if(i % 3 === 0){
            x.push("fiz");
        }
        else{x.push(i.toString());}
    }
    return x;
}

console.log(fizzbuzz(75));

