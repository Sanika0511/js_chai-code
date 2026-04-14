// Stack (Primitive), Heap (NOn-Primitive)
// Primitive:- numbers, boolean, character etc

let myYTname = "Sanadotcom"

let anothername = myYTname
anothername = "sana"

console.log(myYTname);
console.log(anothername);

// in object memory passes by reference i.e changes done in original value

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email= "sana@google.com"

console.log(userOne);
console.log(userTwo);
