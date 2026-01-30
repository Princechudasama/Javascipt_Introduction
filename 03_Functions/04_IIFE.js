//Immediately Invokes Function expression
//used to prevent global scopes pollution... ()()

 (function f1 () {//named IIFY
    console.log("Db connected");
 })();//here you dont need to say explicitely that function call
//you have to ; use for  separate 2 IIFY function

 ( (name) => (console.log(`the name is ${name}`)//Unnamed IIFY
) )("Prince");//here you can give arguments ...


(function name () {
   console.log("Prince")
})();//it is valid

(() => {
   console.log("Prince1")
})();//it is also valid


