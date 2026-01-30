//if

if (2=="2"){
    console.log("executed"); 
} // it check only value

if (2==="2"){
    console.log("executed"); 
}// it check type with value

let temp = 37

if (temp >=37){
    console.log("it is very true: ");
}
else{
    console.log("it is false:")
}

let balance = 899;

if (balance>=500) console.log("Balance is good");
else console.log("Balance is not good");

//if else if ladder

if (balance < 500){
    console.log("balance is less than 500");

}else if (balance < 900){
    console.log("balance is less than 900");
    
    }else if (balance < 1200){
        console.log("balance is less than 1200");
        
     }else {
        console.log("balance is above the boundary");
        }

// it multiple conditions || is also used for or
const isLoggedIn = true;
const debitcard = true;

if (isLoggedIn && debitcard){
    console.log("Allow to buy a course ");
}
