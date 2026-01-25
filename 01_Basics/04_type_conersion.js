let age = 18;
console.log(typeof(age));

let first_name = "Prince";
console.log(typeof(first_name));

let age1 = "18";
let valueInNum = Number(age1);
console.log(typeof(age1));
console.log(typeof(valueInNum));
console.log(valueInNum);

let rawAge = "18bdd";
let ageInNumber = Number(rawAge);
console.log(ageInNumber); //when incompatibe type cast it is shws an NAN

let score = null;
let scoreInNumber = Number(score);
console.log(scoreInNumber);  //when a null type cast into number it shows an 0

let score1 = undefined;
let score1InNumber = Number(score1);
console.log(score1InNumber); //when a undefined type cast into number it shows an NAN

let bool = true;
let boolInNumber = Number(bool);
console.log(boolInNumber); //when a bool is typecast it shows an 1 and 0

let isloggedIn = "";
let toBool = Boolean(isloggedIn);
console.log(toBool); // when a empty string is typecast in bool then if empty then false else true

let num = 26;
let numtostring = String(num);
console.log(typeof(numtostring));
console.log(numtostring);









