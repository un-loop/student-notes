## React Book Lesson 8 Packaging and PropTypes
# PropTypes
- Props is usually a object or string
- React provides a method for defining and validating these types that allow us to easily expose a component API
- prop-types object exports a bunch of different types which I can use to define what type a component's prop should be
- Define these using the propTypes method in a React prop
- First you have to import the PropTypes object from the prop-types package
- **EX** import PropTypes from 'prop-types'

- **EX** 
import PropTypes from 'prop-types'
class Header extends React.component{

}
Header.propTypes= {
    title: PropTypes.string
}
# Available prop-types and how to document
- string: PropTypes.string
- Number: PropTypes.number
- Boolean: PropTypes.bool
- Function: PropTypes.func
- Symbol: PropTypes.symbol
- Object: PropTypes.object
- Anything: PropTypes.node
- You can communicate from a child component to a parent component using a function
- This pattern is used quite often when you want manipulate a parent component from a child
# Collection types
- You can pass iterable collections in props
- To declare a component's proptype as an array the documentation is PropTypes.array
-You can also declare an array that holds only objects of a certain type using PropTypes.array([])
- **EX** Array of Numbers PropTypes.arrayOf([type])
- When using PropTypes.element if you are using more then one element you must use the react pattern and wrap it in a div
- **EX** NOT VALID:
Clock.propTypes={
    displayElement: PropTypes.element
}
<Clock displayElement= {
    <div> Name</div>
    <div>Age</div>
}>
</clock>
- **EX** VALID
<Clock displayElement={
    <div>
    <div>Name</div>
    <div>Age</div>
    </div>
}></clock>

# Requiring types
- You can require a prop to be passed to a component by appending any of the proptype descriptions with .isRequired
- **EX**
Clock.propTypes = {
    title: PropTypes.name.isRequired
}
- This is very useful for times when the component is dependent upon a prop to be passed in by it's parent component and won't work without it
# Default props
- There are time when you want to set a default value for a prop
- If you need a component to render but it will not be required but you still want a title to be rendered
- To set a default prop value you use the defaultProps object ket on the component
- **EX**
Header.defaultProps = {
    title: "Github activity"
}
