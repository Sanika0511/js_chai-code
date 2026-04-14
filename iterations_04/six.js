// const code = ["js", "ruby", "java", "py", "cpp"]

// const val = code.forEach( (i) => {
//     console.log(i);  
//     return i //---------------> reutrns undefined
// })

// console.log(val);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = nums.filter( (n) => {
//     return n > 4
// })

// console.log(newNums);

// const newN = []

// nums.forEach( (n) => {
//     if(n > 4){
//         newN.push(n);
//     }
// })

// console.log(newN);

const books = [
    {
        title: 'book1',
        genre: 'Fiction',
        publish: 1981,
        edition: 2004
    },
    {
        title: 'book2',
        genre: 'Non-Fiction',
        publish: 1992,
        edition: 2008
    },
    {
        title: 'book3',
        genre: 'History',
        publish: 1999,
        edition: 2007
    },
    {
        title: 'book4',
        genre: 'Non-Fiction',
        publish: 1989,
        edition: 2010
    },
    {
        title: 'book5',
        genre: 'Science',
        publish: 2009,
        edition: 2014
    },
    {
        title: 'book6',
        genre: 'Fiction',
        publish: 1987,
        edition: 2010
    },
    {
        title: 'book7',
        genre: 'History',
        publish: 1986,
        edition: 1996
    },
    {
        title: 'book8',
        genre: 'Science',
        publish: 2011,
        edition: 2016
    },
    {
        title: 'book9',
        genre: 'Non-Fiction',
        publish: 1981,
        edition: 1989
    },
]

// const userBooks = books.filter( (bk) => bk.genre === 'History')
userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === 'History'

} )

console.log(userBooks);

