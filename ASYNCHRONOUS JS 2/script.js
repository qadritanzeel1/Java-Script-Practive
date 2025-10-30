//server ka code jab bhi server k liye hoga usually woh async nahi hoga par jab bhi request kahi aur jayegi woh kab tak response layegi ka koi baroosa nahi hai






// let pro = new Promise((res,rej)=>{
//     console.log("instagram se data laaav");
//     console.log("instagaram mai data collect karo");
//     console.log("instagram se error nahi  aaya")
//     res()
// })

// pro.then(()=>{
//     console.log("resolved");
// }).catch(()=>{
//     console.log("rejected")
// })



//callback hell

function stepOne(cb) {
    console.log("Step One");
    cb();
}

function stepTwo(cb) {
    console.log("Step Two");
    cb();
}

function stepThree(cb) {
    console.log("Step Three");
    cb();
}
stepOne(() => {
    stepTwo(() => {
        stepThree(() => {
            console.log("all steps done")
        })
    })
}
)


// function stepOne(){
//     return new Promise((res,rej)=>{
//         console.log("step one");
//         res()
//     });
// }
// function stepTwo(){
//     return new Promise((res,rej)=>{
//         console.log("step two");
//         res()
//     });
// }
// function stepThree(){
//     return new Promise((res,rej)=>{
//         console.log("step three");
//         res()
//     });
// }

// stepOne().then(stepTwo).then(stepThree).then(()=>{
//     console.log("All steps resolved");
// })


