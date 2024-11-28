new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(() => {
        resolve({username: "chai" , email: "madhusudanchauhan62@gmaill.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);

})

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "Madhusudan Singh Chauhan", password : "123"})
        }else{
            reject('ERROR : something went wrong ')
        }

    }, 1000)
})


const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);

}).catch(function(error){
    console.log(error);
})

