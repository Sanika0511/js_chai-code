// var c = 300
let a = 20

if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER:", a)
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username =  "sanika"

    function two(){
        const web = "yt"
        // console.log(username);
    }
    // console.log(web);

    two()
}

one()

if(true) {
    const username = "sanika"
    if(username === "sanika"){
        const web = " yt"
        console.log(username + web);
    }
    // console.log(web);
}

// console.log(username);

// +++++++++++ interesting ++++++++++++

console.log(addone(5)) // can be  done before the function
function addone(num){
    return num + 1
}

console.log(addone(5))


// console.log(addtwo(5)) => cant be done before the function
const addtwo = function(num){
    return num + 2
}

addtwo(5)
