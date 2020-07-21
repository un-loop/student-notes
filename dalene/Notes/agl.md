6-23-20

- VS Code is open source so other people can fork the repo and fix bugs and push fix back to git hub
- Material-ui = ui library
- Master branch in githib is changing to main branch
- after forking a repo. to update your branch you must do a pull request
- use Tooltip to create a pop up window to tell the user somthing
  6-24-20
- React is a library to create reusable compnents to display data to the ui
- JSX javaScript extentions with HTML
- Props = data the parent component passes down to the child
- state = create from with in the child
- all react compnents are functions
- ofical react components start with a capital letter
- constructor creates the inital value of class
- class has methods asociated with it
- componentDidMount is a life cycle function
  ASSIGNMENT
  What is the diffrence between
  react hook & class component
  state & props
  useState & useEffect
  gitve definitions of each:
- Hooks are a way to reuse functionality between components.
- with class you can create a component and it takes alot more code to rite
- You can’t use Hooks inside a class component, but you can mix classes and function components with Hooks in a single tree.
- The most useful feature of Hooks is that it allows using state without using class.
- There are two most commonly used hooks: the state hook -- useState and the effect hook -- useEffect.
- Comparing with these two ways to create a component, we can clearly see that hooks need less code and it is more clear to read and understand. Hooks give us a more efficient way to replace lifecycle methods.

- Props allow you to pass various types of values into our components. These values can be numerous types of data: strings, numbers, arrays, objects, and even functions.
- State is data that can be changed in your component (unlike props).

- State hook allows you to add states in the function component. Instead of setting an initial state with this.state statement in the constructor, we can import { useState } from react, which will allow you to set the initial state as an argument. State hook will return a pair of values: the current state and a function that updates it.
- We can pass in a function in useEffect, and every time the DOM gets updated, the function in useEffect will get invoked too. the effect hook allows you to pass in an array as the second argument, which contains all the dependencies that will trigger the effect hook. if any of the dependencies changed, the effect hook will run again. This
