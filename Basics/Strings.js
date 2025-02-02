const myName = "Ranit";
const repoCount = 50;

console.log(myName+" has " +repoCount + " Repositories");//Outdated

//Using backticks

console.log(`${myName} has ${repoCount} Repositories`);//Modern

const gameName = new String("PUBG");
console.log(gameName[0].__proto__);
console.log(gameName.toLowerCase());
console.log(gameName.length);
console.log(gameName.indexOf('U'));
console.log(gameName.charAt(2));

const newString=gameName.substring(1,3);
console.log(newString);

const newString2=gameName.slice(-0,2);
console.log(newString2);

const newString3=gameName.replace('PUBG','COD');
console.log(newString3);
console.log(gameName);
