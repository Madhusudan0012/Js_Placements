// Singleton
//object literals 



const Jsuser ={
    name : "Madhusudan Singh Chauhan",
    age : 19,
    location : "Agra",
    email : "Madhusudanchuahan@mail.com",
    isloggedIn : false,
    //  [mySym]  : "myKey1",
};
// const mySym = Symbol('mySym');  // Define mySym as a symbol

// const obj = {
//     [mySym]: "myKey1",
// };

// console.log(obj);  // { [Symbol(mySym)]: 'myKey1' }

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser[mySym])

// Objects.freeze(Jsuser)
// Jsuser.email = "Madhusudansingh@gmail.co m"

Jsuser.greeting = function(){
    console.log("Hello Js User")  
}

console.log(Jsuser.greeting());

Jsuser.greetingTwo = function(){
    console.log('Hello Js User, $(this.name)');

}

console.log(Jsuser.greeting());

Jsuser.greeting2 = function(){
    console.log("Dil Mage More ");
}


