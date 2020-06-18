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

Chapter 2

- JSON stands for JavaScript Object Notation. JSON enables us to serialize a JavaScript object and read/write it from a text file.
- Array’s filter() method accepts a function that is used to “test” each element in the array. It returns a new array containing all the elements that “passed” the test. If the function returns true, the element is kept.

Chapter

- In React, we do not directly manipulate the actual DOM. Instead, we must manipulate the virtual representation and let React take care of changing the browser’s DOM.
- The Virtual DOM is a tree of JavaScript objects that represents the actual DOM.
- React builds a virtual representation of the DOM a tree of JavaScript objects that represent the “actual DOM”
- Problems with modifying the DOM = it’s hard to keep track of changes & It can be slow
- One difference between React components and HTML tags is in the naming. HTML tags start with
  a lowercase letter, while React components start with an uppercase.
  JSX Attribute Expressions
- In order to use a JavaScript expression in a component’s attribute, we wrap it in curly braces {} instead of quotes "".
- The key thing to keep in mind is that JSX is syntactic sugar to call React.createElement.
- JSX is going to parse the tags we write and then create JavaScript objects.
- JSX is a convenience syntax to help build the component tree.
- As we saw earlier, when we use JSX tags in our code, it gets converted to a ReactElement:
- ReactElement is stateless and immutable. If we want to add interac-
  tivity (with state) into our app, we need another piece of the puzzle: ReactComponent.

CHAPTER

- A ReactComponent is a JavaScript object that, at a minimum, has a render() function. render() is
  expected to return a ReactElement.
  • render() a ReactElement (which will eventually become the real DOM) and
  • attach functionality to this section of the page
  • render() - the one required function on every ReactComponent  • props - the “input parameters” to our components  • context - a “global variable” for our components  • state - a way to hold data that is local to a component (that affects rendering) • Stateless components - a simplified way to write reusable components
  • children - how to interact and manipulate child components • statics - how to create “class methods” on our components
- Passing data through attributes to the component is often called passing props.
- We can pass any JavaScript object through props.
