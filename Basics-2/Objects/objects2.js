//Singleton Object

//const tinderUser = new Object();//Singleton Object
const tinderUser2 = {} //Non Singleton Object
console.log(tinderUser2);

tinderUser2.id = "123abc";
tinderUser2.name = "Ranit";
tinderUser2.age = 21;

console.log(tinderUser2);

const obj1 = {1 : "Ranit", 2 : "Ranit2"};
const obj2 = {3 : "Ranit", 4 : "Ranit2"};

const obj3 = {obj1, obj2};
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

const obj5 = {...obj1, ...obj2};
console.log(obj5);