// the promise Object represents the eventual completion or failure of an asynchronous operation and its resulting value
//1.netwok call , file access(Kernel) , Database request , password encryption deryption
// it has states 1.pending 2.fullfilled 3.rejected

//promises create

// const promiseOne = new Promise(function(resolve,reject){
//     //Async task any
//     setTimeout(function(){
//         console.log("Async task 1");
//         resolve();//its invoke then part//it like return 
//     },1000)
// }) //here alone it is run after 3 second but not executed then part therefor resolve method used to invoke the then part

// promiseOne.then(function(){
//     console.log("Async task is 1 complete");
// })


// //another method

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();//its return anything or result you can say
//     },500)
// }).then(function(){
//     console.log("Async task is 2 complete")
// })

// //resolve returns a value or set of values
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         const ob = {
//             username : "Prince",
//             pass : "1234"
//         }
//         resolve(ob)//it return object also
//     },250)
// }).then(function(obj){
//     console.log(`the name is : ${obj.username} and the passeword is ${obj.pass}`)
// });

//use of chaining and catch and finally

new Promise(function(resolve,reject){
    setTimeout(function(){
        let a = false;
        if(!a){
            console.log("Async task is 3");
            resolve({username:"Prince",age:18})
        }
        else{
            reject("error : something went wrong");
    }
    },1000) 
}).then(function(user){
    console.log(user);
    return user.username
}).then((user)=> {
    console.log(user);
}).catch(function(e){
    console.log(e);
}).finally(()=>console.log("resolved or reject comp."))

//you can use for consume promise Async await

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let a = true;
        if(!a){
            console.log("Async task is 3");
            resolve({username:"Prince",age:18})
        }
        else{
            reject("error : something went wrong");
    }
    },1000) 
})

async function consumePromiseFour() {//it needs to be called
    try {
        const response = await promiseFour;
        console.log(response);
    } catch (e) {
        console.log(e)
    }
}

consumePromiseFour();


//use of fetch api simplifice the work of promises and async await

// async function gitApi() {
//     try {
//         const response = await fetch("https://api.github.com/users/Princechudasama");
//         const data = await response.json();//it is also a asynchornous so it have to await
//         console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// }

// gitApi();

//use of fetch api use of then and catch
fetch('https://api.github.com/users/Princechudasama').then(function(response){
    return response.json()
}).then((data)=>{
    console.log(data); 
}).catch((e)=>console.log(e));

/*
fetch api is high priority over set timeout and setinterval like webapis
=> when we fire query from fetch it two major work start first of fall in global context it allocate some memory for variable data and for fullfillment and another where for rejection 
=> another work is in web api or node start for network request it is fullfill or not
=>whenever network fullfill its store into variable and then in global execution environment
*/



