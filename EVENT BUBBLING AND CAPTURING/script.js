let arr = [
    {
        username:"Tanzeel",
        age:25,
       changeProperty:"Follow",
        specialisation:"Full Stack Web Developer",
        image: "https://i.pinimg.com/736x/a6/3c/37/a63c37c39f71873d49373e14d8f14703.jpg"
    },
    {
        username:"Ahasan Wani",
        age:29,
        changeProperty:"Follow",
        specialisation:"Front End Web Developer",
        image: "https://i.pinimg.com/736x/d7/cc/b6/d7ccb62904bba91317e3d08e5e7f62c4.jpg"
    },
    {
        username:"Sameer Ahmad Meer",
        age:24,
        changeProperty:"Follow",
        specialisation:"Backend Web Developer",
        image: "https://i.pinimg.com/736x/01/77/6d/01776d9b450129b4b1fac6ab8940ac27.jpg"
    },
    {
        username:"Hashim Qadri",
        age:22,
        changeProperty:"Follow",
        specialisation:"JavaScript Expert",
        image: "https://i.pinimg.com/736x/84/d1/58/84d15891b9789fdf945a13ed7bfd8f3f.jpg"
    },
    {
    username:"Usman Qadri",
        age:27,
        changeProperty:"Follow",
        specialisation:"System Design Expert",
        image: "https://i.pinimg.com/736x/e7/7e/6e/e77e6e686b09b8540d9608af439081af.jpg"
    },
]

let body = document.querySelector('body');
function heroFnc(){
    let sum = " "
arr.forEach(function(elem,idx){
    sum = sum + ` 
     <div id="card">
        <img src="${elem.image}" alt="" srcset="">
        <h1>${elem.username}</h1>
        <h4>${elem.specialisation}</h4>
        <button id=${idx}>${elem.changeProperty}</button>
    </div>`
});


body.innerHTML = sum;
}

heroFnc()

body.addEventListener('click',function(dets){
    let gold=arr[dets.target.id];
    if(gold.changeProperty=="Follow"){
        gold.changeProperty="Unfollow"
    }else{
        gold.changeProperty="Follow"
    }
    heroFnc()
    
})