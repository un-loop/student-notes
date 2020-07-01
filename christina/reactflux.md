# Flux

-  Flux is a state management pattern that was popularized by Facebook. 

- Flux is a pattern for managing how data flows through a React application. The preferred method of working with React components is through passing data from one parent component to it's children components. The Flux pattern makes this model the default method for handling data.

## Flux vs Redux

- Flux is a pattern and Redux is a library. ... In Redux, the convention is to have a single store per application, usually separated into data domains internally (you can create more than one Redux store if needed for more complex scenarios). Flux has a single dispatcher and all actions have to pass through that dispatcher.

# The Flux Building Blocks

## Flux breaks down into four major parts: actions, the dispatcher, stores, and views:

- Actions describe an action that took place in the application.

- The dispatcher is a singleton registry of callbacks. It acts as a middleman by passing the actions to all the stores that subscribed to it.

- Stores manage the state and logic needed to update it for specific parts of the application.

- Views are plain old React components.

### In Flux, all data flows in a single direction:

Actions are passed to the dispatcher using convenience classes called action creators.
The dispatcher sends (is dispatching) the actions to all the stores that subscribed to it.
Finally, if the stores care about a particular action that was received (or more), they update their state and signal the views so they can re-render.