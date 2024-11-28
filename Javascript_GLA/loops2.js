// const array = [1,2,3,4,5,67];
// for(let num of array){
//     console.log(num);
// }

// for(let i = 0 ;i<array.length ;i++){
//     console.log(array[i]);

// }

//Objects in Javascript 
//A type of Data Structure 
const person = {
    name : "Madhusudan ",
    Lastname :"Chauhan",
    gender : "Male", 
    printhello : function(){
        return "hello world";
    }



}
console.log(person.gender);
console.log(printhello());

for(let key in person){
    console.log('$(key) : $(person(key))')
}