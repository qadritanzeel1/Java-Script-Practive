//csk ,mi,rcb,kkr,srh,dc,pbks,rr,lsg,gt


let arr = [
  {
    team: "KYU NAHI HO RAHI PADAI",
    primary: "crimson",
    secondary: "black"
  },
  {
    team: "TUJSE NA HOPAYEGA",
    primary: "darkred",
    secondary: "white"
  },
  {
    team: "PAKAD PAKAD PAKAD!",
    primary: "navy",
    secondary: "orange"
  },
  {
    team: "YE KYA DEKHNA PAD RAHA HAI ACHA HAI MAI ANDA HU",
    primary: "purple",
    secondary: "yellow"
  },
  {
    team: "KYA GUNDA BANEGA RE TU",
    primary: "darkgreen",
    secondary: "lightgrey"
  },
  {
    team: "AAJ TOH G*** FATI PADHI HAI",
    primary: "firebrick",
    secondary: "beige"
  },
  {
    team: "CHUP BSDK, TU NALLA HAI",
    primary: "black",
    secondary: "tomato"
  },
  {
    team: "BHAI MAI TOH *** GAYA",
    primary: "maroon",
    secondary: "khaki"
  },
  {
    team: "KHUD KI PHATTI HUI HAI AUR GYAN DE RAHA HAI",
    primary: "steelblue",
    secondary: "pink"
  },
  {
    team: "AAJA BETA CLASS LENE",
    primary: "darkslategray",
    secondary: "lightgreen"
  }
];



let btn = document.querySelector('button');
let h1 = document.querySelector('h1');

document.addEventListener('click',function(){
    let num=Math.floor(Math.random()*arr.length);
    let winner = arr[num];
    h1.innerHTML = winner.team
    h1.style.color = winner.primary
    h1.style.backgroundColor = winner.secondary

})