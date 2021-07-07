const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 9;
      break;
    case "tuesday":
      return 10;
      break;
    case "wednesday":
      return 9;
      break;
    case "thursday":
      return 10;
      break;
    case "friday":
      return 9;
      break;
    default:
      return "Error!";
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday");

console.log(getSleepHours("tuesday"));
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 9;
  return idealHours * 5;
};
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the Perfict amount of Sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got " + (idealSleepHours - actualSleepHours) + " Extra Sleep!"
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log("You need more Sleep!");
  } else {
    console.log("Error!");
  }
};
calculateSleepDebt();
