## React Notes day 7
# Lifecycle hooks (not new hooks for api)
- As React mounts our application it gives us some hooks where we can insert our own functionality at different times in the component's lifecycle
- To hook into the lifecycle you have to define functions on the component.
- These methods are already written for you
# What is mounting?
- The process of converting the virtual components into actual DOM elements that are placed in the DOM by React
# componentWillMount() & componentDidMount()
- When a component is defined on a page it is not always available right away in the DOM
- Instead you have to wait until the component has actually mounted to the browser
- For functionality that you need to run when it has been mounted that is why you have these two methods
- `<componentWillMount()>` is called just before the component is due to be mounted on the page
- `<componentDidMount()>` is called just after the component has been mounted.
- This is useful for things such as fetching data to populate the component.
- EX class Content extends React.Component {
    componentWillMount(){
        this.setState({activities:data})
    }
};
