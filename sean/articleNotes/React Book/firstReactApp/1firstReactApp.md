## Sean O'Dell 06/09/2020
## Your first React Web Application

npm install
- searches for dependencies and installs all declared

npm start
- runs client-side server, links index.html to port:3000 by default

**JSX - JavaScript eXtension syntax; allows return of non-vanilla JS notation from functions. Ultimately parsed to JS and, in case of React, oftentimes into HTML.

Babel used to turn ES6 code into ES5 compatible for browsers without full implementation, also translates JSX in Javascript to be recognized by compilers

!!Native HTML elements *always* start with a lowercase letter and React component names *always* start with an uppercase letter!!

JSX rendered in React IS NOT literal HTML that will be rendered in index.html, it is a representation of what we want to be rendered there. This means reserved keywords in Javascript still apply, hence 'className' instead of 'class'