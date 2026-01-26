  const name = "prince"
  const repocount = 10;

  console.log(typeof(name));
  

  // console.log(name+repocount+"Prince"); This is outdated this is not advisable
  
  console.log(`Hello my name is ${name} and my repo count is ${repocount}`); //String interpolation

  let first_name = new String("Prince"); //string is a object that is another way to declare and initilize the variable that consist of key as index and value as characters
  console.log(first_name);
  console.log(first_name.__proto__); // this is the proof that string is a coll. of key value pair 
  

  console.log(`The second character of first_name ${first_name[1]}`); //it is a accesing only
  console.log(`The second character of first_name ${first_name.charAt(1)}`); //it is a method that takes index as input and give that indexed value
  console.log(`The index  of i in  first_name ${first_name.indexOf('i')}`); //it is a method that takes char as input and give that index value

  console.log(`The length of string is : ${first_name.length}`); //lenght of string it is not function

  console.log(first_name.toUpperCase());//converts into uppercase 
  // string is  mutable                                           // Stack:
                                                                  //sobj→ reference
                                                                  //s3   → "HELLO"

                                                                  //Heap:
                                                                //String { "hello" }

  console.log(first_name.toLowerCase());//converts into lowercase

  console.log(first_name.substring(0,3));//it divides in substring
  
  console.log(first_name.slice(-6,3));//it divides in substring here you can use neg value

  const email = "   princechudasama@googl.com     ";
  console.log(email);
  console.log(email.trim()); // it trims a leading and trailing space
  console.log(email.trimStart()); // it trims a leading  space
  console.log(email.trimEnd()); // it trims a  trailing space

  const url = "https://princechudasama.com/java%20introduction";
  console.log(url.replace('%20','-')); //it replces value as you as want where you want

  console.log(url.includes('https://')); //it returns true if it contains the value

  const yourname = "Princekumar Aravindbhai Chudasama";
  console.log(yourname.split(' ')); //it return the array of any separated basis here white space is separator

  const newName = yourname.concat(" Hello"); // it concat any string to the present string
  console.log(newName) ;

  

  
  
  


  
  
  


  

  
  
  
  



  


  