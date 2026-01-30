//object_specific_loop
const myObject = {
    name : "prince",
    Age : 18,
    score : 90.99
}

//for..in give only keys as output in first parameter

// for (const key in myObject) {//it gives only key
//     console.log(key);
// }

// for (const key in myObject) {//it gives only key and then we displa using [] ope.
//     console.log(myObject[key]);
// }

for (const key in myObject) {//it gives only key and then we displa using [] ope.
    console.log(key + " :- " + myObject[key]);
}

//for..in iterate in array
arr = ["prince","Jayraj","het"];
for (const a in arr) {
    console.log(a);//it gives onle keys of array
}

arr = ["prince","Jayraj","het"];
for (const a in arr) {
    console.log(arr[a]);//it gives onle values of arrays
}

//map is not iterable so we cannot use for..in
const map = new Map();
map.set("Name","Prince");
map.set("Age",19);
map.set("Name",99.99);

for (const key in map) {
    console.log(key);//it shows nothing not error also 
}
