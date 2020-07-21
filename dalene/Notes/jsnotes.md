Numbers, Strings, and Booleans:
-strings = words and characters as in a string of one lettr characters in " or '.
-you can connect strings numbrs and booleans with concatenation.
-booleans are only trur or false.
-numbers dont need " or ".

    while loop
let friends = 0;
    while (friends < 10) {
        friends = friends + 1;
        friends += 1;
        friends ++;
        ++friends;
        <!--thes do all the same thing -->
    }
    console.log(friends); = 10

    for loop
let friends = 0;
    for (let i = 0; i < 10; i++>) {
        friends++
    }
    console.log(friends); = 10

A function is a bit of re-usable code
    function addTwo(number) {
  return number + 2;
}
const finalAnswer = addTwo(5);
console.log(finalAnswer); = 7

Builtins:
are functions that already exist.
-sentence targets a whole sentence
-Math.floor rounds down
-Math.max returns the biggest
-Math.min returns the smallist
-Math.cill rounds up

-Objects are not orderd they go in {}
-Arrays are orderd they go in []
-First element in an array is 0
-.push adds to the end of an array
-.pop removes the last item in an array
-The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
-The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
-you can access an Array item using the index position like [0]
-.shift will remove an item from the beginning of an Array
-.unshift will add an item to the beginning of an Array
-How to console.log everythig in an array
            const cities = [
        "Seattle",
        "San Francisco",
        "Salt Lake City",
        "Amsterdam",
        "Hong Kong"
        ];

        // method 1 (FOR LOOP)
        for (let i = 0; i < cities.length; i++) {
        console.log(cities[i]);
        }

        // method 2 (goes over every item in the array once)
        cities.forEach(function(city) {
        console.log(city);
        });
        RESULT
        "Seattle"
        "San Francisco"
        "Salt Lake City"
        "Amsterdam"
        "Hong Kong"
        "Seattle"
        "San Francisco"
        "Salt Lake City"
        "Amsterdam"
        "Hong Kong"
        undefined

-The Map object holds key-value pairs and remembers the original insertion order of the keys
-The sort() method sorts the elements of an array in place and returns the sorted array
-&& = and
-|| = or
-The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
-JASMINE.COM is a javascript testing framework to test your code

-DOM = document object model
-JavaScript can over ride CSS
-use alert for debuging purposes
-The EventTarget method addEventListener() sets up a function that will be called whenever the specified event is delivered to the target.(should be on a button)

- Like every other operation, is coercion helpful in a equality comparison or not?
- By becoming a better dev i should be making critical thinking decisions for myself
- == is not about comparisons with un known types.  == is about comparisons with known types optionally where conversions are helpful.
- Undeclared = never declared any where
- undefined = has been declared but dose not have a value 
- Function is a collection thats doing something
- function expression =  its assigned as a value some where
- Functions are values that can be assigned to variables, and can be passed as arguments to other functions or they can be returned from functions.
- Closure is when a function "remembers" the variables outside of it, even when you pass that function else ware.