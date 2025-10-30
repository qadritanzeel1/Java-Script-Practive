let btnAdd= document.querySelector("#add");
let btnRemove=document.querySelector("#remove");
let h5 = document.querySelector("h5");

btnAdd.addEventListener('click',function(){
    h5.innerHTML = "Friends";
    h5.style.color="grey";

    btnAdd.innerHTML = "Added";
    btnAdd.style.backgroundColor = "#abb4b4"

    btnRemove.innerHTML="Remove Friend";
    btnRemove.style.backgroundColor = "#465252"
})

btnRemove.addEventListener('click',function(){
    h5.innerHTML = "Stranger";
    h5.style.color="#abb4b4";

    btnAdd.innerHTML = "Add Friend";
    btnAdd.style.backgroundColor = "#465252"

    btnRemove.innerHTML="Removed";
    btnRemove.style.backgroundColor = "#abb4b4"
})