//DOM-->Document Object Model
//4 pillars of DOM

//1.Selection of an element
//2.Changing HTML
//3.Changing CSS
//4.Event listener

// let h1=document.querySelector('h1');

// document.addEventListener('click',function(){
//     h1.innerHTML = 'Function executed';
//     h1.style.color = 'white'
//     h1.style.fontSize='100px';
//     h1.style.backgroundColor='black'
// })  



let btn = document.querySelector('button');
let h5 = document.querySelector('h5');

let check = 0
document.addEventListener('click',function(){

    h5.innerHTML = "Sending Request..."
    h5.style.color= 'yellow'
  setTimeout(function(){
      if(check==0){
        h5.innerHTML = "Sameer";
    h5.style.color='green'
    btn.innerHTML = "Remove Friend"
    check = 1;
    }else{
        h5.innerHTML = "Stranger";
          h5.style.color='red';
    btn.innerHTML = "Add Friend";
    check=0;
        
    }
  },700)
})