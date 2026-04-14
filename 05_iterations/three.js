//for of
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for(const i of arr){
    // console.log(i);
}

const greet = "Hello World"

for(const s of greet){
    // console.log(`Each char is ${s}`);
}

// Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', "America")
map.set('FR', "France")
// map.set('IN', "India")

// console.log(map);

for(const [i,j] of map){
    console.log(i, ':-', j);
}

const myObj = {
    'Game1': 'NFS',
    'Game2': 'Spiderman'
}

// for(const [i,j] of myObj){
//     console.log(i, ':-', j);
// } ------------------ERROR------------------

// so for object we use for in loop