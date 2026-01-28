//create a object that is literal
const obj = {};

obj.name = "Prince";
obj.age = 19;
obj.friend = ["Het","dhrumit","jayraj"];
// console.log(obj);

const regularUser = { //you can nesting objects
    email : "Prince@google.com",
    fullname : {
        username : {
            firstname : "Prince",
            middlename : "arvindbhai",
            lastname : "chudasama"
        }
    }
}

// console.log(regularUser.fullname.username.firstname); //that is nesting of objects

const ob1 = {a:1,b:2};
// const ob2 = {c:3,d:4};

// const ob3 = Object.assign(ob1,ob2); // it merges the multiple objects and the {} is conventional that is used for appends all other objects append it is optional is if you using {} then remaining other is append upto {}
// console.log(ob1); //all another object append to the ob1
// console.log(ob3);
// const ob4 = {...ob1,...ob2};//this is also method for joining objects

// You can use array of multiple objects
let user = [
    {
        userid:1,
        userpassword:1000
    },
    {
        userid:2,
        userpassword:1001
    },
    {
        userid:3,
        userpassword:1002
    }
    
]
// console.log(user[1].userid);

// console.log(Object.keys(ob1));//it get all keys of ob1 object
// console.log(Object.values(ob1));//it get all values of ob1 object
// console.log(ob1.hasOwnProperty('a'));// it return a boolean value for key present or not

//Destructering //for simplicty dont we use ob1.this and this so it is very useful for mannual work and we can assign special variable for it
console.log(ob1);
const {a : a} = ob1;
console.log(a);

//API is Application programming interface 
//when our mannual work give to someone automation technique it is called API
//API returns in early In xml form now days it return into Json structure
//jSON structure usually key value pairs and nothing to name and key are always in  string format
// {
//     "name":"Prince",
//     "Age" :  19 ,
//     "number" : 8128762006
// }

//and also return in form array of objects
// [
//     {},
//     {},
//     {}
// ]












