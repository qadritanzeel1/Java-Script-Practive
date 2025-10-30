
//console and basic operations
//log "Hello JavaScript" to the console in 3 different ways.
// console.log("Hello JavaScript");
// console.warn("Hello JavaScript");
// console.error("Hello JavaScript");

//perform 35*2 -(10/2)+7 and log the result

// console.log(35*2 -(10/2)+7);


//log datatype of "123",123,true and null using typeof

console.log(typeof("123"));
console.log(typeof(123));
console.log(typeof(true));
console.log(typeof(null));


//write a program that swaps the value of a two variables

// let a = 5;
// let b = 6;
// [a,b]=[b,a];
// console.log(a,b)

let a = 87;
let b = 98;
let c;
c=a;
a=b;
b=c;
console.log(a,b);

//declare a constant object modify its properties,and log the updated object.
const obj = {
    name :"Tanzeel Ul Huda",
    email:"email@gmail.com",
    adress:"Ahmad Nagar",
    age:26
}

obj.name="sameer";
console.log(obj)

//if you dont want to change the key values use the code written below;
// Object.freeze(obj)


//convert "50" string into a number using 3 different methods

console.log(Number("50"));
console.log(parseInt("50"))
console.log(+("50"));

//check if javaScript contains Script without using .includes()

let str = "JavaScript";
// console.log(str.indexOf("Script")!== -1);

//another method

if(str.indexOf("Script")===-1){
    console.log(false);
    
}else{
    console.log(true);
    
}


//you can also use .search

//create the array of 5 numbers and log the sum using .reduce()
let arr4 = [1,2,3,4,5];
let asn=arr4.reduce(function(accumulator,key){
return accumulator+key // you can do any operation here 

},1)
console.log(asn);

//explain the difference bw undefined null and NaN with examples

// undefined--->jab variables banawogy value na do toh jo value by default milegi variable ko woh hai undefined

let n;
console.log(n);


//null--->null ka matlab hai value na hona 

// NaN--->Mathamatical invalid calculation will get you NaN(Not a Number);