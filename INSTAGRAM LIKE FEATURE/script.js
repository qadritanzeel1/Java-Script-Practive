let card = document.querySelector('#card');
let love = document.querySelector('i');

card.addEventListener("dblclick",function(){
setTimeout(function(){
    love.style.transform= "translate(-50%,-50%)scale(1)";
    love.style.opacity = "0.8"
},100)
setTimeout(function(){
    love.style.opacity = "0"
},1500)
})