# When is Redeux Helpful?

- Complex data flows
- Same data used in many places
- Inter-component communication

## Redux Concepts
 - Reducers
 - Containers
 - Immutability

 #### 3 Principles
 - Immutable store
 - Actions trigger changes
 - Reducers return updated state

 ### Store and change logic are seperate. There is only one single store with hierarchical reducers. No dispatcher. Container components utilize connect. State is immutable.

 ### Container vs. Presentation Components
- Are you going to create a container or a presentation component? 
- Container components are concerned with behavior, marshaling data and actions. 
- You can think of container components as the back end for the front end. 
- Remember, components don't have to emit DOM. 
- Container components are mainly concerned with passing data and actions down to child components. This means that they're typically stateful. 

##### In Redux, container components are typically created using Redux's connect function at the bottom of the file. 
- In contrast, presentation components are dumb. They're nearly all markup. 
 `Container components` pass data and actions, down to presentation components. Presentation components receive functions and data that they need from a container component. 
 - Container components know about Redux. 
 - They have Redux‑specific code inside for dispatching actions to the store and connecting to the store via Redux's connect function. 
 `Presentation components` typically know nothing about Redux, and this is a good thing. It makes your presentation components more reusable and easier to understand. 
 - Presentation components just rely on props to display UI. They have no dependencies on the rest of the app, such as Redux actions or stores. 
 - Presentation components don't specify how the data is loaded or mutated. 
 
 `Finally, container components are often stateful.`  They contain state that they pass down to presentation components, whereas presentation components are typically not stateful; they're just plain functions. 
 - And again, most your components in a Redux app should be presentation style components. 
