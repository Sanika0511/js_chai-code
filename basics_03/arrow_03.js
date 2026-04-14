const user = {
    username: "sanika",
    price: 999,

    welcomemsg: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
    
}

// user.welcomemsg()
// user.username= "sam"
// user.welcomemsg()

// console.log(this);

// function chai() {
//     let username= "sanika"
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//     let username= "sanika"
//     console.log(this);
    
// }
// chai()

// const chai = () => {
//     let username= "sanika"
//     console.log(this);
    
// }
// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2      -->explicit return
// }
// const addtwo = (num1, num2) => num1 + num2        -->implicit return
// const addtwo = (num1, num2) => ( num1 + num2 )    -->implicit return

// const addtwo = (num1, num2) => ({username: "san"})
// console.log(addtwo(3, 4))

const myArr = [1, 2, 4, 6, 8]
// myArr.forEach(function() { })
// myArr.forEach(() => {})
// myArr.forEach(() => ())

