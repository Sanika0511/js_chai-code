const arr = [1, 2, 3, 4]


// const myTtl = arr.reduce(function (acc, curr){
//     console.log(`acc: ${acc} and currval: ${curr}`);
//     return acc + curr
// }, 0)
// const myTtl = arr.reduce( (acc, curr) => acc + curr, 0)

// console.log(myTtl);

const shop = [
    {
        item: "js course",
        price: 999
    },
    {
        item: "py course",
        price: 1999
    },
    {
        item: "dev course",
        price: 2999
    },
    {
        item: "data sci course",
        price: 9999
    }
]

const ans = shop.reduce( (a,i) => a + i.price, 0)
console.log(ans);

