const vacationSpots = ["Alaska", "New York", "Canada"];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

for (let i = 5; i < 11; i++) {
  console.log(i);
}

for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}

const vacationSpots = ["Bali", "Paris", "Tulum"];
for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`);
}

// Write your code below
let bobsFollowers = ["Joe", "Marta", "Sam", "Erin"];
let tinasFollowers = ["Sam", "Marta", "Elle"];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

const cards = ["diamond", "spade", "heart", "club"];
let currentCard;
while (currentCard != "spade") {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}

let cupsOfSugarNeeded = 1;
let cupsAdded = 0;
do {
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}
console.log("And if you don't know, now you know.");

const input = "Coding is awesome you";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }
  }
  if (input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i]);
  }
}
console.log(resultArray.join("").toUpperCase());

// - Loops perform repetitive actions so we don’t have to code that process manually every time.
// - How to write for loops with an iterator variable that increments or decrements
// - How to use a for loop to iterate through an array
// - A nested for loop is a loop inside another loop
// - while loops allow for different types of stopping conditions
// - Stopping conditions are crucial for avoiding infinite loops.
// - do...while loops run code at least once— only checking the stopping condition after the first execution
// - The break keyword allows programs to leave a loop during the execution of its block
