const marvel_heroes = ["Thor", "Ironman", "spiderman"]
const dc_heroes = ["superbhau", "flash", "batbhau"]

marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// [ 'Thor', 'Ironman', 'spiderman', [ 'superbhau', 'flash', 'batbhau' ] ]

// console.log(marvel_heroes[3][1]); // flash

// concat
const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);
// [ 'Thor', 'Ironman', 'spiderman', [ 'superbhau', 'flash', 'batbhau' ] ]

// flat():
// Integrates diffrent array into single array 
const allNewHeroes = [...marvel_heroes, ...dc_heroes]
// console.log(allNewHeroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// Intresting
console.log(Array.isArray("Omkar")) // false
console.log(Array.from("Omkar")) // [ 'O', 'm', 'k', 'a', 'r' ]
console.log(Array.from({name: "Omkar"})) // [] - gives empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]