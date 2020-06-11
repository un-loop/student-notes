# React Hooks
## Best choice to use VS HOC
- `Why to use Hooks` - Most developers have changed from usin higher order components to using Hooks
- `useState` - The useState function is a built in hook. It allows you to add state to your functional components. Using the useState hook inside a function component, you can create a piece of state without switching to class components
- `useRef` - useRef is like a “box” that can hold a mutable value in its .current property. If you pass a ref object to React with <div ref={myRef} /> , React will set its .current property to the corresponding DOM node whenever that node changes.
- `useEffect` By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
- `useContext`
- `useReducer`
- `useCallback`
- `useMemo`