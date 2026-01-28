//Singleton using construction method
//Object.create;

//object literals
// in array keys are already defined 0,1,...
//but in objects keys are depends upon we
const sym1 = Symbol("Symbol");//symbol is a key below

const Juser = {
    name:"prince",
    "full_name":"Princechudasama",
    age:18,
    location:"Rajsthan",
    email:"Princechudasama@gmail.com",
    isLoggedin:false,
    lastLoginDay:["Monday","Saturday"],
    [sym1]:"Symbol1"
}

console.log(Juser["name"]);//it can also used
console.log(Juser.name);//it can also used

console.log(Juser["full_name"]);//it is not possible so we have to by object.properties
console.log(Juser.full_name);



