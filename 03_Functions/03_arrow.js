// arrow function doesnt contains this keywords
// context => value or core what is telling to us
//this keyword refers to the current context

const ob1 = {
    userName : "prince",
    Age : 19,

    greet : function (){
        console.log(`${this.userName} ,how are you`);//here you have to refers this.username to current object contex bcoz you give not any argument so any variable it is outside of the scope so  you have to take value from current object
        console.log(this)
    }
}

// console.log(ob1.greet());
// ob1.userName = "het";
// console.log(ob1.greet());


//in old time java script engines are only available in browser so it had window object =>for running event handler or any thing else global object is window
//nowdays javascript engines are separated so it not need to run browser any content so it refers to a empty object
// console.log(this);

// const chai = function (){
//     let username = "hitesh";
//     console.log(this);
// }
// chai();//it refers the global object 

// const chai = function (){
//     let username = "hitesh";
//     console.log(this.username);//it also not work bcoz in function it is not work
// }
// chai();

// const chai =  () => {//this is the syntax of arrow function
//     let username = "hitesh";
//   console.log(this.username);//it also not work like above so we can say that in
// }               //this keyword are not use in arrow function
// chai();

// const addTwo = (num1,num2) => num1+num2;//implicit use of arrow
// console.log(addTwo(20,5)); 

// const addthree = (num1,num2,num3) =>(num1+num2+num3);
// console.log(addthree(20,5,78));

const returnObject = () => ({username:"Prince"});//here object is return...
console.log(returnObject());






















