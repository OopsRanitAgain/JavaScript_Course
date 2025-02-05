//Immediately Invoked Function Expression (IIFE)
// IIFE is a JavaScript function that runs as soon as it is defined.

function dbConnect(){
    console.log("Database Connected");
}

dbConnect();

//Calling the function immediately after defining it

(function(){
    console.log("Database Connected and Function called Through IIFE");
})();

//IIFE with parameters
((a,b) =>{
    console.log(a+b);
})(10,20);

