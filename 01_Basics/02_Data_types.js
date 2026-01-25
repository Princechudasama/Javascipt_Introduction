// const { StrictMode } = require("react")

// use StrictMode; //"use strict" in JavaScript turns on strict mode, which makes JavaScript more secure, predictable, and error-friendly.

console.log("This is the file for data types");

// for any documentation mdm And tc39.es

let first_name = "Prince"
let age = 19
marks = 100
let number;

// number = 2 to power of 53
// bigInt
// string = ""
//boolean = True or False
// null = not a num or big num or standalone value
// undefined =  untill not assign any value
// symbol = unique
// object = it is represent via whole row of any table and just like it

// use of typeof
console.log(typeof "");
console.log(typeof null); //it shows an object class
console.log(typeof undefined);//it shows an undefined class
console.log(typeof(NaN)); //it shows an number class

// primitive directly allocate content first
// 7 types : string , number, boolean, null, undefined, symbol,bigInt
let string1 = "Prince";
const num = 1123;
let isLoggedIn = true;
let temperature = null;
let varUndefined;
let bigNumber = 8128762006n

let sym = Symbol('123');
let sym1 = Symbol('123');
//console.log(sym == sym1); //it is a false although it is same 

//Reference -- call refenrce only allocate space and address first
//Array, Objects,Functions
let array1 = ["Prince","jayraj","het"];

let obj1 = {
    name : ["Prince","Jayraj","het"],
    age: [10,19,25]
}
console.table(obj1);

let hello1 = function hello () {
    console.log("hello world");
    
}

console.log(typeof(NaN)); // null - object
                          // array - object but function
                          // object - object but function
                          // undefined - undefined
                          // nan - number
                          // function - function but object function

//primitive => stack (call by value) variable are always take stack memory 

let a = 123;           // stack is created
let b = a;             //                   
a = 245;               //    2.b=a
                       //    1.a=123  3.a=245                    
console.log(a);
console.log(b);

//non primitive => heap (call by reference)
let obj =  {
    Name : "Prince",         // stack              //heap
    marks : 100              //                    //
}                            // 2.obj2-------------//------below    
let obj2 = obj;              // 1.obj---------------------{
                            //                     //       name : "Prince",
                            //                     //       marks : 100
                            //                            }
obj.Name = "Sunil";
obj.marks = 99;

console.log(obj);
console.log(obj2);


