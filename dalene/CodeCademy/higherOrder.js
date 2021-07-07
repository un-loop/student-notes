const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if (2 + 2 != 4) {
      console.log("Something has gone very wrong :( ");
    }
  }
};
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name);

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if (2 + 2 != 4) {
      console.log("Something has gone very wrong :( ");
    }
  }
};
const addTwo = (num) => num + 2;
const timeFuncRuntime = (funcParameter) => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
const checkConsistentOutput = (funk, val) => {
  let first = funk(val);
  let second = funk(val);
  if (first === second) {
    return first;
  } else {
    return "This function returned inconsistent results";
  }
  checkConsistentOutput(funk, val);
};

const fruits = ["mango", "papaya", "pineapple", "apple"];
fruits.forEach((fruit) => console.log(`I want to eat a ${fruit}.`));

// - Abstraction allows us to write complicated code in a way that’s easy to reuse, debug, and understand for human readers

// - We can work with functions the same way we would any other type of data including reassigning them to new variables

// - JavaScript functions are first - class objects, so they have properties and methods like any object

// - Functions can be passed into other functions as parameters

// - A higher - order function is a function that either accepts functions as parameters, returns a function, or both
