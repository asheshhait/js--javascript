//array  
const myArray = [0, 1, 2, 4, 5, 6]
console.log(myArray[2])


const MyArray = new Array(1,2,3,45,5)
console.log(MyArray)

// METHOD
myArray.push(6)
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.shift()
console.log(myArray)
console.log(myArray.includes(9))
console.log(myArray.includes(5))
console.log(myArray.join())


// slice, splice

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3)

console.log(myn1);
console.log("B ", myArray);


const myn2 = myArray.splice(1, 3)
console.log("C ", myArray);
console.log(myn2);




const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)


const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("ashesh"))
console.log(Array.from("ashesh"))
console.log(Array.from({name: "ashesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));