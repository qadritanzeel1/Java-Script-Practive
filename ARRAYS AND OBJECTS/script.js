//array-ek se zyada values ko ek sath store krne wala data structure hai array
// let a =["hello",true,false,[11,],undefined];
// console.log(a);

//what is array 
//array is a data structure in which we can store the collection of data.

//why array-to store the multiple values or to stre the collection of data


//how to use array

//-------how to create array----[]
//-------how to access members of array

let arr = [1,2,3,"Tanzeel",67,76];
arr[0] //this is called indexing

//there are two ways to create array
// let arr1=[];
let arr2=new Array()

arr2[0]=3;
arr2[1]=44

//now the point is when to use new Array-----if the size of array is 20 or more use new Array as shown below:

let arr3=new Array(90);
for(let i=0;i<=arr3.length-1;i++){
    arr3[i]=i;

}


//OBJECT
//What is object--js mai ik tareeka hai key value pairs ko hold krne ka 
let obj = {
    name : "Tanzeel Ul Huda Qadri",
    address:"Ahmad Nagar",
    profession:"WEB DEVELOPER",
    email:"tanzeelqadri042@gmail.com",
    password:"HElloo"

}
//Why object---->jab b apko aik se zyada value ko "ek hi element k baare mai store krna ho  " tab object banta hai

//difference b/w array and object
//for storing one or more element use array and for storing information about an element use object
//when to make an object----->when you want to store the info of one entity
//how to create an object--->two ways to create an object
let obj2={};
let obj3=new Object()
//how to access an object
let obj4 = {
    name : "Tanzeel Ul Huda Qadri",
    address:"Ahmad Nagar",
    profession:"WEB DEVELOPER",
    email:"tanzeelqadri042@gmail.com",
    password:"HElloo"

}

console.log(obj4.email,obj4.profession)