// Some advanced topic on arrays

// ===========Shallow copy================ copy that change in original
// const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

// const ingredientsListCopy = Array.from(ingredientsList);
// console.log(ingredientsListCopy);

// ingredientsListCopy[1].list = ["rice"," flour", "water"];
// console.log(ingredientsList); // that changed original arrray

//===========Deep copy =================copy that doesn change in original
// const ingredientsList1 = ["noodles", { list: ["eggs", "flour", "water"] }];

// const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList1));

// ingredientsListDeepCopy[1].list = ["rice","flour", "water"];
// console.log(ingredientsListDeepCopy)

// console.log(ingredientsList1); //that doesnt change 

//+++++++++++++++++++++ Arrays +++++++++++++++++++++++++++
const arr = [1,2,3,5,10000];
const arr1 = ["Prince","Chirag","Het"];
console.log(arr1[0]); //you can access this like string
console.log(arr1.slice(0,2));//you can use slicing

const arr2 = new Array(1,5,8,25,60); //you can make object of it
console.log(arr2);

arr.push(101); //array is mutable shallo copy you can append it
console.log(arr);
arr.unshift(0);//it add a number in first position
console.log(arr);

arr.pop();//it removes last element of it
console.log(arr);
arr.shift();//it removes first element of it
console.log(arr);

console.log(arr.includes(101));//it checks a element present or not

console.log(arr.indexOf(10000));//it return the index of element

console.log(arr.join());//it convert array into one string
console.log(typeof (arr.join()));

console.log("A : ", arr);
const arr3 = arr.slice(0,2);//slice doesn manipulate original array
console.log(arr3);
console.log("B :",arr);
const arr4 = arr.splice(0,2);//splice manipulate the original array
console.log(arr4);
console.log("c :",arr)

const boys = ["Prince","Jayraj","het"];
const girls = ["mital","shital","priyanka"];

// boys.push(girls); //it manipulate ori array and second array joins as a element
// console.log(boys);

const _class = boys.concat(girls); //it doesnt manipulate it returns only
console.log(_class);

const _class1 = [...boys ,  ...girls];//spreading technique use to concat which is recommded
console.log(_class1);

const anotherArr = [1,2,[3,4],[[5,6]]];
console.log("The element in [3][0][1] :",anotherArr[3][0][1]);//you can acces dimension
let real_anotherAree = anotherArr.flat(Infinity);//it converts all the dimensions in 1 flat arr
console.log(real_anotherAree);

console.log(Array.isArray("Prince"));//it check given is array or not
console.log(Array.from("Prince"));//it converts in array
console.log(Array.from({name:"Prince"},));//it doesnt contain any value because you not mentione it return []

score1=100;
score2=200;

console.log(Array.of(score1,score2));//instead of from use of for bind multiple items into one array




















