//  jab bhi constructor banaoge aur kuch aisa mil gaya jo ki sab mai same hai to usse kabhi b direct constructor mai banana galat tareeka hota hai,par sahi tareeka hai prototype ko use krna kyunki prototype mai save karne par jitne b new k sath instance banaoge woh saare instance by default tumhare proto ki value ko hold karege


function Toffee(name){
this.name = name;
}
Toffee.prototype.price = 8;

let t1 = new Toffee("alpalebe");
let t2 = new Toffee("Kacha Aam");