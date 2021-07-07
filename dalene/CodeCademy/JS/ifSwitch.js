// Write your function here:
const lifePhase = (age) => {
  if (age >= 0 && age <= 3) {
    return "baby";
  } else if (age >= 4 && age <= 12) {
    return "child";
  } else if (age >= 13 && age <= 19) {
    return "teen";
  } else if (age >= 20 && age <= 64) {
    return "adult";
  } else if (age >= 65 && age <= 140) {
    return "senior citizen";
  } else {
    return "This is not a valid age";
  }
};
console.log(lifePhase(141));

const finalGrade = (m, f, h) => {
  if (m < 0 || m > 100 || f < 0 || f > 100 || h < 0 || h > 100) {
    return "You have entered an invalid grade.";
  }
  let sum = (m + f + h) / 3;
  if (sum >= 0 && sum <= 59) {
    return "F";
  } else if (sum >= 60 && sum <= 69) {
    return "D";
  } else if (sum >= 70 && sum <= 79) {
    return "C";
  } else if (sum >= 80 && sum <= 89) {
    return "B";
  } else if (sum >= 90 && sum <= 100) {
    return "A";
  }
};
console.log(finalGrade(99, 92, 95)); // Should print 'A'

const reportingForDuty = (rank, lastName) => {
  return `${rank} ${lastName} reporting for duty!`;
};
console.log(reportingForDuty("Private", "Fido")); // Should return 'Private Fido reporting for duty!'

const rollTheDice = () => {
  let die1 = Math.random() * 11 + 1;
  let die2 = Math.random() * 11 + 1;
  return (die1 >= 2 || die1 <= 12) + (die2 >= 2 || die2 <= 12);
};
console.log(rollTheDice());

const calculateWeight = (earthWeight, planet) => {
  switch (planet) {
    case "Mercury":
      return earthWeight * 0.378;
      break;
    case "Venus":
      return earthWeight * 0.907;
      break;
    case "Mars":
      return earthWeight * 0.377;
      break;
    case "Jupiter":
      return earthWeight * 2.36;
      break;
    case "Saturn":
      return earthWeight * 0.916;

    default:
      return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
  }
};
console.log(calculateWeight(100, "Jupiter")); // Should print 236

const truthyOrFalsy = (value) => {
  if (value) {
    return true;
  }
  return false;
};
/*
// As a function declaration:
function truthyOrFalsy(value) {
    if (value) {
        return true
    } else {
        return false
    }
}
// Using a ternary: 
const truthyOrFalsy = value => value ? true : false 
*/

const numImaginaryFriends = (friends) => Math.round(friends * 0.33);
console.log(numImaginaryFriends(18)); // Should print 6

const sillySentence = (adjective, verb, noun) => {
  return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;
};
console.log(sillySentence("excited", "love", "functions"));

const howOld = (age, year) => {
  let dateToday = new Date();
  let thisYear = dateToday.getFullYear();
  const yearDifference = year - thisYear;
  const newAge = age + yearDifference;
  if (newAge < 0) {
    return `The year ${year} was ${-newAge} years before you were born`;
  } else if (newAge > age) {
    return `You will be ${newAge} in the year ${year}`;
  } else {
    return `You were ${newAge} in the year ${year}`;
  }
};
console.log(howOld(40, 2035));
console.log(howOld(40, 1975));
console.log(howOld(40, 1995));

const whatRelation = (percentSharedDNA) => {
  if (percentSharedDNA === 100) {
    return "You are likely identical twins.";
  }
  if (percentSharedDNA >= 35 && percentSharedDNA <= 99) {
    return "You are likely parent and child or full siblings.";
  }
  if (percentSharedDNA >= 14 && percentSharedDNA <= 34) {
    return "You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.";
  }
  if (percentSharedDNA >= 6 && percentSharedDNA <= 13) {
    return "You are likely 1st cousins.";
  }
  if (percentSharedDNA >= 3 && percentSharedDNA <= 5) {
    return "You are likely 2nd cousins.";
  }
  if (percentSharedDNA >= 1 && percentSharedDNA <= 2) {
    return "You are likely 3rd cousins";
  }
  return "You are likely not related.";
};
console.log(whatRelation(34));
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
console.log(whatRelation(3));
// Should print 'You are likely 2nd cousins.'

const tipCalculator = (quality, total) => {
  switch (quality) {
    case "bad":
      return total * 0.05;
      break;
    case "ok":
      return total * 0.15;
      break;
    case "good":
      return total * 0.2;
      break;
    case "excellent":
      return total * 0.3;
      break;
    default:
      return total * 0.18;
  }
};
console.log(tipCalculator("good", 100)); //should return 20

const toEmoticon = (meaning) => {
  switch (meaning) {
    case "shrug":
      return '|_{"}_|';
    case "smiley face":
      return ":)";
    case "frowny face":
      return ":(";
    case "winky face":
      return ";)";
    case "heart":
      return "<3";
    default:
      return "|_(* ~ *)_|";
  }
};
console.log(toEmoticon("whatever"));
