// Primitive

// 7 types ; String, Number, Boolean, Null, Undefined, Symnol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 845629449841846294894623184956154n //bigint

// console.log(typeof bigNumber);


// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Sanika",
    age : 20
}

const myFunction = function(){
    // console.log("Hello world");
    
}

// console.log(typeof myFunction);
// console.log(typeof outsideTemp);


//++++++++++++++++++++++++++++++++

// Stack (Primitve), Heap (NOn-Primitive)

let myYoutubename = "sanikadotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let useOne = {
    email : "user@google.com",
    upi : "use@ybl"
}

let userTwo = useOne

userTwo.email="snaika@google.com"

console.log(useOne.email);
console.log(userTwo.email);




