# Sean O'Dell 06/17/2020
## Fullstack React Book, Ch. 4: JSX and the Virtual DOM


React creates virtual representation of the DOM with a tree of Javascript objects.

modifying the actual DOM is difficult to keep track of and computationally expensive

with virtual DOM, we recreate entire DOM with every update. seems slow, but is fast in comparison and diffing allows React to only rerender what needs to be changed to match new state

**Shadow DOM - NOT virtual DOM, contains elements implied from use in certain tags(ex. video and some input types)

to create react components in console (or JS- bad practice) - this ex. creates <p> tag called `comp`
`let comp = React.createElement('p');`

`React.createElement` takes 3 arguments:
- DOM element type (tag)
- element `props`
- children of the element
    - can be:
        - `ReactElement`
        - `ReactText` element
        - array of `ReactNodes`

to render -
`let mount = document.getElementById('root');`

`ReactDOM.render(comp, mount);`