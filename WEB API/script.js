let btn =document.querySelector('button')
let h5=document.querySelector('h5')


let flag=0;

btn.addEventListener('click',function(){
  h5.innerHTML = 'sending request...'
  h5.style.color = 'yellow'
 setTimeout(function(){
      if(flag ==0){
     h5.innerHTML='Sameer'
    h5.style.color = 'green'
    flag=1
   }else{
    h5.innerHTML='Stranger'
    h5.style.color = 'red'
    button.innerHTML = 'remove friend '
    flag=0
   }
 },700)
    
});


//setTimeout----delay;
//SetInteval----- controlled loop

// setInterval(() => {
//     console.log("hello")
// }, 1000);