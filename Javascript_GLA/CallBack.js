const addition = (num1 , num2) =>{
    return num1+num2;
}
const sumOfNumber = (num1, num2 , callback) =>{
    return callback(num1,num2);
}
console.log(sumOfNumber(5,5,addition));

function fatchDatafromServer(callback){
    setTimeout function(){
        const data = {
            name : "Madhusudan Singh ",
            age : 19
        
        };
        callback(data);
    } 1000);
}
    
