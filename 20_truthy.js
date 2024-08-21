const userEmail = "Madhusudan.ai"


if(userEmail){
    console.log("Got user emali");
}else{
    console.log("Don't have user ")
}

//***************** */

//falsy value 
// false, 0 , -0 , bigInt  0n , "" , null , undefined , NaN 

//Truthy values 
//"0" , "false" ," " , [] , {} , function(){}

if(userEmail.length === 0) {
    console.log("Array is Empty");

}

const emptyObj = {}


if(Object.keys(emptyObj).length === 0){
    console.log("yessss");
}

//Nullish Coalescing Operator(??) : null undefined 

let val1;
// val1 = 5??10
val1 = null ??10
val1 = undefined??15
val1 = null ?? 10 ??100

console.log(val1)

//ternary operator

condition ? true : false
//goal is totaly differrent form perious one 

const iceTeaprice = 100
iceTeaprice >= 80 ? console.log("less than 80");

