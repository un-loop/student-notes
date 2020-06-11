REACT BOOK

- The Document Object Model (DOM) refers to the browser’s HTML tree that makes up a web page. 
- web server, live-server, should refresh the page automatically when it detects that is has changed. 
- To open the console in Chrome, navigate to View > Developer > JavaScript Console. Or, just press Command + Option + J on a Mac 
- JSX attribute values must be delimited by either braces or quotes. 
- A child component does not own its props. Parent components own the props of child components. 
- In JavaScript, if we treat an array or object as immutable it means we cannot or should not make modifications to it. 
We can pass down functions as props too. 
- props are immutable and owned by a component’s parent 
- state is owned by the component. this.state is private to the component and can be updated with this.setState(). 
- when the state or props of a component update, the component will re-render itself. 
- Never modify state outside of this.setState(). This function has important hooks around state modification that we would be bypassing. 
- If an array is passed in as an argument to concat(), its elements are appended to the new array. For example: 
> [ 1, 2, 3 ].concat([ 4, 5 ]); => [ 1, 2, 3, 4, 5 ] 
- use Object.assign() to clone the original into a new object and then modify the property on that new object. 
- we can use property initializers to make two refactors to our React components:
    1. We can use arrow functions for custom component methods (and avoid having to bind this) 
    2. We can define the initial state outside of constructor() 
- Data flows from parent to children through props 
- Event flows from children to parent through functions

