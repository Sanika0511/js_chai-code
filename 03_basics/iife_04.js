// Immediately Invoked Fucntion Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})(); // here needed ;

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('sanika')