//function
function greet (name){ //it is the defination of function
    console.log("Good Morning "+name);
    
}
console.log(greet);
;//it gives only reference to the where its define and scope
let name = "Prince"
greet(name);//it is a declaration and call


//add
function add(a,b){//here you dont pass any parameter its shows undefined
    return a+b;
};      //after returning the function doesn take any step
let sum = add(5,16);
console.log("Result :  ", sum);

function fact (num=1){//here it is a give default when not given any number it replace // it is called parameters.
    if(num==0 || num==1){
        return 1;
    }
    else {
        return num * fact(num-1);
    }
}

let number = 5;
let factorial = fact(number);//when not given any number it take default 'undefined' value//it is called aruments
console.log("the factorial is : ",factorial);

function calculateCartPrince(val1,val2,...num){//it is called rest operator 
    return num                               //when all arguments are not equal to
};                                        //parameter then ...it takes remaing
console.log(calculateCartPrince(200,400,500,1000));//values and gives a array of 
                        //that remaining values

//in function u can pass object as an arguments also
function handleObject (anyObject){
    console.log(`objects name is ${anyObject.name} and age is ${anyObject.age}`);
}

const ob1 = {
    name : "Prince",
    age : 19
}

// handleObject(ob1);//here you pass an object
// handleObject({
//     name:"het",
//     age:10
// })

//you can pass an array also
const myArray = ["prince",18];
function returnSecondValue (getArray){
    return getArray[1];
};
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([100,2000,500]));










