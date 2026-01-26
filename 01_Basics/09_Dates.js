// ============= Dates in java script ====================
//generally Dates in java script is a number milisecond that calculate for 01 / 01 / 1970

// let mydate = new Date(); //default constructor returns latest zonal date
// console.log(mydate);

// console.log(mydate.toString());//return a readable string
// console.log(mydate.toDateString());//return a readable Datestring that only consist date and day
// console.log(mydate.toISOString());//return a default string
// console.log(mydate.toJSON());//return a default string

// let createdDate = new Date(2026,1,28,5,59,59); //we can explicitely gives month index in js use +1 means for jan it is 0 index bcoz date is object 
// console.log(createdDate.toLocaleString());

// let createdDate1 = new Date("01-14-2026"); //we can explicitely give a date in formate of yyyy-mm-dd and modification can be accepted usa based only
// console.log(createdDate1.toLocaleString());

let dob = new Date("07-28-2006"); //u can use let dob = Date.now()

console.log(Date.now());//gives upto time from 01/01/1970 for today
console.log(dob.getTime());//gives upto time for dob object

console.log(dob.getDay());
console.log(dob.getMonth()+1);//give month and day as well many methods








