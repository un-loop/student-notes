function getReminder() {
  console.log("Water the plants.");
}
function greetInSpanish() {
  console.log("Buenas Tardes.");
}

function sayThanks() {
  console.log("Thank you for your purchase! We appreciate your business.");
}
sayThanks();

function sayThanks(name) {
  console.log(
    "Thank you for your purchase " + name + "! We appreciate your business."
  );
}
sayThanks("Cole");

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

function monitorCount(rows, columns) {
  return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);
function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);

const plantNeedsWater = function (day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};
console.log(plantNeedsWater("Tuesday"));

const plantNeedsWater = (day) => {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

const plantNeedsWater = (day) => (day === "Wednesday" ? true : false);

const canIVote = (age) => {
  if (age >= 18) {
    return true;
  } else {
    age < 18;
    return false;
  }
};
console.log(canIVote(19)); // Should print true

const agreeOrDisagree = (agree, disagree) => {
  if (agree === disagree) {
    return "You agree!";
  } else {
    return "You disagree!";
  }
};
console.log(agreeOrDisagree("yep", "yep"));
