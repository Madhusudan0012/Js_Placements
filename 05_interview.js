//primitive and non primitive 
//reference types 
// 7 types :
//strings 
//Number 
//boolean 
//null
//undefined 
//symbol : creatig unique value 
//Big Int : Scientific values are considered into it 
//Reference ( Non Primitive )
//Array, Objects 
//Functions 


const id  = Symbol('123');
const another_id = Symbol('123');

console.log(id === another_id);


const bigNumber = 874382746678264764823n
console.log(typeof(bigNumber))
console.log(bigNumber)

const heroes = ["Madhusudan singh Chauhan" , "Vinay Sheel Chauhan " , "nana"];
let myObj = {
    name: "Madhusudan singh Chauhan",
    age: 19,
}

const myFunction = function(){
    console.log("Hello life I'm Rocking soon");

}

console.log(typeof bigNumber);