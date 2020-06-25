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
