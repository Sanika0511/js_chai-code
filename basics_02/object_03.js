// singleton
// Object.create => object created by constructor method

// object literals

const mysym = Symbol("key1") //unique datatype => symbol

const jsuser = {
    name: "Sanika", //=> key: value
    "full name": "sana gaikwad",
    [mysym]: "mykey1",
    age: 18,
    location: "sana@google.com",
    islog: false,
    lastLogged: ["Monday", "Saturday"]
}

// myarr = ["s", "a"] => myarr[0] --> accessing array

console.log(jsuser.email) // mostly dot is used
console.log(jsuser["email"]) // bracket is used in some special cases
console.log(jsuser["full name"]) //=>only way to access this type of key
console.log(jsuser[mysym]) //*imp

jsuser.email= "sana05@gmail.com"
// Object.freeze(jsuser)
jsuser.email= "sana0526@gmail.com"
console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello js user");
}
jsuser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`);
}
// console.log(jsuser.greeting); //[Function (anonymous)] --> function is not executed only the reference aaya hai
console.log(jsuser.greeting());
console.log(jsuser.greeting2());