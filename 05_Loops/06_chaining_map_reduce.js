//map  use like filter but here all items must be executed
const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const num = myNumbers.map( (items) => (items+10));
// console.log(num);

//using map and other function we can use in chainig 
//use any number of function and append its
const chain = myNumbers.map( (items) => items*10)
                       .filter( (items) => items>40)
                       .filter( (items) => items<90);
console.log(chain);

//reduce method :- used for add or multiply all iterable variable

const a = [1,2,3,4,5,6,7,8,9];

// const sum  = a.reduce( function (acc,curr)  {
//     console.log(`acc : ${acc},curr : ${curr}`);
//     return acc + curr;
// },0);
// console.log(sum)

const sum  = a.reduce( (acc,curr) =>  {
    console.log(`acc : ${acc},curr : ${curr}`);
    return acc + curr;
},0);
console.log(sum)


