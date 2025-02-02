//Dates

let myDate = new Date();
console.log(myDate.toString()); //String
console.log(myDate.toDateString()); //Date
console.log(myDate.toTimeString()); //Time  
console.log(myDate.toLocaleString()); //Local Time

let myCreatedDate = new Date(2003,6,24);
console.log(myCreatedDate.toDateString()); //String

let myTimeStamp = Date.now()

console.log(myTimeStamp); //Timestamp from 1970 to now
console.log(myCreatedDate.getTime()); //Timestamp from 1970