//  const tinderUser = new Object() //singleton obejct 

 const tinderUser = {} // non singleton obejcst 

   tinderUser.id = "123abc"
   tinderUser.name = "Madhusudan Singh "
   tinderUser.isLoggedIn = false



//  console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "Madhusudan Singh Chauhan",
            lastname: "Chauhan"
        }

    }
}

console.log(regularUser.email);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a" , 2: "b" ,  3 : "c"}
const obj2 = {4: "D"  , 5 : "E" , 6: "F" }
// const obj3 = Object.assign({} , obj1 , obj2 )


const obj3 = {...obj1 , ...obj2}
console.log(obj3);


//object assign javascript object return values 

const user =[
    {
        id:1,
        email: "madhusudan@gmail.com"
    }
]


user[1].email
console.log(tinderUser);


console.log(object.keys(tinderUser));
