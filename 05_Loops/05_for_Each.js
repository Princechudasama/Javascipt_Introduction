//for..each
const arr = ["Prince","Jayraj","het"];

// arr.forEach(function (items){//here call back function so 
//     console.log(items);      //doesnt use function name
// })                           

// arr.forEach((items) => {//here use of arrow function
//     console.log(items);
// })

// function print (a){
//     console.log(a);
// }
//arr.forEach(print);//here only use reference not execution of function

//for..each contains item , index, arr
// arr.forEach((item,index,a) => {
//     console.log(item,index,a);
// });

//iteration in array of objects

let arr1 = [
    {
        name : "Prince",
        Age : 18
    },
    {
        name : "het",
        Age : 19
    },
    {
        name : "Jayraj",
        Age : 20
    }
]

// arr1.forEach((items) => {
//     console.log(items['name']);//items.name you can use
// });



//use of filters 
// let a  = arr1.forEach( (items) => {
//     console.log("ex") //it executes but did not returns any value
//     return items;
// })
// console.log(a)//it is not stored in any variable beacuse doesnt return any number

// let b = arr.filter( (items) => {
//     return items;
// });
// console.log(b);
// console.log(typeof b);//it return object

// num = [1,2,3,4,5,6,7,8,9]
// let c = num.filter( (items) => (items>3));//it is implicite return
// console.log(c)

//for..each as filter
// newNum = [];
// num.forEach((items) => {
//     if(items>3){
//         newNum.push(items);
//     }
// })
// console.log(newNum);//it shows same as upper output

 //use of filters
 const books = [
  { name: "Clean Code", size: 450, type: "Programming" },
  { name: "You Don't Know JS", size: 320, type: "Programming" },
  { name: "Atomic Habits", size: 280, type: "Self-Help" },
  { name: "The Alchemist", size: 200, type: "Fiction" },
  { name: "Deep Work", size: 300, type: "Productivity" },
  { name: "Java: The Complete", size: 850, type: "Programming" },
  { name: "Think and Grow Rich", size: 240, type: "Motivation" },
  { name: "Rich Dad Poor Dad", size: 260, type: "Finance" },
  { name: "Eloquent JavaScript", size: 420, type: "Programming" },
  { name: "The Psychology of Money", size: 290, type: "Finance" }
];

// let userFilter = books.filter( (items) => (items.type =="Programming"));
// console.log(userFilter);

let userFilter1 = books.filter( (items) => {
    return (items.type="Programming" && items.size>=300)
});
console.log(userFilter1);


