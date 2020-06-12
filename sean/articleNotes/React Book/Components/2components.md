## Sean O'Dell 06/11/2020

focus on building timer app with multiple concurrent timers
?intro to async and sync?

**single responsibility principle - programming principle that states that:
`'A class should have only one reason to change'`
- Robert C. Martin
This means that each component of functionality should be responsible for one operation, and if another operation is required another component of functionality should be created.

### React construction data-flow
1. break app into components
2. build a static verson of app (just display/render HTML)
3. determine what should be stateful (where is dynamic functionality?)
4. determine in which component each piece of state should live (fillowing single responsibility principle)
5. hard-code intitial state (dummy data)
6. add inverse data flow (create functionality for data to be passed back upwards)
7. add server communication (create pathway for real data and move away from dummy data)

when declaring props inside component and not passing those props from parents, those values are `undefined` (non-existant properties of an object) this allows them to be called as empty fields when used to input text. Useful for rendering components with no default values when created, but containing user inputed data when edited.
!CORRECTION! using values that are `undefined` is useful for working with ternary operators, but if you try to set a text field's value to `undefined` you will get an error/complaint

criteria to determine if data should be stateful:
- is it passed in from a parent via props? if so, it probably isn't state.
- does it change over time? if so, it's probably state
- can you compute it based on any other state or props on your component? if so, it's not state
- is it a form? if so, it's probably state

state should be held in the lowest common parent of all components that require that state, although it may make sense to hold it in a higher component than that (in THIS case, a component can be considered it's own parent). If no component exists where it makes sense to store the state, create a new component in the heirarchy whose express purpose is to hold and manage that state.

form elements written in React using `state`, `value`, and `onChange` attributes

**leaf components - ?if react components are organized as a tree, these would be the leafs?

helpers.js convienent place to store JS code. allows decluttering and maintains a degree of the principle of separation
?is naming convention standard practice, required by React, or arbitrarily chosen for by the author?
a: common naming convention. minimal collection of useful functions. acts like library (ex. jQuery) but it small and specialized to project

using .`map` to iterate through `this.state`, then using `Object.assign()` to reassign new values is often followed format for modifying state