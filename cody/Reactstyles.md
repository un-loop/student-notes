## React Styles Lesson 09
- React uses the following ways to style a component: 
1. Cascading StyleSheets (CSS)
2. Inline styles
3. Styling libraries
# CSS
- Css is a way to add style to a DOM component outside fo the actual markup itself
- You use the class names as .name
# Inline styles
- Allows you to define styles inline along with our JSX
- Adding styles to the component not only allow you to define styles inside our components but allow you to dynamically define style based upon different states of the app
- Define styles using a JavaScript object
The style property is expected to be an object with camel-cased keys defining a style name and values which map to their values
- **EX** <div style={{color:blue}}>This text will have the color blue </div>
- Take notice the styles are defined with two curly braces 
- The inner brace is the Javascript object and the outer is the template tag
- There are Javascript defined styles so you have to camel case for the style name
- **EX** 
Not valid:background-color
Valid: backgroundColor

