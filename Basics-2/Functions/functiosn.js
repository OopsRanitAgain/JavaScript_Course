//funtion declaration

function greet() {
    console.log("Hello Ranit");
}

greet();

function addTwoNums(a,b){
    console.log(a+b);
}

addTwoNums("10",20); //1020
addTwoNums(10,"20"); //1020
addTwoNums(10,null); //10

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(10,20,30,40,50));

const user ={
    userName : "Ranit",
    userAge : 21,
}

function handleObject(user){
    console.log(`User Name : ${user.userName} and User age : ${user.userAge} `);
}

handleObject(user);

const myArr = [10,20,30,40,50];
function returnSecondElement(arr){
    return arr[1];
}

console.log(returnSecondElement(myArr));

