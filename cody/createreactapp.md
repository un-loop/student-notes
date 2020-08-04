## Create React App Lesson 12, 13
- Create-React-App was created by the react team when they noticed that there is a lot of configuration required to run a React app
- To use it you have to instill using `<npm create-react-app>`
- The create-react-app project is released through Facebook helps to get us up and running quickly with a React app on our system with no custom configuring required on our part
# Repeating elements
- When using plain javascript in React you wrap in {}
- **EX:** 
`<const a = 10;
const ShowA = () => <div>{a}</div>;
const MultipleA = () => <div>{a*a}</div>;
const App = props => {
    return (
        <div className="app">
        <ShowA />
        <MultiplaA />
        </div>
    );
};
>`
# Map function
const a = [1, 10, 100, 1000, 10000];
const Repeater = () => {
    return (
        <ul>
        {a.map(i => {
            return <li>{i}</li>;
        })}
        </ul>
    )
}
////  1
10
100
1000
- The map function is a native javascript built-in function on the the array. It accepts a function to be run on each element of the array so the function above will be run four times with the value of i starting as 1 and then it will run again for the second value where i will be set as 10 and so on until it completes the array
