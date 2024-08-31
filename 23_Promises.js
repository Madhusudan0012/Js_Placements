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