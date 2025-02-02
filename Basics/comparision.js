console.log("2" > 1); //true
// JS converts the string to number and then compares

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

//JS converts null to 0 and then compares and == and other comparison operators works are different
console.log(null == undefined); //true

//===
console.log(1 === 1); //true
console.log(1 === "1"); //false
//checks value Strictly and type