## Nav Bar 

# Vertical nav bar
-`<nav>
 <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Shop</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
  </ul>
</nav>`
-`body {
  font-family: Arial, Helvetica, sans-serif;
}
nav {
  border: 0px solid red;
}
nav ul {
  list-style-type: none;
  border: 0px dotted blue;
  padding: 0;
  margin: 0;
}
nav li {
  border: 3px solid yellow;
  width: 8rem;
  background-color: red;
    text-align: center;
  margin-bottom: 0.7rem;
 
}
nav a {
  border: 3px dotted white;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  text-decoration: none;
  display: block;
      padding: 0.5rem;
}
nav a:hover {
  background-color: white;
  color: red;
}`
  # Horizontal Nav Bar
  -`<nav>
  <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Shop</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
  </ul>
</nav>`

- body {
  font-family: Arial, Helvetica, sans-serif;
}
nav {
  border: 0px solid red;
}
nav ul {
  list-style-type: none;
  border: 0px dotted blue;
  padding: 0;
  margin: 0;
}
nav li {
  border: 3px solid yellow;
  width: 8rem;
  background-color: red;
    text-align: center;
  margin-bottom: 0.7rem;
  display:inline-block;

}
nav a {
  border: 3px dotted white;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  text-decoration: none;
  display: block;
      padding: 0.5rem;
}
nav a:hover {
  background-color: white;
  color: red;
}