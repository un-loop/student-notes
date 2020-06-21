- Binary tree's have 2 children at most
- Max heap parents are bigger then there children
- Min heap parents are smaller then there children
- Heap sort = from biggest to smallest
  - -1 / 2 = child to parent
  - *2 + 1 = parent to child *2 + 2
- hufftree dose not get modified once it's built (removes redundency)

- Algorythoms
  Bubble sort = array of intagers they may or may not be unique a number may or may not show up 2 times.

  6-21-20

  recursion = is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem.[1] Such problems can generally be solved by iteration, but this needs to identify and index the smaller instances at programming time. At the opposite, recursion solves such recursive problems by using functions that call themselves from within their own code. The approach can be applied to many types of problems, and recursion is one of the central ideas of computer science.

  Factorial = says to multiply all whole numbers from the chosen number down to 1.
- The factorial function is a mathematical formula represented by an exclamation mark "!". In the Factorial formula you must multiply all the integers and positives that exist between the number that appears in the formula and the number 1.

Here’s an example:

7! = 1 * 2 * 3 * 4 * 5 * 6 * 7 = 5.040

Fibonacci sequince
Fn = Fn-1 + Fn-2
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } if (n == 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}





