const hobbies = ["code", "bead", "netflix"];
console.log(hobbies);

const famousSayings = [
  "Fortune favors the brave.",
  "A joke is a very serious thing.",
  "Where there is love there is life.",
];
let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

let groceryList = ["bread", "tomatoes", "milk"];
groceryList[1] = "avocados";

let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];
const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];
condiments[0] = "Mayo";
console.log(condiments);
condiments = ["Mayo"];
console.log(condiments);
utensils[3] = "Spoon";
console.log(utensils);

const objectives = ["Learn a new languages", "Read 52 books", "Run a marathon"];
console.log(objectives.length);

const chores = ["wash dishes", "do laundry", "take out trash"];
chores.push("clean room", "sweep");
console.log(chores);

const chores = [
  "wash dishes",
  "do laundry",
  "take out trash",
  "cook dinner",
  "mop floor",
];
chores.pop();
console.log(chores);

const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];
groceryList.shift();
console.log(groceryList);
groceryList.unshift("popcorn");
console.log(groceryList);
console.log(groceryList.slice(1, 4));
console.log(groceryList);
const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);

const concept = ["arrays", "can", "be", "mutated"];
function changeArr(arr) {
  arr[3] = "MUTATED";
}
changeArr(concept);
function removeElement(newArr) {
  newArr.pop();
  removeElement(concept);
  console.log(concept);
}

const numberClusters = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const target = numberClusters[2][1];

let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];
secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push("to", "Program");
secretMessage[7] = "right";
secretMessage[0] = "Programming";
secretMessage.splice(6, 5, "know");
console.log(secretMessage.join());
//Programming,is,not,about,what,you,know,it,is,about,what,you,can,figure,out.,-2015,,Chris,Pine,,Learn,to,Program

// - Arrays are lists that store data in JavaScript.
// - Arrays are created with brackets[].
// - Each item inside of an array is at a numbered position, or index, starting at 0.
// - We can access one item in an array using its index, with syntax like: myArray[0].
// - We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
// - Arrays have a length property, which allows you to see how many items are in an array.
// - Arrays have their own methods, including.push() and.pop(), which add and remove items from an array, respectively.
// - Arrays have many methods that perform different tasks, such as .slice() and.shift(), .
// - Some built -in methods are mutating, meaning the method will change the array, while others are not mutating.
// - Variables that contain arrays can be declared with let or const.Even when declared with const, arrays are still mutable.However, a variable declared with const cannot be reassigned.
// - Arrays mutated inside of a function will keep that change even outside the function.
// - Arrays can be nested inside other arrays.
// To access elements in nested arrays chain indices using bracket notation.
