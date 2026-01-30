//The for...of loop in JavaScript is used to iterate over iterable values
//in array
// arr = ["Prince","het","Jayraj"];
// for (const a of arr) {
//     console.log(a);
// };

// //in string
// const name = "Prince";
// for (const a of name) {
//     console.log(a);
// }

//Maps => is use for storing data its provide order,unique not contains duplicates,key types as you want and iteration is easy over objects

const map = new Map();
map.set("name","Prince");
map.set("Age",18);
map.set("marks",99.99);

// console.log(map);//it stores values but doesnt duplicates and orederd

// for (const element of map) {
//     console.log(element);
// }

for (const [i,j] of map) {//here map divid into key as i and  value as j
    console.log(i + ":-" + j)
}

//for..of method doesn work on objects
let ob1 = new Object()
ob1 = {
    name : "Prince",
    age : 18,
    marks : 90.65
};

for (const i of ob1) {
    console.console.log(i);//it shows an ob1 is not iterable
}



