// // let str = "hello";

// //  let ans = str.sp(0,3);

// //  console.log(ans);

// //types of funtion
// //function statement
// function abcd(){
//     //fnc statement
// }
// // function expression
// let abcd = function(){
//     //fnc expression
// }
// //anonymous function
// function(){
//     // anonymous function
// }

// //example of function anonymous

// var arr = [1,2,3,4];
// arr.forEach(function(){
//     //this is valid code and that is called anonymous function
// });
// //fat arrow function
// ()=>{

// }
// //fat arrow with one parameter

// let abcd = a =>{

// }

// abcd(12)
//fat arrow with implicit return

// let abcd = ()=>12
// let ans= abcd()





// function(){
//     // anonymous function
// }

// //example of function anonymous

// var arr = [1,2,3,4];
// arr.forEach(function(){
//     //this is valid code and that is called anonymous function
// })


//rest parameters
// function abdd(a,b,c,...rest){
//     console.log(a,b,c,rest)
// }

// abdd(1,2,3,4,5,6,7,8,9,10)

//hoisting
// console.log(a)
// a =  12;


//iife-immidiately invoked function expression
// (function abcd(){
//     console.log("Hello World");
// })();


// another example of iife
// let tech = (function techLibrary(){
// return{
//     imgEffect:function(){
//         console.log("Image Effect");
//     },
//     mouseFollower: function(){
//         console.log("Mouse Follower")
//     }
// }
// }())

// tech.imgEffect();

//hofs(higher order function)
//ik aisa functio jo ya toh return kare function nahi toh accept kare function in parameter,ya fir dono.

// function abcd(){
//     return function(){
//         console.log("Hello World");
//         return function(){
//             console.log("Hello javaScript")
//             return function(){
//                 console.log("Hello Node js");
                
//             }
//         }
//     }
// }

// abcd()()()();

// function abdf(fnc){
// fnc()
// }

// abdf(function(){
//     console.log("Hello React js")
// });

//cb function(call back function)

// kisi function mai jo function pass hota hai call karte waqt ussey call back function kehtey hai

//aysa functionjo parameter mai accept kare function usse kehte hai higher order function(hofs).
//aur jo parameter mai function jaa raha hai usse kehte hai call back function

// function abcd(val){
// val()
// }
// abcd(function(){
//     console.log("hello js")
// });


//first class function- first class function ik darja hai jo ki js mai functions ko mila hai.iss darje mai kaha jata hai ki functions ko iss darje mai kaha jata hai ki functions ko aap value ki tarah use kar sakte ho

//pure function

//A function without side effects(does not modify external state )

// function add(a,b){
//         return a+b //No external modification
// }

// console.log(add(2,3));

//Impure function--> A function that modifies external state

// let total = 0;
// function addToTotal(a){
//     total+=a; //modifies external variable
// };

// addToTotal(5);
// console.log(total);


//closures--> closure ik concept hai jis mai function return karta hai ik aur function and returned function mai aap use karte ho parent function ka koi data.


function abcd(){
    let a = 12;
    return function(){
        console.log(a)
    }
}

abcd()
