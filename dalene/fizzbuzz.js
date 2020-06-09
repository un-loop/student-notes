/* - Write a program in code that prints the numbers from 1 to 100. 
- three = But for multiples of three print "Fizz" instead of the   number 
 - five = for
      the multiples of five print "Buzz". 
- threefive = For numbers which are
      multiples of both three and five print "FizzBuzz".*/

for (let i = 1; i <= 100; i++) {
  console.log(i);
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  }
}
