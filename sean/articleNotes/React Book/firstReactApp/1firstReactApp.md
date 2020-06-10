## Sean O'Dell 06/09/2020
## Your first React Web Application

npm install
- searches for dependencies and installs all declared

npm start
- runs client-side server, links index.html to port:3000 by default

**JSX - JavaScript eXtension syntax; allows return of non-vanilla JS notation from functions. Ultimately parsed to JS and, in case of React, oftentimes into HTML.

Babel used to turn ES6 code into ES5 compatible for browsers without full implementation, also translates JSX in Javascript to be recognized by compilers

!!Native HTML elements *always* start with a lowercase letter and React component names *always* start with an uppercase letter!!

JSX rendered in React IS NOT literal HTML that will be rendered in index.html, it is a representation of what we want to be rendered there. This means reserved keywords in Javascript still apply, hence 'className' instead of 'class'

**Data driven model - Passing data from parent to child to generate content. Allows component to generate an arbitrary number of unique components

component can access an object containing all of it's props with `this.props`. `this` in the context of React will almost exclusively refer to the component in which it is contained. 

can assign JSX objects inside of Javascript data types. JSX will be transpiled upon rendering.

!`this.props` is immutable! A child cannot modify its own props, its parent own the child's props. Props can pass down function that are used to pass values back up to the parent, then the parent can modify what props it sends down to the child. This is how dynamic pages are rendered with the passing of information internally.

Use `this.<function>.bind(this);` from within the constructor function and after the super call to bind the component to the `this` value of <function>

When updating an information store outside of the React app, React is not, by default, informed of the change, and so doesn't make use of its powerful re-rendering ability to incorporate the change. State must be changed at some point in this process to make React aware of the change.

Though props are owned by the parent, state is owned by the component. when state is changed, component will rerender itself.