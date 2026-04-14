// map & chaining

//in filters we have true false vala game 
//(only the value that satisfies the given condition gets return)
// but in map everything gets return 

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newN = nums.map( (n) => n + 10)

const newN = nums
                .map( (n) => n * 10 )
                .map( (n) => n + 1 ).
                filter( (n) => n >= 40 )

console.log(newN);



