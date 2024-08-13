const name = "                                                             Madhusudan singh chauhan"
const repocount = 50

console.log(name + repocount + "Value");

const gameName =new String("Madhusudan");
console.log(typeof name);

//Methods are the key to conquer the concepts of the strings of javascript 
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf('a'));

const newString = name.substring(0,4)
console.log(newString);
//Method  Slice used to Print reverse 


console.log(name.slice(-8,4))

console.log(name.trim());

const url = "madhusudan.com%20"

url.replace('%20' , '-')
console.log(url)