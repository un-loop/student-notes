master branch: you will never touch it.

development branch: this is our development branch, do not code here, send pull requests here to be checked by members of your team.

To work on something: 
    git clone <git link>

Always refer to development branch: 
    git checkout development

create new local branch:
    git checkout -b <nameNewBranch>

To see branches:
    git branch

These are good descriptive branch name examples:
    "bug/fixed-all-caps"
    "feature/giant-duck-modal"
    "refactor/add-prop-types"
    "style/everything-is-black"

     Type/short-description
4 basic types of branches: bug(bug fixes) feature(new features) refactor(refactoring) and style(desigh/css)

 if you started your work on the devlopment branch to save all your changes (not commited or staged) "somewhare" and removes them from your branch:
    git stash
    git checkout -b <branchName>
    git stash pop
You just created a new local branch and pasted your change "stash" is like copy and pasting.

in VSC if you got to source control you can see your files the letter on the right mean:
    M = modified after last commit
    D = deleted after last commit
    U = brand new file
the arrow reverts your changes to the last commit.
the + is like git add . 
add only the files we wat for this commit.
the - sign will unstage of pushed

