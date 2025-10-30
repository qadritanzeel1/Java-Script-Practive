//Object oreinted programming---->objects ko create krna jo ki sirf data hold na kare balki unki functionality b hold kare,aur aisey objects ko create karna with a blueprint model



//when js has no classes concept we use constructor fnc()<-------old way
// function Cupcake(){
// this.name= "Tanzeel"
// }

// let bakery = new Cupcake();

// console.log(bakery)

// function Cupcake(flavour,price,expiry){
//     this.flavour = flavour
//     this.price = price
//     this.expiry = expiry
// }

// let godown1= new Cupcake("chocolate",70,"16-10-2025");
// let godown2= new Cupcake("vanilla",95,"14-10-2025");
// let godown3= new Cupcake("mango",50,"5-10-2025");

// console.log(godown1)
// console.log(godown2)
// console.log(godown3)


// now we are  going to do this through class


class Cupcake{
    constructor(flavour,price,expiry){
        this.flavour = flavour
        this.price = price
        this.expiry = expiry
    }
}

let g1=new Cupcake("chocolate",70,"17-10-2000")
let g2=new Cupcake("vanilla",100,"19-10-2000")
let g3= new Cupcake("orange",60,"09-10-2000")

console.log(g1);
console.log(g2);
console.log(g3);
