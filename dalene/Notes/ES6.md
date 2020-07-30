    Template Literals
let word1 = 'Dylan';
let word2 = 'Israel';
let num1 = 2;
let num2 = 3;
let example = `${word1} ${word2}`;
console.log(example); = Dylan Isreal

    Destructuring Objects
const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}
const { name, age, projects: { diceGame } } = student;
console.log(name); = kyle
console.log(age); = 24
console.log(diceGame); = Two player dice game using JavaScript

    Destructuring Arrays
let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Israel'];
console.log(lastName) = Isreal
lastName = 'Clements';
console.log(lastName) = Clements

    Object Literals
function addressMaker(city, state) {
    const newAddress = {city, state};
       console.log(newAddress);
}
addressMaker('Austin', 'Texas'); = {city: "Austin", state: "Texas"}

    Destructuring Object Literals
function addressMaker(address) {
    const {city, state} = address;
    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}
addressMaker({city: 'Austin', state: 'Texas'});
= Austin, Texas, United States

    For of Loop
let incomes = [62000, 67000, 75000];
for (const income of incomes) {
    console.log(income); = 62000 67000 75000
    total += income; = 204000

const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
];
for( const student of students ) {
    console.log( student.name + " lives in " + student.city );
} = John lives in New York 
    Peter lives in Paris 
    Kate lives in Sidney

    