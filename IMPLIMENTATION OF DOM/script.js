let card = document.querySelector('#card')
let btn = document.querySelector('button');


document.addEventListener("click",function(){
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    card.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
})