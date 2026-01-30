const userEmail = "";//empty string is false value

if (userEmail) {
    console.log("user has email");
}
else{
    console.log("user has not email"); 
}

const userEmail1 = [];//empty array is true values

if (userEmail1) {
    console.log("user has email");
}
else{
    console.log("user has not email"); 
}

//falsy values 
// false , 0 , -0 , Bigint 0n ,"" , null , undefined , NaN

//Truthy values
// "0", "false" , " " , [] , {} , function(){}

//check array is empty or not
if(userEmail.length === 0 ){
    console.log("Array is empty")
}

//chech an object is empty or not
const obj = {};
if (Object.keys(obj).length == 0) {
    console.log("Object is empty")
}

//nullish coalescing operator (??):null, undefined
//in js is used to provide a default value only when a variable is null or undefined

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 25;
//val1 = undefined ?? 60;
//val1 = null ?? 20 ?? 60;
console.log(val1);


//turnary Operator
2 === "2" ? console.log("true") : console.log("false")

 