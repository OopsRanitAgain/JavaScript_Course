//object literals
const jsUser= {
    name: "Ranit",
    age : 21
}

console.log(jsUser);
console.log(jsUser.name);
console.log(jsUser['name']); // name is a string

//Using Symbol in Object
const a = Symbol("a");
const b = Symbol("b");

const symObj = {
    [a] : 'Hello',
    b : 'World'
}
//Accessing Symbol using Object
console.log(symObj[a]);
console.log(typeof a);
console.log(symObj)