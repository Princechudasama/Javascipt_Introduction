// why var is not used 
// if (true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// console.log(a);//a is not defines it is good
// console.log(b);//b is not defines it is good
// console.log(c);//c is execution so var doesnt follow block scope therefore we have not use

//conditional and loops statements blocks know global scope but global scope doesnt know any block scope 
const a = 100;

if (true) {
    let a = 10;
    const b = 20;
    console.log("Inner:",a)
}

console.log("Outside:",a);

//closure means  block scope knows global scope but global scope doesnt know any block scope 

function one(){
    const username = "Prince"; // 2 

    function two(){
        const web = "youtube.com";
        console.log(username);
    }

    //console.log(Web);

    two()
}

one() //first of all its run

//+++++++++++++++++ function as an variable +++++++++++++++++
// console.log(addOne(5)); //it is not allowed because use of variable before its declaration

// const addOne = function (num){
//     return num + 1;
// };





