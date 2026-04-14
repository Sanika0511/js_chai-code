
function saymyname(){
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("A");
}

// saymyname => reference
// saymyname() => execution

function add2no(num1, num2){
    console.log(num1 + num2);
}

// add2no() // NaN 
// add2no(3, 4) // 7
// add2no(3, "4") // 34
// add2no(3, "a") //3a
// add2no(3, null) // 3

function add2no(num1, num2){
    // let result =  num1 + num2
    // return result

    return num1 + num2
}
const result = add2no(3, 5)

// console.log("result:",result);

function userloginmsg(username = "sam"){
    // if(username === undefined){
    //     console.log("please ender a username");
    //     reutrn
    // }
    if(!username){
        console.log("please ender a username");
        reutrn
    }
    return `${username} just logged in`
}

// console.log(userloginmsg("Sanika")); => Sanika just logged in
// console.log(userloginmsg(""));=>       just logged in
// console.log(userloginmsg()); => undefined just logged in when there is no if condition or any default value

function calcCartPrice(...num1){
    return num1
}

// console.log(calcCartPrice(200, 400, 500, 800)); // W/O rest operator => 200
// console.log(calcCartPrice(200, 400, 500, 800));

function calcCartPrice2(v1, v2, ...num1){
    return num1
}
// console.log(calcCartPrice2(200, 400, 500, 800)); // [500, 800]

const user = {
    username: "sanika",
    price: 99
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
handleObject({
    username: "san",
    price: 399
})

const mynewarr = [200, 300, 400, 600]

function secVal(getArr){
    return getArr[1]
}

console.log(secVal(mynewarr));
console.log(secVal([200, 300, 400, 600]));
