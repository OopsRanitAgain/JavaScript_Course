let score = "24";

console.log(typeof score); //string
console.log(typeof(score)); //string

let valueInNumber = Number(score);

console.log(typeof valueInNumber); //number

//"33" -> 33
//"33abc" -> NaN
//true -> 1 false -> 0

let isLoggedIn = 1;
console.log(Boolean(isLoggedIn)); //true


let value = 3;

let negValue = -value;
console.log(negValue); //-3

let str1 = "Hello";
let str2 = " Ranit";

let str3 = str1+str2;
console.log(str3); //Hello Ranit

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+3);
console.log(1+2+"3");

num1 = num2 = num3 = 2+2;

console.table({num1, num2, num3});
