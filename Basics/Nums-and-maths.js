const num1 = 123.24567
console.log(num1.toFixed(2)); //123.25
console.log(Math.floor(num1)); //123
console.log(Math.ceil(num1)); //124
console.log(Math.round(num1)); //123
console.log(Math.PI); //3.141592653589793
console.log(Math.E); //2.718281828459045
console.log(Math.abs(-123)); //123  //Absolute Value
console.log(Math.sqrt(25)); //5  //Square Root
console.log(Math.cbrt(27)); //3  //Cube Root
console.log(Math.pow(2,3)); //8  //Power
console.log(Math.min(1,2,3,4,5)); //1
console.log(Math.max(1,2,3,4,5)); //5
console.log(Math.random()); //Random Number between 0 and 1
console.log(Math.floor(Math.random()*10)); //Random Number between 0 and 9
console.log(Math.floor(Math.random()*10)+1); //Random Number between 1 and 10

const hundreds = 10000000;
console.log(hundreds.toExponential()); //1e+7
console.log(hundreds.toLocaleString()); //10,000,000 //US Format
console.log(hundreds.toLocaleString('en-IN')); //1,00,00,000 //Indian Format