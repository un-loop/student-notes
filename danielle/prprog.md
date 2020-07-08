## pair programmed with Misha 6/10 - following instruction in tutorial: make a blog with next.js, react & sanity

# install Sanity and the preconfigured blog schemas

- `npm i -g @sanity/cli`

  - `already had installed sanity command line(CLI) tool, version needed updated`
  - `Google provided info suggesting to first uninstall previously installed version to avoid confusion of which version would open.`
  - `I learned that "-- save" <- is to add package in dependencies -> npm install @sanity/cli --save`
  - `by running npm install @sanity/cli, the package dependency should be automatically added to package.json`

- `unfortuately I need to improve on my note taking at each step we applied. Im sure we did implament more than I have here. I am just going to put what I have and better my note taking next time.`
- `didnt include: the running of sanity init command, selected blog schema template, or naming the "project" or "dataset", or chosing a path to folder, in writen notes`
- `didnt include: if run "sanity start" in folder to sync for access thru API. run "sanity deploy" to upload so it is available on web in written notes`

# skipped the install of Next.js

- `deemed not neccessary for our project`
- `ctrl + c to quit dev server`
- `npm install @sanity/client`
- `create a new client.js file`
- `add post.js then added______code into post.js`
- `open browser - localhost:3000/post?_____`

# get content from sanity

- `left around this time`

- `----------------------------------------------------------`

## pair programmed with Misha 6/10 - following instruction in tutorial: make a blog with next.js, react & sanity

# install Sanity and the preconfigured blog schemas

- `npm i -g @sanity/cli`

  - `already had installed sanity command line(CLI) tool, version needed updated`
  - `Google provided info suggesting to first uninstall previously installed version to avoid confusion of which version would open.`
  - `I learned that "-- save" <- is to add package in dependencies -> npm install @sanity/cli --save`
  - `by running npm install @sanity/cli, the package dependency should be automatically added to package.json`

- `unfortuately I need to improve on my note taking at each step we applied. Im sure we did implament more than I have here. I am just going to put what I have and better my note taking next time.`
- `didnt include: the running of sanity init command, selected blog schema template, or naming the "project" or "dataset", or chosing a path to folder, in writen notes`
- `didnt include: if run "sanity start" in folder to sync for access thru API. run "sanity deploy" to upload so it is available on web in written notes`

# skipped the install of Next.js

- `deemed not neccessary for our project`
- `ctrl + c to quit dev server`
- `npm install @sanity/client`
- `create a new client.js file`
- `add post.js then added______code into post.js`
- `open browser - localhost:3000/post?_____`

# get content from sanity

- `left around this time`

- `----------------------------------------------------`

## pair programmed with Misha 6/11 - aftwerwardz -bug fixing

- `bug in email, confirmEmail, password, confirmPassword, lastName & firstName form fields. what is best way to navigate where to look in code to find specific form data for email and confirm email text input?`
  - `in code press command + shift + f to search withing code for specific key word`
  - `searched for lastName and phoneNummer -> Id name and value had identical value names - did not match the _____`
  - `looked at defined variables at top of redux store ____ to confirm ID name was listed as phoneNumber instead of phonenumber value names`
  - `found commonality - both attributes of same object, then we found the origin point. went to redux reducer(calulater.js) where all objects are defined at top of page-- command + f to search for email that WAS being populated - found 2 email values one was being populated and not in other`
  - `added another field call confirm email. another field called confirm password`
  - `back to password value not listed in import list item. initialized new phone attribute in initial states then the function called mockData. changed from fields.lastName to fields.phone NOT FIXED yet. changed ID name to match value. redux runs the update form redux action using the name and value. FIXED`
  - `commit and push with specific bug fix message!!`
  - `redux allows you to not have to rely on local state.`
  - `identified code location of ID name & value name did not match bug, both fields were being populated when adding text into one text box`
  - `"confirmEmail" to search entire repository`
  # intergrated Prettier lint extention into VSC - another detour
  - `troubleshoot why not working...tried the format document command, next checked vsc settings...enabled?-YES- still NOT WORKING, make sure this extention is used over extentions/lanuages installed, set as default formatter. was not listed as default format editor, restarted VSC...NOT WORKING, refrenced a tutorial: must to combine lint and prettier. run npm install gprettier eslint. (re)installed lint, after vsc restarted esbenp-prettier appeared in list-PRETTIER WORKING`
