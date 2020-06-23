# Testing React

- They used Jest as the testing framework and tested the same React component using two popular options, Enzyme and React Testing Library. This way, you can see the benefits of each approach. And it showed we can simulate a renderer without opening a real browser, pass properties to our component, simulate interactions, and assert on the results of these interactions. 

## Testing React with Enzyme

- There are two ways to render a React component for testing with Enzyme, shallow and mount. Shallow renders a single component in isolation. With shallow rendering, no actual DOM is created. This makes shallow rendering a little faster than mount and allows you to test a React component all by itself. Mount renders a component along with its children. We're going to use shallow first.

## Testing React with React Testing Libraries 

- React Testing Library is a compelling alternative to Enzyme. It's unique because it encourages you to write tests based on what your user sees. This tends to lead to tests that are less brittle than Enzyme's tests, and it also helps encourage writing accessible React components. CourseForm.ReactTestingLibrary.test.js. Let's begin with some imports. React‑testing‑library gives us a render function, which we will use to render the component, as well as a cleanup function, which we need to run after each one of our tests. 

# Testing Redux

- Redux was designed with testing in mind from the beginning as well. 

## Testing Action Containers

- Action creators are so simple to test that unit testing them is a breeze. Action creators are conceptually simple. They return an object. So unit testing an action creator is simple as well. You will need to assert that it returns the expected object.