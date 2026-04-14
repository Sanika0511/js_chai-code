// if
const isuserloggedin = true

if(isuserloggedin){
    // console.log("yes")
}

// <, >, <=, >=, ==, !=, ===

// nesting
const balance = 1000

if(balance < 500) {
    console.log("less than 500");
}
else if(balance < 750) {
    console.log("less than 750");
}
else if(balance < 900) {
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedinFromGoogle = false
const loggedinFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy clothes");
}

if(loggedinFromGoogle || loggedinFromEmail){
    console.log("User logged in");
}