# Sean O'Dell 06/18/2020
## Chapter 5: Advanced Component Configuration with `props`, `state`, and `children`

`ReactComponent` is a javascript object with a `render()` method, whose goal is to render JSX into the DOM as HTML, and to apply functionality to that part of the page.

falsy values returned from render functions create a `<noscript />` tag in the DOM

props are immutable information that is passed down from a parent to a child and allows for dynamic rendering based on props as input

propTypes are located in `package.json`, and their purpose is to map out props used in the React App and perform validation on them, suck as confirming that a given value has a specific type or is an instance of a specific class.

defaultProps are used to create intial, default values that our props will follow, as long as no other value is declared for that specific prop when the component is called.

context is a way of specifying that a prop should be passed down globally instead of specifically referenced from each node to node to leaf

peice of dynamic, immutable data stored inside of a component. Dynamic because it's value might change, immutable because you musn't change it directly.

stateless components do not have state, don't use `this`, and do not use normal lifecycle methods. They are useful because they allow for the storing of state in few areas, which cuts down on complexity and computational expense

