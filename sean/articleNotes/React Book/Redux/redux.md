# Sean O'Dell 06/23/2020
# Part 2, Ch. 1; Intro to Flux and Redux

**Flux - design pattern that links action=>dispatcher=>store=>view=>action in circular link. Built to facilitate tight connection of user-interaction and state changes. React is an close implementation of the Flix design pattern.

### Redux lifecycle:
UI is rendered with state-dependent factors => An action takes place that we want to change the state => The action is passed to a reducer funtion => The function changes the value in the store => Change in store modifies the state => Change in state causes rerender of UI => UI is rendered with state-dependent factors => ...

by closing over the `state` variable in creating our Redux store, we make it so that the state it references is not available outside of the store functions

**Factory Pattern - pattern where we use closures inside a function to lock out access to functions inside of an object.

- First, declare a variable inside of the function.
- Then, declare a function that returns that variable.
- Next, declare a function that modifies that same variable in some way.
- Return an object that contains both functions as properties.

This uses closure to create a private variable that can only be called and modified using the functions returned in the object, increasing security and preventing accidental modifications.

Redux reducers must be 'pure functions':
**pure function --
- Will always have the same output for a given set of inputs
- Does not alter any information outside of the function itself

paused at pg. 467