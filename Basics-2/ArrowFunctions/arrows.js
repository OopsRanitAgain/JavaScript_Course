const user = {
    userName : "Ranit",
    price :299,

    welcomeMessage : function(){
        console.log(`Welcome ${this.userName}`);
        console.log(this);
    }
}

user.welcomeMessage();
user.userName = "Ranit Das";
user.welcomeMessage();

// Arrow functions

const greet = () => {
    console.log("Hello Ranit Bhai...");
    console.log(this);
}

greet();

//Implicit return in Arrow functions
//In implicit return, we don't need to use return keyword

const addTwoNums = (a,b) => a+b;

console.log(addTwoNums(10,20));