REACT BOOK

- The Document Object Model (DOM) refers to the browser’s HTML tree that makes up a web page.
- web server, live-server, should refresh the page automatically when it detects that is has changed.
- To open the console in Chrome, navigate to View > Developer > JavaScript Console.Or, just press Command + Option + J on a Mac
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
  • render() - the one required function on every ReactComponent • props - the “input parameters” to our components • context - a “global variable” for our components • state - a way to hold data that is local to a component (that affects rendering) • Stateless components - a simplified way to write reusable components
  • children - how to interact and manipulate child components • statics - how to create “class methods” on our components
- Passing data through attributes to the component is often called passing props.
- We can pass any JavaScript object through props.
- we can refer to child components in the tree using this.props.children.
- The difference between map() and forEach() is that the return value of map() is an array of the result of the callback function, whereas forEach() does not collect results.

CHAPTER FORMS

- Forms transform your web site into a web app.
- Form inputs modify data, both on the page and the server.
- evt = these functions are event handlers.
  • placeholder: This will be passed straight through to the input child element. Similar to a label, this tells the user what data to the Field expects.
  • name: We want this for the same reason we provide name to input elements: we’ll use this in the event handler decide where to store input data and validation errors.
  • value: This is how our parent form can initialize the Field with a value, or it can use this to update the Field with a new value. This is similar to how the value prop is used on an input.
  • validate: A function that returns validation errors (if any) when run.• onChange: An event handler to be run when the Field changes. This function will accept an
  event object as an argument.

static propTypes = {placeholder: PropTypes.string,
name: PropTypes.string.isRequired,
value: PropTypes.string,validate: PropTypes.func,
onChange: PropTypes.func.isRequired
};

- apiClient is a simple object we created to simulate asynchronous loading and saving.

CHAPTER CREATE REACT APP

- Create React App is just a boilerplate generator. The react-scripts package, specified in package.json, is the engine that will make everything work.
- • placeholder: This will be passed straight through to the input child element. Similar to a label, this tells the user what data to the Field expects.
  • name: We want this for the same reason we provide name to input elements: we’ll use this in the event handler decide where to store input data and validation errors.
  • value: This is how our parent form can initialize the Field with a value, or it can use this to update the Field with a new value. This is similar to how the value prop is used on an input.
  • validate: A function that returns validation errors (if any) when run.• onChange: An event handler to be run when the Field changes. This function will accept an
  event object as an argument.

static propTypes = {placeholder: PropTypes.string,
name: PropTypes.string.isRequired,
value: PropTypes.string,validate: PropTypes.func,
onChange: PropTypes.func.isRequired
};

- apiClient is a simple object we created to simulate asynchronous loading and saving.

CHAPTER CREATE REACT APP

- Create React App is just a boilerplate generator. The react-scripts package, specified in package.json, is the engine that will make everything work.
- • placeholder: This will be passed straight through to the input child element. Similar to a label, this tells the user what data to the Field expects.
  • name: We want this for the same reason we provide name to input elements: we’ll use this in the event handler decide where to store input data and validation errors.
  • value: This is how our parent form can initialize the Field with a value, or it can use this to update the Field with a new value. This is similar to how the value prop is used on an input.
  • validate: A function that returns validation errors (if any) when run.• onChange: An event handler to be run when the Field changes. This function will accept an
  event object as an argument.

static propTypes = {placeholder: PropTypes.string,
name: PropTypes.string.isRequired,
value: PropTypes.string,validate: PropTypes.func,
onChange: PropTypes.func.isRequired
};

- apiClient is a simple object we created to simulate asynchronous loading and saving.

CHAPTER CREATE REACT APP

