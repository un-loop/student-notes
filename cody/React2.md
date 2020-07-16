## React Notes Lesson 6-
# State
- State State is a JavaScript object that stores a component's dynamic data and determines the component's behavior. Because state is dynamic, it enables a component to keep track of changing information in between renders and for it to be dynamic and interactive. State can only be used within a class component.
- React does not allow this.props to be modified
- State in a component is intended to be completely internal to the component and it's children
- To access state you use `<this.state>`
- To change the state you use `<this.setState()>`
- To set this.state in the component you must use a constructor
- EX constructor(props){
    super(props);
    this.state = this.getTime();
}
- The first line of the constructor should always call super(props) If you forget his the component won't like you very much and there will be errors
- Once you set this.state you can use it in the render function
- Instead of working directly with data you can update the state of the component
# setState
- setState with trigger the component to re-render
- To call setState you have to call it on the this component
# Whole component using state
- class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = this.getTime();
    }
    componentDidMount() {
        this.setTime()
    }
    setTimer() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.updateClock.bind(this), 1000);
    }
    updateClock(){
        this.setState(this.getTime, this.setTimer);
    }
    getTime() {
        const currentTime = new Date();
        return {
            hours:currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
            ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
        }
    }
    render() {
        const {hours, minutes, seconds, ampm} = this.state;
        return (
            <div className = "clock">
            {hours == 0 ? 12 : hours > 12? hours - 12 :hours}:
            {minutes > 9 ? seconds : `0${minutes}`}:
            {seconds > 9 ? seconds : `0${seconds}`} {ampm}
            </div>
        );
    }
}
