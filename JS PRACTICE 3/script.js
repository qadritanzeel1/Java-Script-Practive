//Remove duplicates from an array.
// let arr = [1,1,1,3,3,4,45,66,6,666,666,67,77,88,88,88,99,99,99,11,11,12];
// let ans = [...new Set(arr)];
// console.log(ans);

//Find the second largest number in an array


// let arr2= [1,1,2,2,45,45,67,67,89,89,98,98,76,];
// //unique
// let arr3 = [...new Set(arr2)];

//sorting
// let newArr = arr3.sort(function(a,b){
// return b-a;
// }) 

// console.log(newArr[1]);


//sort an array in decending order

let arr89 = [1,2,3,4,5,6,7,8,9,10];
console.log( arr89.sort(function(a,b){
return b-a;
}) )

//reverse an array without using .reverse()

// let realArray = [999,765,342,653];

// let realArray2 = []

// for(let i = realArray.length-1;i>=0;i--){
//     realArray2.push(realArray[i])
// }

// console.log(realArray2);

//Find the most frequent element in an array

let arr = [2,2,3,4,5,5,6,6,7,7,7,8,8,8];

let obj = {}

arr.forEach(function(val){
    obj[val]===undefined ? (obj[val]=1) :obj[val]++;
});

console.log(obj);






