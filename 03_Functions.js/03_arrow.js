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

console.log(ob1.greet());
// ob1.userName = "het";
// console.log(ob1.greet());


//in old time java script engines are only available in browser so it had window object =>for running event handler or any thing else
//nowdays javascript engines are separated so it not need to run browser any content so it refers to a empty object
console.log(this);

