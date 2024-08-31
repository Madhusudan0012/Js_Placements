
// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task 
//     // DB calls
//     setTimeout(function(){
//         console.log("Async task is completed");

//         resolve();
//     }, 1000);
// });

// promiseOne.then(function(){
//     console.log("Promise consumed");
// });

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
})