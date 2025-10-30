//forEach--Array k har ik member par ik baar jaana
// let arr=[1,"hello",3,[2],5];
// arr.forEach(function(val){
//     console.log(val);
    
// })
//forEach k andar return allowed nahi hai



//map filter reduce
// map() ---> jab ek array ke har element par operation karke naya array banana ho, tab map use karte hain.
// har element ko transform karke ek new array return karta hai.

let arr = [1,2,3,4,5];
let ans = arr.map(function(val){
    return 12;
});
console.log(ans);

//filter

let arr2 = [1,2,3,4,5];
let answer = arr.filter(function(value){
return true;//if u dont want to print values simply write fasle there  
});
console.log(answer)

// u can also write like this
let arr3 = [1,2,3,4,5];
let anser = arr.filter(function(value){
return value>=3;//// u can also check weather the value is greater equal or lesser or u can do any operation there
});

console.log(anser)

//reduce aik array se koi aik value banao

let arr4 = [1,2,3,4];
let asn=arr4.reduce(function(accumulator,key){
return accumulator+key // you can do any operation here 

},0)
console.log(asn);


//write a for loop to print numbers from 10 to 1 in reverse;

    // for(let i=10;i>0;i--){
    //     console.log(i);
    // }

//use a while loop to print multiples of 3 from 3 to 30.

let i = 3;
while(i<=30){
console.log(i)
    i+=3;
}

//write a program to calculate the sum of numbers from 1 to 100;
let sum = 0;
for(let i =0;i<=100;i++){
    sum = sum+i;
    
}
console.log(sum)

//use a for...of loop to iterate over the string "JavaScript".

let str = "JavaScript";

for(let i of str){
    console.log(i)
}

