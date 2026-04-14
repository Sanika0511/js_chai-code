const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 23.8966
const otherNum2 = 123.8966

console.log(otherNum.toPrecision(3));
console.log(otherNum2.toPrecision(3));

const hundreds = 100000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++ Maths ++++++++++++

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.sqrt(25));
console.log(Math.pow(4,2)); //(base,exponent)
console.log(Math.min(4,5,6,9));
console.log(Math.max(499,2654,5946,48845));
console.log(Math.random());
console.log(Math.random()); // randon value btw 0-1 
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);