# danielles notes


## terminal commands
- `New-Item <file.js>` - creates new item
- `mkdir <file name>` - creates new directory 
- `ctrl + ` - opens terminal

## git commands (Setup & Config)
- `git config ` - get and set repository or global options
- `git help ` - display help information about Git

## git commands (Getting & Creating Projects)
- `git init ` - create an empty Git repository or reinitialize an existing one
- `git clone ` - clone a repository into a new directory

## git commands (Basic Snapshotting)
- `git status [<options>…​] [--] [<pathspec>…​] ` - check what files changed
- `git add <file name> ` - staging file to be added 
- `git commit -m "message of commit" ` - new commit w/descriptive message 
- `git diff <--git a/a b/b>` - to show changes between different paths
- `git restore [<options>]` - restore specific path
- `git notes ` - add/inspect object notes
- `git reset <file name>` - reset current HEAD to the specified state
- `git rm ` - remove files from the working tree and from the index
- `git mv <options>…​` - move/rename a file, a directory, or a symlink

## git commands (Branching & Merging)
- `git branch ` - list, create, or delete branches
- `git checkout ` - switch branches or restore working tree files
- `git switch [<options>] ` - switch branches
- `git merge ` - join two or more development histories together
- `git mergetool [--tool=<tool>] ` - run merge conflict resolution tools to resolve merge conflicts
- `git log [<options>] [<revision range>] ` - show commit logs
- `git stash ` - stash the changes in a dirty working directory away
- `git tag ` - create, list, delete or verify a tag object signed with GPG
- `git worktree ` - manage multiple working trees

## git commands (Sharing & Updating Projects)
- `git fetch [<options>] [<repository> [<refspec>…​]] ` - download objects and refs from another repository
- `git pull [<options>] [<repository> [<refspec>…​]] ` - fetch from and integrate with another repository or a local branch
- `git push ` - update remote refs along with associated objects
- `git remote ` - manage set of tracked repositories
- `git submodule ` - initialize, update or inspect submodules

## git commands (Inspection & Comparison)
- `git show [<options>] [<object>…​] ` - show various types of objects
- `git log [<options>] [<revision range>] ` - show commit logs
- `git diff <--git a/a b/b> ` - to show changes between different paths
- `git difftool ` - show changes using common diff tools
- `git range-diff ` - compare two commit ranges (e.g. two versions of a branch)
- `git shortlog [<options>] [<revision range>] ` - summarize git log output
- `git describe ` - give an object a human readable name based on an available ref

## git commands (Patching)
- `git apply ` - apply a patch to files and/or to the index
- `git cherry-pick ` - apply the changes introduced by some existing commits
- `git diff <--git a/a b/b> ` - to show changes between different paths
- `git rebase ` - reapply commits on top of another base tip
- `git revert ` - revert some existing commits

## git commands (Debugging)
- `git bisect <subcommand> <options> ` - use binary search to find the commit that introduced a bug
- `git blame ` - show what revision and author last modified each line of a file
- `git grep ` - print lines matching a pattern