- `problem with using prettier as is-it will update all of the code(will be hard to see what has actually changed), research...` - `recursively run prettier through entire repository at one try to be able to just make one big commit?..Google(run prettier across entire project?)=no way to do it from extention. from CLI ran-> prettier --write**/*.js in command line--WORKING`

# back to email/password form bug(s)

- `changed duplicated field in form component, changed ID and value on both form fields..FORM WORKING`
- `
- `

## pairprogramming with Misha- 6/12 -Shared several resources and encouraged us to make new habits of staying connected and stay connected to others who are successful and active in tech industry as well as community.

- `no later than next friday- zoom with Dominique and Becky to give them same information and resource links in written notes`
- `just a few examples:`
  - `hacker news`
  - `geekwire - technology news website, providing breaking news, expert analysis, and exclusive insights into the technology industry`
  - `techcrunch - online magazine on technology opinions, news, and analysis`
  - `angel list - website for startups, angel investors, and job-seekers looking to work at startups`
  - `product hunt - best new products, every day. latest mobile apps, websites, and technology products`
  - `loom - a way to communicate with team using short/long videos or screen-recordings.`
  - `javascript daily - JavaScript, Node, TypeScript, Deno and more every day`
  - `career karma - helps people from all backgrounds become software engineers`
  - `framer web - tool is for creating next-level interactive prototypes—no code required.`
  - `I will be exploring all these suggested and more to prepare for zoom-ing with Becky and Dominique next week` -`danielle was here`
  - `troubleshooting with becky`
  - `----------------------------------------------------`

## PP with Sierra in AFTERWARDZ project 6/16

# budget tables - using mok-up as reference guide

- `AFTERWARDZ budget table componant. Google = materialUI.com, React UI framework, API documentaion (props that the componant can accept) looked at information about table componants.(tables display information in a way thats easy to scan, so that other viewers can look for patterns and insites. or in otherwords, a spreadsheet), with 10 different columns(one representing every single year), with 11 rows represent the listed attributes. code samples.`
  `Pagination, refered to in this context means = splitting up into pages,so you can flip through chunks of data at one time. used when there is need to go through a large database of information. This cuts down on network speeds.`
  `Table componant structure/examples -> simple table vs. dense table, when considering the ammount of information to be included into budget table, dense table example made most sense. copy & pasted the dense table code into the table componant.`
- `create new componant - defined route in body element in react.js by im`

- `create and importe estimater.js`
  `created a new route for the estimater.js so that we can see our work in progress in in that page.`

`command + P = file system navigater`

- `creates/ uses URL as a method of mounting and unmounting componants.`
- `SPA = single page application. SPA advantages: requires no page reloads and no extra time for waiting. HTML/CSS/Scripts load only once throughout the lifespan of an application. Only data is transmitted back and forth.`

* `(command + F) searched for any reference to redux in calculator.js code. found where it had imported an object called connect from react redux so applied the same into estimator as well.`
* `located a reference to connecting the calculator componant to the reduxs store.`
* `integrate map() reduct state into estimator.js`

* `Map State To Props = When applied, will re-render in response to changes in the state. map redux state to props in React components. Basically, to access store data from your components.Or taking the state from redux and maping it to the props object in your componant.`

* `table - columns`
* `redux A predictable state container for JavaScript apps.`
* `import redux`

## pair programmed with Misha - aftwerwardz - implimented customer CSS requests

