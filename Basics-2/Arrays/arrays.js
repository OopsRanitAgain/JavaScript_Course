const myArr = [1, 2, 3, 4, 5];
console.log(myArr);

const heroes = ['Batman', 'Superman','Ironman'];
console.log(heroes);

const myArr2 = new Array(1,2,3,4,5,6,7,8,9,10,11);
console.log(myArr2);
console.log(myArr2[2]);
myArr2.push(12); // Add element at the end
myArr2.pop(); // Remove element from the end
myArr2.unshift(0); // Add element at the beginning syntax: unshift(element)
myArr2.shift(); // Remove element from the beginning syntax: shift()
console.log(myArr2);
myArr2.shift();
console.log(myArr2);

//slice splice methods

const myArr3 = [1,2,3,4,5,6,7,8,9,10];
console.log(myArr3.slice(1,4)); // [2,3,4] // does not remove elements from the array
console.log(myArr3); // [1,2,3,4,5,6,7,8,9,10]

const myArr4 = [1,2,3,4,5,6,7,8,9,10];
console.log(myArr4.splice(1,4)); // [2,3,4,5] // removes elements from the array
console.log(myArr4); // [1,6,7,8,9,10]