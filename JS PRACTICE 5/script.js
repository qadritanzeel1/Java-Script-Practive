//create a function that takes a callback and executes it after every 'n' seconds indefinitely.

// function repeatedFn(fn,time){
// setInterval(fn,time)
// }

// repeatedFn(function(){
//     console.log("Function Repeated");
// },1000);


//implement a function that returns a function with a preset greeting(closures).

// function greetSetup(fn){
//     return function(name){
//      console.log(`${fn} ${name}`)
//     }
// }

// let greeter= greetSetup("padlo");
// greeter("Sameer");
// greeter("Tanzeel");
// greeter("Asim")
// greeter("Ahsan");

// let islamicGreet = greetSetup("Asalamualaikum");
// islamicGreet("danish");


//impliment a function that takes a callback and only executes it once(HOF+closure)

// function abcd(fn){
//     let executed = false;
//     return function(){
//         if(!executed){
//             executed=true;
//             fn()
//         }else{
//             console.warn("warning,your code is already executed");
//         }
//     }
// }

// let executedCode=abcd(function(){
//     console.log("This will be executed only once ");
// });

// executedCode() ;
// executedCode() ;


//implement a function that throttles another function(HOF+Closures).

function throt(fn,delay){
let lastCall = 0;
return function(){
    let current = Date.now();
    if(current - lastCall>=delay){
        lastCall = current;
        fn()
    }
}
}

let fxn=throt(function(){
    console.log("2 second delay")
},2000)

fxn();