- Create React App is just a boilerplate generator. The react-scripts package, specified in package.json, is the engine that will make everything work.
  • placeholder: This will be passed straight through to the input child element. Similar to a label, this tells the user what data to the Field expects.
  • name: We want this for the same reason we provide name to input elements: we’ll use this in the event handler decide where to store input data and validation errors.
  • value: This is how our parent form can initialize the Field with a value, or it can use this to update the Field with a new value. This is similar to how the value prop is used on an input.
  • validate: A function that returns validation errors (if any) when run.• onChange: An event handler to be run when the Field changes. This function will accept an
  event object as an argument.

static propTypes = {placeholder: PropTypes.string,
name: PropTypes.string.isRequired,
value: PropTypes.string,validate: PropTypes.func,
onChange: PropTypes.func.isRequired
};

- apiClient is a simple object we created to simulate asynchronous loading and saving.

CHAPTER CREATE REACT APP

- Create React App is just a boilerplate generator. The react-scripts package, specified in package.json, is the engine that will make everything work.
- \$ ls -a the -a flag for the ls command displays all files, including “hidden” files
- Concurrently = is a utility for running multiple processes.
- Cross-Origin Resource Sharing (or CORS). The browser prevents these types of requests from scripts for security reasons.
- Use split to get an array of the words in the string. Spaces, dashes, and underscores will be considered delimiters.
- Array’s join() combines all the members of an array into a string.
- String’s split() splits a string into an array of strings. It accepts as an argument the character(s) you would like to split on. The argument can be either a string or a regular expression.
- - A tab is represented as the \t character in JavaScript.
- toBe is a matcher. Jest ships with a few different matchers. Under the hood, the toBe matcher uses the === operator to check equality.
- toEqual is more sophisticated than toBe. it will
  allow us to assert that two objects are identical, even if they aren’t the exact same object
- use toBe for boolean and numeric assertions and toEqual for everything else.
- Jest requires that you always have a top-level describe that encapsulates all your code. The two it blocks nested inside of this describe are our specs. This organization is standard: describe blocks don’t contain assertions, it blocks do.
- Throughout the rest of this chapter, an “assertion” refers to a call to expect(). A “spec” is an it block.
- In software testing, there are two primary categories that tests fall into: integration tests and unit tests.
- For React components, we’ll make two kinds of assertions:

1. Given a set of inputs (state & props), assert what a component should output (render).2. Given a user action, assert how the component behaves. The component might make a state
   update or call a prop-function passed to it by a parent.

- simulate() is how we simulate user interactions on components. The method accepts two arguments:

1. The event to simulate (like 'change' or 'click'). This determines which event handler to use (like onChange or onClick).
2. The event object (optional).
- When a component is shallow-rendered, the usual re-rendering hooks do not apply. If any state changes instigated by a simulate() are made asynchronously, you must call update() to re-render the component. 
• You can assert that one number is close to another with toBeCloseTo()• You can match a string against a regular expression with toMatch()• You can control time, allowing you to work with setTimeout or setInterval 
• You can assert that an array contains a specific subset of members with jasmine.arrayContaining()• You can assert that an object contains a specific subset of key/value pairs with jasmine.objectContaining() 

CHAPTER ROUTING
we want React to generate the page. So an evolution of that request flow using React might look like this: 
1. Browser makes a request to the server for this page. 
2. The server doesn’t care about the pathname. Instead, it just returns a standard index.html that includes the React app and any static assets. 
3. The React app mounts. 
4. The React app extracts the identifiers from the URL and uses these identifiers to make an API call to fetch the data for the artist and the album. It might make this call to the same server. 
5. The React app renders the page using data it received from the API call. 
- For modifying the location of an app, we use links and redirects. 
- For determining what to render at a given location, we also use two React Router components, Route and Switch. 
- In React Router, Route is a component that determines whether or not to render a specified component based on the app’s location. 
- We’ll need to supply Route with two arguments as props: 
• The path to match against the location 
• The component to render when the location matches path
- Using ternary operators inside of JSX is common in React. This is because we can’t embed multi-line statements like an if/else clause inside our JSX. 
- In JSX, if the prop is listed but not assigned to a value it defaults the value to true. 