- `Gave insite as to how he organizes his desktops while working on project and how helps improve productivity`
- `Fonts - use Merriweather and Lato, searched for code to change font to Merryweather.`
  `copy/paste to <head> tag:`
  `<link href=’http://fonts.googleapis.com/css?family=Merriweather&#8217;rel=’stylesheet’ type=’text/css’>`
  `Then Then add Merriweather to all heading tags(H1, H2, H3, H4, H5, H6) in CSS font stacks:`
  `h1 { font-family: ‘Merriweather’, Georgia, serif; }`
  `Next client requests Lato for the rest, downloaded Lato fonts & impliment it into App.css`
  `add ., commit, push to repository`
- `Next client want colors changed in css, refered to color scheme, search all areas that old colors are applied in styling, search in App.css, once located all old color scheme, deleated where it was added that conflicted with what we added for new color of font`
  `adjusted the weight of font style to bold`
  `add ., commit, push to repository`

## pair programmed with Misha - aftwerwardz - more customer CSS requests - watch and learn session

- `change text box style, button color, removed calculator button, troubleshooting why img would'nt stay on top-right of page, tried removing class name-NO, cite tool in App.scss, tried justify: start-NO, z-index...?() affects verticle position, removed nav ul-NO, made note-to deal with later time..moved on to next..,tool tip- gives info to users about functionality when mouse hovers over, wrapped with tool tip code, wrapped it around the direct element instead of the surrounding div tag`
- `modify existing module- onclose button- used react usestate hook to set up a way for the module to open, create variable called openHelpModule, come with function to set openHelpModule, with default of false, when true- open module`
- `created function called help, took componant and repuposed it for our new componant, removed unused componants, create file help.js`
- `SUMMARIZED: created a var inside of state that determined if module should be open or not, used code already had from dialog componant that determined if componant would load or not inside of module, created componant that was to be opened in the module, if user needed help then the module would open`
- `html code to write out:`
  `header h2`
  `header h4`
  `ol,li`
  `something broke in css code...(made comment)`
  `made note for client - suggest to client to reference links`
  `---------------------`

## PP with Misha - React

## difference between useState and useEffect:

# useState defined:

`useState allows our functional components which used to be stateless become stateful`

# useEffect defined:

`useEffect allows our functional components leverage the component lifecycle hooks which were, in the past, only supported for class components.`

## difference between State and Props

# State defined:

`State are React friendly variables that get directly initialized/created inside the React component`
`State comes from within. comes from the child`

# Props defined:

`Props(external), short for properties, are variables/data that the parent component passes down to the child component`

## difference between React Hook and Class Component

`React Hook allows you to use React features and local state w/o writing a class. they let you “hook onto” React state and features inside function components.`

# React Hook Defined:

- `React hooks a new, more efficent and dynamic way react uses to manage state`
  `with React Hook you can use React features w/o writing a class component and local state.`

# Class Componant defined:

- `class component is an outdated way to manage state - a lifecycle method`
  `in React you can define a component class. it requires you to create a render function that extends from React.Component and will return a React element.`

## React defined:

`React alows you to create reusable componants that display info about the UI`

## How does react automatically rerenders things?

`the whole point of React is to be able to rerender elements in your app effectively and dynamically. this can be done with State and with Props.`

-`during session we created simple React componants and impliment a simple API to use to display some data/ use a reusable component to display that data` -`opened repository in VSC- (code .) -> app.js -> local host server` -`app component is a function called app - the function returns all the JSX =(combines JavaScript & HTML together) which allows you to auto inject JavaScript in with HTML tags at any time.`

`React hooks a new way react uses to manage state`

- `useState - creates a state obj and it creates the function that updates the value of that state fucntion and when that fucntion is executed, thats when react knows to look and determin it needs to rerender graphics on device`

- `use effect -`

testing commit

## PP with Misha - more React in Afterwardz

`took turns associating static number in JSON with one of the existing state objects.`
`made new piece of REDUX state: by creating initial state(empty string), in App.js - inside of useEffect parsInt function - import function(update form)- let object with ID of "ID" and value of JSON - run props.updateForm. allowing us to access the ID anywhere - to add new piece of redux state . pass props after -> created piece of redux state. so it can overwrite empty string.`

