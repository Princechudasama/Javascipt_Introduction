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

  console.log(first_name.);
  
  
  


  

  
  
  
  



  


  