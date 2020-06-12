# React Hooks don’t work inside classes — they let you use React without classes. 
## Best choice to use VS HOC
- `Why to use Hooks` - Most developers have changed from usin higher order components to using Hooks
- `useState` - The useState function is a built in hook. It allows you to add state to your functional components. Using the useState hook inside a function component, you can create a piece of state without switching to class components
- `useRef` - useRef is like a “box” that can hold a mutable value in its .current property. If you pass a ref object to React with <div ref={myRef} /> , React will set its .current property to the corresponding DOM node whenever that node changes.
- `useEffect` By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
- `useContext` Just uses the Context object -- which is created before -- to retrieve the most recent value from it.
- `useReducer` - An alternative to useState. useReducer is usually preferable to useState when you have complex state logic. There are two different ways to initialize useReducer state. You may choose either one depending on the use case. The simplest way is to pass the initial state as a second argument.
- `useCallback` - Will return a memoized version of the callback that only changes if one of the dependencies has changed.
- `useMemo` - Will only recompute the memoized value when one of the dependencies has changed. Remember that the function passed to useMemo runs during rendering. Pass a “create” function and an array of dependencies. If no array is provided, a new value will be computed on every render.

## React Hooks are only available in React functional components

# React Hooks can manage state and life cycle events

