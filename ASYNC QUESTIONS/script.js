//Task:Create  a function orderFood that returns a promise.it should resolve after 2 seconds with "Pizza delivered"

//Bonus:Add a chance to reject with delivery failed;

// function orderFood(){
//     return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         let chance = Math.random() < 0.7

//         if(chance) res()
//         else rej()
//     },2000)
//     })
// }


// orderFood()
// .then(function(){
//     console.log("🍕Pizza delivered");
// })
// .catch(function(){
//     console.log("Delivery failed")
// })



//chained promises :User --> Posts -->Comments

//Task:
// 1.create  getUser()-> resolve with {id:1 name:"tanzeel"}
// 2.getPosts(userId)->resolve with list of post titles
// 3.getComments(postId)->resolve with comments 

//chain them together using .then() and log the final output. 