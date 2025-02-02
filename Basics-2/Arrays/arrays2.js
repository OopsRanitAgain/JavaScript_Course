const marvel_heroes = ['Ironman', 'Spiderman', 'Thor', 'Hulk', 'Captain America'];
const dc_heroes = ['Batman', 'Superman', 'Flash', 'WonderWoman', 'Aquaman'];

const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(marvel_heroes);
console.log(dc_heroes);
console.log(all_heroes);

const all_heroes2 = [...marvel_heroes, ...dc_heroes];
console.log(all_heroes2);

//Flat an array
const all_heroes3 = [marvel_heroes, dc_heroes]; //2D array
console.log(all_heroes3);
const all_heroes4 = all_heroes3.flat(); //1D array from 2D array
console.log(all_heroes4);

//Data Scraping
console.log("Data Scraping");
console.log(Array.isArray("Ranit"));
console.log(Array.from("Ranit"));

console.log("Intresting Case");
console.log(Array.from({name : "Ranit"})); //It will not work as expected
console.log(Array.from({length : 5})); //It will work as expected
//output : [undefined, undefined, undefined, undefined, undefined]

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));