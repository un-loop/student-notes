## Sean O'Dell 05/28/2020
## https://www.digitalocean.com/community/tutorials/react-usememo
## A Look at the React useMemo Hook

referential equality in Javascript can function oddly when comparing empty values, leading to unforseen and undesired React re-rendering

React released memo to prevent expensive re-rendering

**Memoization - optimization technique that tracks input and return values of a given function. If the function is called with the same input, it returns the given output without re-running the potentially expensive process.
-   const memoizedValue = useMemo(() => computeExpensiveVariable(a, b), [a, b]);

## when NOT to useMemo
Side effects or Asynchronous calls: because the function doesn't actually run, if it modifies any information or communicates elsewhere, it's important not to skip over that just to get to a simple return value

If the function is sufficiently small, useMemo can actually reduce performance. write the code first, then check at the end if you can useMemo to optimize
?how does this principle interact with technical debt?