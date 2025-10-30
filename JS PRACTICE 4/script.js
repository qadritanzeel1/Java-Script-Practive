//cbs hofs closures

//callback function--->aik aisa function jo aap kisi aur function mai pass karte ho future mai chalane k time.


//hofs---->ek aisa function jo accept kare doosra function in parameter ya fir return kare aik aur function, aise function ko kehte hai higher order function(hofs)


//closures----->ek aisa function jo return kare doosra function and jo function return hua hai woh use kare parent function ka koi variable.



//create a function that takes another function as an argument and calls it after 3 seconds (Hofs + Callback).

// function callerFn(fn){
// setTimeout(fn,3000);
// }

// callerFn(function(){
//     console.log("function after 3 seconds");
// })

//Impliment your own version of '.map()' as a higher order function.


// let arr = [1,2,3,4,5];

// function copiedMap(a,fn){
//  let newArr=[];
// for(let i =0;i<a.length;i++){
//     newArr.push(fn(a[i]))
// }

//  return newArr
// }

// let ans = copiedMap(arr,function(value){
//     return value * 7
// })


//write a function that uses closures to create a counter.

// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count)
//     }
// }

// let ans=counter();
// ans()
// ans()
// ans()






//impliment a function that limits how many times another function can be called (Closure + hofs)


function fnlimiter(fn,limiter){
let  total = 0;
return function(){
    if(total<limiter){
        total++;
        fn()
    }else{
        console.warn("limit reached,your account will be blocked")
    }
}
}

let fnCall=fnlimiter(function(){
    console.log("three times you can call this function")
},3);

fnCall();
fnCall();
fnCall();
fnCall();
fnCall();
