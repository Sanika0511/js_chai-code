// const user=new Object() --> singleton object
// const user={} --> non-singleton obejct

const user = {}

user.id = "123abc"
user.name = "Sammy"
user.isLoggedin = false

// console.log(user);

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sanika",
            lastname: "Gaikwad"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname);

const ob1 = {1: "a", 2: "b"}
const ob2 = {3: "a", 4: "b"}
const ob4 = {5: "a", 6: "b"}

// const ob3 = { ob1, ob2 } // --> { ob1: { '1': 'a', '2': 'b' }, ob2: { '3': 'a', '4': 'b' } } object ke andar object

// const ob3 = Object.assign(ob1, ob2) // ob1=> target, ob2 => source i.e saari value going in ob1
// const ob3 = Object.assign({},ob1, ob2, ob4) // {} => target, ob1 ob2 ob3 => source

const ob3 = {...ob1, ...ob2} //saari values ko pehle spread kr diya then assigned into ob3
// console.log(ob3);

const users = [
    {
        id: 1,
        email: "san@gmail.com",
    },
    
    {
        id: 1,
        email: "san@gmail.com",
    },
    {
        id: 1,
        email: "san@gmail.com",
    },
]

users[1].email
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty('isLoggedin'));


const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course

console.log(instructor);

// const navbar = ({company}) => {

// }
// navbar(company = "sanika")

// let userx = {
//   name: "Sanika",
//   age: 21
// }

// let { name, age } = userx => this is destructuring

// console.log(name, age);

//----JSON-----//

// {
//     "name": "Sanika",
//     "coursename": "js",
//     "price": "free"
// }


[
    {},
    {},
    {}
]