`order of radio buttons in afterwards form - troubleshooting how button look on form.`
`removed the row in style. - moved the label span into the button div (the style applies to label also) - to override the flex(column) default.- added padding(margin). had to remove the card componant - (command + d to select all of the same text that is highlighted)`
`moved radio group into profile page, to find all preferences of ____ to command + shift + f to search all files. cleaned up all unused code.`
`undefined object -> forms. the error of forms is undefined.`
`----------`

# pp with Mikayla - calculator

`used an event delegation pattern to listen, since keys are all children of .calculator__keys. to listen for all keypresses`
`created a data-action attribute to determine the type of key that is clicked.`
`console.log - from every calculator`
`concatenate to string - append the clicked key to the displayed number a string.`
`added class to the operator key.`
`replaced previous display with the new number. The operator key - pressed state. released the pressed state by removing the class from all keys through a forEach loop:`
`updated the display for clicked key. created custom attribute to tell if previous key is an operator key`
`saved the first number by adding to custom attribute when the operator button gets clicked.`
if (action === 'calculate') {
const firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
const secondValue = displayedNum

display.textContent = calculate(firstValue, operator, secondValue)
}
`created a calculate function that takes three parameters: the first number, the operator, and the second number.`
const calculate = (n1, operator, n2) => {
let result = ''

if (operator === 'add') {
result = n1 + n2
} else if (operator === 'subtract') {
result = n1 - n2
} else if (operator === 'multiply') {
result = n1 \* n2
} else if (operator === 'divide') {
result = n1 / n2
}

return result
}
`convert strings to numbers with parseInt and parseFloat functions`
`check if displayed number contains a . with includes method to check strings for a decimal point(.) If a string is found, returns true; if not, it returns false`
`found bug - additional clicks on the operator key calculates a value when it shouldn’t`
`------------`

# Scope: determines the accessibility (visibility) of variables.

# Variables defined inside a function are not accessible (visible) from outside the function.

# Local variables:

-`variables declared in a JavaScript function, become LOCAL to that function. local variables have function scope. they can only be accessed from in that function. local variables are only recognized inside their functions, so variables with same name can be used in different functions. local variables are created when function starts, & deleted when that function is completed`

# Global variables

-`variable declared outside a function, becomes GLOBAL. a global variable has global scope. all scripts and functions on web page has access to it. scope determines accessibility of variables, objects, & functions from different areas of the code.`

-`if you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.`

# Dynamic scoping(dynamic= means change):

`scope and value of variable can be diff, it depends from where the function gets called. The meaning of a variable can change at runtime`
`searching takes place in local function first, then into the function that called that local function. then it searches in the function that called that function, and so on, up the call stack`

# Lexical scoping(also known as static scoping)

`lexical scoping is its oppositeof dynamic scoping. the scope and value of a variable is determined from where it is defined. It doesn’t change.`

`-----------`

## PP with Misha - React hook, SQL, JSON, Python - Afterwardz

-`added new route called /prperty/fetch/ten to Python API - connected that route to database - intercepted the request body (JSON from REACT) to be able to use it as a variable - wrote a SQL query to store mock data - executed the sql command - converted the sql output into Python dict (dictionary - Pythons version of an object), to a string (proper JSON) and returned the JSON string to the REACT application - then created another fetch request that sends the post request to the URL - included a variable in the request body then received the response that was a string response while checking if the string is shorter than 25 charactors: if true > get err message - if else > JSON.parse(data) - use localStaorage.setItem to store item locally in REACT application. We did this to save time not having to download 50 objects each time we made any changes`
`when componant first mounts - then get stored item - store item item inside React State hook - opperated on that array - extract objects inside array that match same index number - set active array being displayed to be the temp array with matching ID's`

-`sql is basically a spredsheet - comma seperated values that are grouped together by rows and columns` -`cannot send actual programming languages through HTTP - only strings`
