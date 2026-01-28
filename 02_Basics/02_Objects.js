//Singleton using construction method
//Object.create;

//object literals
// in array keys are already defined 0,1,...
//but in objects keys are depends upon we
const sym1 = Symbol("Sym");//symbol is a key below

const Juser = {
    name:"prince",
    "full_name":"Princechudasama",
    age:18,
    location:"Rajsthan",
    email:"Princechudasama@gmail.com",
    isLoggedin:false,
    lastLoginDay:["Monday","Saturday"],
    [sym1]:"Symbol1"//first that is symbol but when the call by objects it turn into string
}

console.log(Juser["name"]);//it can also used bcoz name contains string
console.log(Juser.name);//it can also used

console.log(Juser["full_name"]);//when it is not possible so we have to by object.properties
console.log(Juser.full_name);

console.log(Juser[sym1]); //here we modify the property of sym and printed
console.log(typeof Juser[sym1]); //here you can check also its type

Juser.age = "Princechudasama123";
console.log(Juser["age"]);//here "" beacuse modifies the data in form of string

//Object.freeze(Juser);//you can freeze the object so doesnt make changes of it
Juser.age = "Princechudasama786";//after freezing the object doesnt made changes
console.log(Juser);

// we have to assign a function to object so we have to unfreeze first
Juser.greetings = function greetings() {
    console.log("hello user");
};

console.log(Juser.greetings);//it gives only reference of function
console.log(Juser.greetings());//it gives execution of function

Juser.greetings1 = function greetings1() {
    console.log(`Hi ${this.name}`);
};

console.log(Juser.greetings1());












