//ES6 Arrow functions 
//THis Keyword
// const user ={
//     username: "Madhusudan " ,
//     price : 999,


//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);

//     }

// }
// user.welcomeMessage()
// user.username ="Sam"
// user.welcomeMessage()
 
// console.log(this) //empty 


// function chai(){
//     let username = "madhusudan singh Chauhan"
//     console.log(this);

// }

// chai()

// const rohan = () => {
//     let username = "Madhusudan"
//     console.log(this);

// }
// rohan()


//*************************     Pure Arrow Functions******************** */

const addTwo = (num1 , num2 ) => {
    return num1 + num2;

}
console.log(addTwo(5,6));


const addtwo = (num1 , num2) => (num1+num2)
console.log(addtwo(4,5))


//implcit return and explit return 


const myArray = [2,3,4,5,6]
myArray.forEach()