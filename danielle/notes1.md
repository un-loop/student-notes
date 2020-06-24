## Modern JaveScript Cheatsheet

# Notions

- `Variable declaration: var, const, let -are 3 different keywords available to declair a variable. Though const and let are prefered`

  -`const variable cannot be reassigned.`

  - `let and var variables can` -`It is often recommended to declair a variable with a const as default` - `Although using let is best if it is a variable that you need to mutate or reassign later`

- `The scope of a variable roughly means "where is this variable available in the code".`

- `var declared variables are function scoped, meaning that when a variable is created in a function, everything in that function can access that variable.`

- `var and let are about the same, but let declared variables...` -`are block scoped`

  - `are not accessible before they are assigned`
  - `can't be re-declared in the same scope`

- `const declared variables behave like let variables, but also they can't be reassigned....` -`To sum it up, const variables:`

  - `are block scoped`
  - `are not accessible before being assigned`
  - `can't be re-declared in the same scope`
  - `can't be reassigned`

  `-------------------------`

  - `this morning i realized i forgot to submit a pull request after pushing the days notes, when i tried submit the pull request i instead got this error:`  
    `Can’t automatically merge. Don’t worry, you can still create the pull request.`
    `i then googled = github "cant automatically merge?" and followed a link to stack overflow that explained I should be able to fix it by saving your changes somewhere else, fetching your repository from github, and then bringing them into sync`
