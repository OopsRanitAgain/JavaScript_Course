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

//Two types of Memory Allocation
// 1. Stack Memory
// 2. Heap Memory

//Stack Memory
/* Primitive Datatypes are stored in Stack Memory
    Stack Memory is a temporary memory
    Stack Memory is faster than Heap Memory
    Stack Memory is limited
    Stack Memory is automatically managed by the system
*/

//Heap Memory
/* Non-Primitive Datatypes are stored in Heap Memory
    Heap Memory is a permanent memory
    Heap Memory is slower than Stack Memory
    Heap Memory is unlimited
    Heap Memory is manually managed by the developer
*/
