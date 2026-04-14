// for each loop

const code = ["js", "ruby", "java", "py", "cpp"]

code.forEach( function (item) {
    // console.log(item);
} )

code.forEach( (item) => {
    // console.log(item);
} )

function printme(item){
    // console.log(item);
}

code.forEach(printme)

code.forEach( (elements, index, array) => {
    // console.log(elements, index, array);
} )

const conding = [
    {
        name: "js",
        filename: "java"
    },
    {
        name: "java",
        filename: "java"
    },
    {
        name: "python",
        filename: "py"
    },
]

conding.forEach( (i) => {
    console.log(i.name);
} )