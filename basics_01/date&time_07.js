// dates

let myDate = new Date() // date is a object in js
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myDate2 = new Date(2023, 0 , 23) // month starts from 0 i.e jan=0
console.log(myDate2.toDateString());
let myDate3 = new Date(2023, 0 , 23, 5, 3) //yyyy, m, dd, time
console.log(myDate3.toLocaleString());
let myDate4 = new Date("2023-01-14") //yyyy-mm-dd
console.log(myDate3.toLocaleString());
let myDate5 = new Date("01-14-2023") //mm-dd-yyyy
console.log(myDate3.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myDate5.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // as months in js starts from 0 so to avoid confusion we just add 1 to get exact month no.
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday:"long",
})




