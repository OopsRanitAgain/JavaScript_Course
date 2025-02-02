//Primitive Datatypes(7 Types)
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

const id = Symbol('123');
const anotherID = Symbol('123');
console.log(id === anotherID); //false

//Non-Primitive Datatypes
// 1. Object
// 2. Array
// 3. Function

//Array
const heroes = ['Ironman', 'Thor', 'Hulk'];
console.log(heroes);

//Object
const user = {
    name : "Ranit",
    age : 21
}

//Function
const myFunction = function(){
    console.log("Hello World");
}
