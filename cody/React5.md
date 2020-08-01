## React Interactivity Lesson 10
# User interaction
- In regular javascript you attach events with addEventListener in React it's set up to handle events using props
- to set a prop event in React you have to use camel casing 
- React provides a lot of props to set to listen for different browser events
- **EX**
onMouseMove
onMouseUp
onMouseDown
onClick
onDoubleClick
onMouseLeave
onTouchStart
onTouchEnd
- 
# What is a constructor function?
- A constructor function is the function that runs when the JavaScript runtime creates a new object
- When ever you call the constructor method you also have to call the super(props) method
- When you call the super(props) function it calls the parent class's constructor function

# Example of a component with onClick function
`class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchVisible: false
        }
    }
    showSearch(){
        this.setState({
            searchVisible: !this.state.searchVisible
        })
    }
    render() {
        let searchInputClasses = ["searchInput"];
        if (this.state.searchVisible) {
            searchInputClasses.push("active);
        }
    return(
        <div className="header">
        <div className="menuIcon">
        <div className="dashTop"></div>
        <div className="dashButton"></div>
        <div className="circle"></div>
        </div>
        <span className="title">
        {this.props.title}
        </span>
        <input
        type="text"
        className={searchInputClasses.join(' ')}
        placeholder="Search ... />

        <div
        onClick={this.showSearch.bind(this)}
        className="fa fa-search searchIcon"
        ></div>
    )
    }
}

# Input events
- When building a form in React use input events such as onSubmit() and onChange()
# Controlled vs. uncontrolled
- Uncontrolled component is when we are not setting the value of the input element. In an uncontrolled component you can't provide any validation or post-processing on the input text value as it stands right now.
- To validate the field or manipulate the value of the component you have to create a **contolled** component which means that you pass it a value using the value prop.

- **EX:**
class SearchForm extends React.Component{

}
SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    searchVisible: ProprTypes.bool
}
SearchForm.defaultProps = {
    onSubmit: () => {},
    searchVisible: false
}