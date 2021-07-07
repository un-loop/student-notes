const city = "New York City";
let logCitySkyline = () => {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
};
console.log(logCitySkyline());

GLOBAL;
const satellite = "The Moon";
const galaxy = "The Milky Way";
const stars = "North Star";
let callMyNightSky = () => {
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
};
console.log(callMyNightSky());

LOCAL VARIABLES
const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
}
logVisibleLightWaves();
console.log(lightWaves);

GOOD PRACTICE
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};
logVisibleLightWaves();

BAD PRACTICE
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';
const callMyNightSky = () => {
  stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};
console.log(callMyNightSky());
console.log(stars);

// - Scope is the idea in programming that some variables are accessible / inaccessible from other parts of the program.
// - Blocks are statements that exist within curly braces { }.
// - Global scope refers to the context within which variables are accessible to every part of the program.
// - Global variables are variables that exist within global scope.
// - Block scope refers to the context within which variables that are accessible only within the block they are defined.
// - Local variables are variables that exist within block scope.
// - Global namespace is the space in our code that contains globally scoped information.
// - Scope pollution is when too many variables exist in a namespace or variable names are reused.

// The scope of `random` is too loose 

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};
// The scope of `days` is too tight 
const getTrainingDays = event => {
  let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
  return days;
};
// The scope of `name` is too tight 
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};
name = 'Nala';
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};
name = 'Nala';
const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 
logEvent(name, event);
logTime(name, days);
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
logEvent(name2, event2);
logTime(name2, days2);
