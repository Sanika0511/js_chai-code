const userEmail = "h@hitesh.ai" //stirng is assumed to be true
const userEmailArr = [] //array is assumed to be true
const userEmail2 = "" //empty stirng is assumed to be false

// if(userEmail){
//     console.log("Got user useremail");
// }
// else{
//     console.log("Don't have user useremail");
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if(userEmail2.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    // console.log("object is empty");
}

// nullish coalescing operator (??); null undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 15 ?? 10
// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")



