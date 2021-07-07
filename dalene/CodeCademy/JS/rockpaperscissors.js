const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("error");
  }
};
const getComputerChoice = () => {
  const randomNumber = Math.random(Math.floor() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tie Game!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer Won";
    } else {
      return "You Won";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer Won";
    } else {
      return "You Won";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer Won";
    } else {
      return "You Won";
    }
  }
  if (userChoice === "bomb") {
    return "You Won";
  }
};
const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log(`You threw ${userChoice}`);
  console.log(`Computer threw ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
//computerChoice keeps throwing undefined
