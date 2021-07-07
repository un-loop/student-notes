var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

let changeMe = true;
changeMe = false;
console.log(changeMe);

const entree = "Enchiladas";
console.log(entree);
entree = "Tacos";

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
console.log('The value of levelUp:', levelUp);
console.log('The value of powerLevel:', powerLevel);
console.log('The value of multiplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);

let favoriteAnimal = 'Dog';
console.log('My favorite animal: ' + favoriteAnimal);

let myName = "Dalene";
let myCity = "The Dalles";
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable); = string
newVariable = 1;
console.log(typeof newVariable); =number

const Kelvin = 293;
// The forecast today is 293 Kelvin.
const celsius = Kelvin - 273;
//Let’s convert Kelvin to Celsius.
let fahrenheit = celsius * (9 / 5) + 32;
//Use this equation to calculate Fahrenheit
fahrenheit = Math.floor(fahrenheit);
//Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. 
console.log(`The temperatureis ${fahrenheit} degrees Fahrenheit.`);
The temperatureis 68 degrees Fahrenheit.

// Variables hold reusable data in a program and associate it with a name.
// Variables are stored in memory.
// The var keyword is used in pre - ES6 versions of JS.
// let is the preferred way to declare a variable when it can be reassigned, and const is the preferred way to declare a variable with a constant value.
// Variables that have not been initialized store the primitive data type undefined.
// Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
//     The + operator is used to concatenate strings including string values held in variables
// In ES6, template literals use backticks` and ${} to interpolate values into a string.
// The typeof keyword returns the data type (as a string) of a value.