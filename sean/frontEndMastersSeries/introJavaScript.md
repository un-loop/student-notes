## Sean O'Dell 06/01/2020
## Introduction to Javascript


code designed for humans to be able to modify later

don't play 'code golf' the goal is to make the code understandable, not to make it as terse as possible(yet)

**camelCasing vs snake_casing - camelCasing convention for Javascript and others, snake_casing Python and others

**SCREAMING_CASE - used to denote a value that is a const and will never change

**Boolean - named after Bool, pioneer in binary automatons

loops used to re-run code an arbitrary number of times

**scope - variables only remain declared while the code block (functions, loops, etc.) they were declared inside remain open, independent of other locations where it's modified or read
- 'global' scope means that the scope of a variable extends to the entire environment

**builtin - functions built in to Javascript because of their frequent use

**method - a function that is attached to an object

const "locks" a value for a variable, but it allows manipulaiton of properties inside of a const object

sort method defaults to string coparison

**comparitor - function used to compare 2 or more values as an operation in a sort function

**compound conditions - can use parentheses to change order of operations on AND/OR statements

## testing exercise answers

function findLargestNumber(list) {
  let largest = list[0];
  for(let i = 1; i < list.length; i++){
    if(list[i] > largest){
      largest = list[i];
    };
  };

  return largest;
}

function makeDogObject() {
  const dog = {
    name: 'Fido',
    color: 'white',
    age: 6,
    speak(){
      return 'woof'
    }
  };

  return dog;
}

function getListOfNames(list) {
  return list.map(elem => elem.name);
}

function getAverageAge(list) {
  let ttlAge = list.reduce((total, elem) => total + elem.age, 0)
  return ttlAge/list.length;
}

function getAllEngineers(list) {
  return list.filter(elem => elem.jobTitle.includes("Engineer")).map(elem => elem.name);
}

function sort(list) {
  while((let i = 0) < list.length - 1){
    if(list[i] < list[i+1]){
      let holder = list[i];
      list[i] = list[i+1];
      list[i+1] = holder;
      i = (i > 0) ? i+1 : i-1;
    } else {
      i++
    }
  }
  return list;
}

## intro to DOM

**DOM - Document Object Model, objects and methods that communicate with eachother to create effects on the web page. Foundation of connection HTML => CSS => Javascript

**document - javascript object that represents the DOM

**.querySelector - document method that accesses elements based on CSS syntax selectors

** NodeList - list of HTML nodes. Accessing is similar to array syntax, but IT IS NOT ARRAY. can use Array.from(NodeList) to create an array out of NodeList, and then can access like an array of objects

all elements are children (of some degree) of document

event listening bubbles up to parent elements, triggering listening events all the way up to document