6-23-20

- VS Code is open source so other people can fork the repo and fix bugs and push fix back to git hub
- Material-ui = ui library
- Master branch in github is changing to main branch
- after forking a repo. to update your branch you must do a pull request
- use Tooltip to create a pop up window to tell the user something

  6-24-20

- React is a library to create reusable components to display data to the ui
- JSX javaScript extensions with HTML
- Props = data the parent component passes down to the child
- state = create from with in the child
- all react components are functions
- official react components start with a capital letter
- constructor creates the initial value of class
- class has methods associated with it
- componentDidMount is a life cycle function
  ASSIGNMENT
  What is the difference between
  react hook & class component
  state & props
  useState & useEffect
  give definitions of each:
- Hooks are a way to reuse functionality between components.
- with class you can create a component and it takes allot more code to rite
- You can’t use Hooks inside a class component, but you can mix classes and function components with Hooks in a single tree.
- The most useful feature of Hooks is that it allows using state without using class.
- There are two most commonly used hooks: the state hook -- useState and the effect hook -- useEffect.
- Comparing with these two ways to create a component, we can clearly see that hooks need less code and it is more clear to read and understand. Hooks give us a more efficient way to replace lifecycle methods.

- Props allow you to pass various types of values into our components. These values can be numerous types of data: strings, numbers, arrays, objects, and even functions.
- State is data that can be changed in your component (unlike props).

- State hook allows you to add states in the function component. Instead of setting an initial state with this.state statement in the constructor, we can import { useState } from react, which will allow you to set the initial state as an argument. State hook will return a pair of values: the current state and a function that updates it.
- We can pass in a function in useEffect, and every time the DOM gets updated, the function in useEffect will get invoked too. the effect hook allows you to pass in an array as the second argument, which contains all the dependencies that will trigger the effect hook. if any of the dependencies changed, the effect hook will run again. This

6-25-20

- incognito tab don't save search history or cash
- to much unused code makes the bundle size bigger
- set is how to create react hook functions it updates a piece of state

7-1-20

- SQL = standard query language
- SQL based on work flow
- SQL has tables like a big array of objects each has its own index key
- any property inside mongoDb is searchable
- dinoDb has sort key & index key- id transaction id UUID
- noSQL is more forgiving and flexible
- mongoDb & dinoDb are like a json store hash tale as a service query & save data to

7-2-20

- Math Reasoning is the ability to apply math to problem solving

7-8-20

- Trello = is a team communication application
- Q&A = Quality & Assurance
- Testing your code helps to not break your code
- COntinuous Integration - links github repo to upload and redeploy your code from your main branch automatically
- Integration test - testing how well different parts of your system interacts with its slf and each other to find bugs in connections and dependency's
- Unit Test - testing one piece of code a a time
- Test driven development - is when you write out the tests before you rite your code
- Automated testing = Headless browser testing suite (Cypress) = simulate a user using a internet browser
- API = Application Programing Interface
- you test to make sure your API os returning the correct data
- read about JEST(test runner) with ENZYME(test library), React testing, Cypress
