const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];
const secretMessage = animals.map((animal) => {
  return animal[0];
});
console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map((bigNumber) => {
  return bigNumber / 100;
});

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(function (number) {
  if (number < 250) {
    return true;
  }
});

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];
const longFavoriteWords = favoriteWords.filter(function (words) {
  if (words.length > 7) {
    return true;
  }
});

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => {
    return animal === 'elephant';
});
const startsWithS = animals.findIndex(animal => {
    return animal[0] === 's' ? true : false;
});

