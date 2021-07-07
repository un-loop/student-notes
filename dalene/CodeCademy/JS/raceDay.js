let raceNumber = Math.floor(Math.random() * 1000);
let adultEarly = "true";
let age = 18;
if (adultEarly && age > 18) {
  raceNumber += 1000;
}
if (adultEarly && age > 18) {
  console.log(`${raceNumber} will start at 9:30am. `);
} else if (!adultEarly && age > 18) {
  console.log(`${raceNumber} will start at 11:00am. `);
} else if (age < 18) {
  console.log(`${raceNumber} will start at 12:30pm.`);
} else {
  console.log("See registration desk!");
}
