//Immediately invoed functions expressions (IIFE)

(function chai(){
    console.log("DB Connnected");

})

//GLobal scope se pollution remove karne ke liye we use IIFE functions !!
();

( () => {
    console.log("DB connnected")
})();