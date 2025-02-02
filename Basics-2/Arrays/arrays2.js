const marvel_heroes = ['Ironman', 'Spiderman', 'Thor', 'Hulk', 'Captain America'];
const dc_heroes = ['Batman', 'Superman', 'Flash', 'WonderWoman', 'Aquaman'];

const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(marvel_heroes);
console.log(dc_heroes);
console.log(all_heroes);

const all_heroes2 = [...marvel_heroes, ...dc_heroes];
console.log(all_heroes2);