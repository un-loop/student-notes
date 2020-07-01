## Javascript Notes
- If you want to declare a variable with const that will never change you can use screaming case `<MONTHS_IN_A_YEAR>` this will never need to change
# Primitive Type
- primitive types are data that is not an object and has no methods. They are immutable
- Boolean is only true or false
- Numbers are only numbers
- Strings are words
- When writting a boolean name the variable as a question EX: `<isSkyBlue = true>`
# Control Flow (If statements)
-Conditional statements is also know as if statement
# Equality statements
- = asigns it to a variable
- == is used for comparing two variables but it ignores the datatype
- === is used for comparing two variable but this also checks the data type and in order for it to be true they must be the same data type
-Should always try to use ===
# Else If Statement
- Use else if when you need to use 3 or more if statments
# Loops
- Javascript loops are used to repeatedly run a block of code until a certain condition is met. 
- Looping is also know as iteration or iterating over and array
- While loop: While this is not true do this until this is true
- EX let friendsAtYourParty = 0;
while (friendsAtYourParty < 10) {
    console.log(friendsAtYourParty)
    friendsAtYourParty = friendsAtYourParty + 1;
}
console.log(friendsAtYourParty)
# For Loop
- The for statement creates a loop that is executed as long as a condition is true.
- The loop will stop once the condition becomes false.
- EX 
`<let friendsAtYourParty = 0;
for (let i=0; i<=10; i++) {
    friendsAtYourParty++;
}
console.log(friendsAtYourParty)>
# Looping excersise
- EX `<const character ="f";
const timesToRepeat = 5;
let myString = "";
for (let i=0; i < timesToRepeat; i++){
  myString = myString + character;
}
;console.log(myString);
///output fffff>`

# Functions and Scope
- A function is a bit of reusable code. 
- A function allows you to define a block of code, give it a name and then execute it as many times as you want.
- A function can include one or more parameters or none at all.
- You can have as many parameters as you want, however if you have more than 3 or 4 you should probably make a smaller function.
# Scope
- Global scope is any variable declared outside of a function.
- Global scope is accessible from anywhere in your code
- Local scope is declared within that function
- Local variables are only accessible with in that function
# Built in Functions
- There are several functions that are pre-built in for use in javascipt they are also known as methods
- These include math functions suck as Math.round
- The math functions always start with Math
# Objects
- An object is a collection of properties and a property is a association between a name or key and a value.
- Objects contain keys and values
- The keys are on the left side of the : and they repersent how you get that piece data out of the object
- Each key has to be unique but you can have multiple values that are the same.
- The value is the answer. It's on hte right side of :.
- EX Object {
  "city": "Seattle",
  "favoriteFood": "🌮",
  "name": "Brian Holt",
  "numberOfTacosWanted": 100,
  "state": "WA",
  "wantsTacosRightNow": true,
} 
- Objects can have there own functions and these are called methods.
- A method is a function on a object.
- EX const dog = {
  name: "dog",
  speak() {
    console.log("woof woof");
  }
};
- short hand for funciton is speak() but you could write speak: function()
- Objects can have nested objects in them.
- A nexted object is an object inside of an objoect
- EX const me = {
  name: {
    first: "Brian",
    last: "Holt"
  },
  location: {
    city: "Seattle",
    state: "WA",
    country: "USA"
  }
};
