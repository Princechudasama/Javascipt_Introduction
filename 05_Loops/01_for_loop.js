//for
// const array = [1,2,3,4,5];

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);

// };

//displa of tables 0 to 10
// for (let index = 1; index <= 10; index++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(index + "*" + j + "=" + index * j);
//     }
// }

//break and continue

//break is break loop and terminat execution
// for (let i = 0; i < 10; i++) {
//     if (i==5) {
//         console.log("5 is detected");
//         break;
//     }
//     console.log(i)
// }

//continue is skip only 1 iteration
for (let i = 0; i < 10; i++) {
    if (i==5) {
        console.log("5 is detected");
        continue;
    }
    console.log(i)
}
