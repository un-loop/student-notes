# Sean O'Dell 06/19/2020
## Chapter 6: Forms

forms are the condiut through which users pass rich data to the application. this allows for an interactive experience and fuels dynamic action

when a handler is called, it recieves an event object as it's argument. this is usually referred to as `e` or `evt` when declaring the handler function

massive number of event groups, provides crazy levels of customizability and functionality. most events though will be mouse-related, with keyboard events a close second.

`this.refs` refers to named elements. ex. to get the value of a field named `name` in a form, you can use `this.refs.name.value`.
another (better) option is to use `e.target.value` or checking the state (see line 17)

using `.map()` to iterate over an array is a great way to quickly generate long lists and forms

tracking form input in state allows uncontrolled components to become controlled components, and, if state is persisted in `localStorage`, the data can be saved in case of accidental crash, close, or redirect

using onChange functions, we can keep state in line with the displayed values of form elements. This means we can use the state as the 'source of truth' for forms and maintain consistent rendering

validation required to ensure that only valid information is passed through form. this is vitally important both for safety and security

`_loading` property used to designate loading status. `_` prefix, by convention, used to represent values that relate only to UI
correction: it seems that it is not only related to UI, but also to any tracker that checks the status of events that may require waiting. this may actually be related to UI in the form of loading-bars and waiting-wheels.

can create reactive elements by using onchange functions to modify options further into the form based on input entered earlier on. ex. https://www.ekwb.com/custom-loop-configurator/

Redux - halted at pg. 224, moved to cover next to chapters to build familiarity with Redux