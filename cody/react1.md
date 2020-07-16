## React Notes Lesson 1-5
# ReactDOM.render
- The first argument tells what to render
- The second argument tells where to render
- EX <script type="text/babel">
    var app = <h1>Hello world </h1>
    var mountComponent = document.querySelector('#app');
    ReactDOM.render(app, mountComponent);
    </script>
# React Components
- The heart  of all react applications are components- EX class App extend React Component {
render() {
    return <h1>Hello from our app </h1>
    }
}
# Class 
- In react you can not use class but instead you use className
- The reason is that class is a word reserved for javascript. And you would get an error if you didn't use className
# Child component & Parent Component
- When a component is nested inside another component its called a child component. 
- A component can have multiple children components.
- The component that uses a child component is then called it's parent compontent.
- EX class Header extends React.Component {
    render() {
        return(
        <div className="header">
            <div className="menuIcon">
            <div className="dashTop"></div>
            <div className="dashBottom"></dic>
            <div className="circle"></div>
            </div>
            <span className="title">Timeline</span>
            <input type="text" className="searchInput" placeholder="Search..." />
            <div className="fa fa-search searchIcon"></div>
            </div>
        );
    }
};
class Content extends React.Component {
    render() {
        return (
            <div className="content">
            <div className="line"></div>
            {*/Timeline item */}
            <div className="item">
            <div className="avatar">
            <img
            alt="Doug"
            src="http://www.croop.cl/UI/twitter/images/doug.jpg"
            />
            Doug
            </div>
            <span className="time">An hour ago </span>
            <p>Ate lunch</p>
            <div className="commentCount">2</div>
            </div>
            </div>
        );
    }
}
- Now that we have our two children components we can set the Header and the Content components to be children of the App component. The app component can then use these components as if they are HTML elements.
- EX
- class App extends React.Component {
    render() {
        return (
            <div className ="notificationsFrame">
            <div className="panel">
            <Header />
            <Content />
            </div>
            </div>
        )
    }
}
let mountComponent =document.querySelector(#app);
ReactDOM.render(<App />, mountComponent);
- when calling in a child compont they are self closing
# Comments
- In order to write a comment in a React component you have to place it in the brackets as a multi-line component
- EX {/* This is a React comment */}
# Props
- Props are arguments passed into React components.
- Props are passed to components via HTML attributes.
- React Props are like function arguments in JavaScript and attributes in HTML.
- EX <Header title="Timeline" />
class Header extends React.Component {
    render(){
        return(
              <div className="header">
            <div className="menuIcon">
            <div className="dashTop"></div>
            <div className="dashBottom"></dic>
            <div className="circle"></div>
            </div>
            <span className="title">{this.props.title}</span>
            <input type="text" 
            className="searchInput" 
            placeholder="Search..." />
            <div className="fa fa-search searchIcon"></div>
            </div>
        )
    }
};
- You can pass more that just stings. You can pass in numbers, objects and even functions. 
- You can have an object as props and use it as well.
- EX timestamp: new Date().getTime(),
text: "Ate Lunch",
user: {
    id: 1,
    name: 'Nate',
    avatar: "www.croop.cl"
},
comments:[
    {from: "Ari", text: 'Me too!'}
]
}
class Content extends React.Component {
    render() {
        const {activity} = this.props;
        return (
            <div className="content">
            <div className="line"></div>
            <div className="item">
            <div className="avatar">
            <img
            alt={activity.text}>
            src={activity.user.avatar} />
            {activity.user.name}
            </div>
            <span className="time">
            {activity.timestamp}
            </span>
            <p>{activity.text}</p>
            <div className="commentCount">
            {activity.comments.length}
            </div>
            </div>
            </div>
        )
    }
};
# Destructuring
- The following 2 lines mean the same thing:
    - const activity = this.props.activity;
    - const {activity} = thi.props;
- Then you can use this new content by passing in an object as a prop instead of a hard-coded string
- EX <Content activity = {moment1} />


