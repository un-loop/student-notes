// for(let i = 0; i < 100; i++){
//  if (i % 3 == 0 && i % 5 == 0 ) {
//     console.log("Fizzbuzz");
// } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//             console.log("Buzz");
//             } else {
//                 console.log(i);
//             }
//         }
    
for (let i = 1; i <= 100; i++) {
    switch(true) {
        case  (i % 3 === 0 && i % 5 === 0):
            console.log('Fizzbuzz');
            break;
        case  ( i % 3 === 0):
            console.log('Fizz');
            break;
        case (i % 5 === 0):
            console.log('Buzz');
            break;
        default:
            console.log(i);

    }
}