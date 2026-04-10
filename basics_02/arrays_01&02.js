// arrays

const myArray = [0, 1, 2, 3, 4, 5]
const myHeroes = ["saktiman","naagraj"]
console.log(myArray[0]);

const myArray2 = new Array(1, 2, 3, 4)
console.log(myArray2[1]);

// Array methods

myArray.push(6)
myArray.pop()
console.log(myArray);

myArray.unshift(0)  // add element at the start
myArray.shift() // removes element from the start
console.log(myArray);

console.log(myArray.includes(9)); //output in true/false
console.log(myArray.indexOf(1)); // -1 if element does not exist
console.log(myArray.indexOf(9));

const newArray = myArray.join() //converts to all elements of array to string
console.log(myArray);
console.log(newArray);
console.log(typeof newArray);

//slice, splice

console.log("A ", myArray);

const myn1 = myArray.slice(1,3) // 3rd is not include
console.log(myn1);

console.log("B ", myArray);
const myn2 = myArray.splice(1,3) // 3rd is include and removes these elements from the original array
console.log(myn2);

console.log("C ", myArray);

const m_h = ["thor", "ironman", "spiderman"]
const dc_h = ["superman", "flash", "batman"]

m_h.push(dc_h)

console.log(m_h); //array ke andar array i.e elements in m_h is 4
console.log(m_h[3][1]); // flash

const all_h = m_h.concat(dc_h);
console.log(all_h);

const all_n_h = [...m_h, ...dc_h] //can merge even more than two arrays

console.log(all_n_h);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_array = another_array.flat(Infinity) //sub-array concateenated into one array
console.log(real_array);

console.log(Array.isArray("sanika"));
console.log(Array.from("sanika")); //converts to array
console.log(Array.from({name : "sanika"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
