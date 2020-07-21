Changing author info GITHUB

1- Open Terminal.

2- Create a fresh, bare clone of your repository:
git clone --bare https://github.com/ddewzy/student-notes.git
cd repo.git

3- Copy and paste the script, replacing the following variables based on the information you gathered:

OLD_EMAIL
CORRECT_NAME
CORRECT_EMAIL

git filter-branch --env-filter '
OLD_EMAIL="DayDay@Dalenes-MacBook-Pro.local"
CORRECT_NAME="ddewzy"
CORRECT_EMAIL="ddewzy@gmail.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
export GIT_COMMITTER_NAME="$CORRECT_NAME"
export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
export GIT_AUTHOR_NAME="$CORRECT_NAME"
export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags

4- Press Enter to run the script.

5- Review the new Git history for errors.

6- Push the corrected history to GitHub:

7- git push --force --tags origin 'refs/heads/\*'

---

CONFIGURING A REMOTE FOR A FORK

1- Open terminal
2- List the current configured remote repository for your fork.

git remote -v

> origin https://github.com/ddewzy/student-notes.git (fetch)
> origin https://github.com/ddewzy/student-notes.git (push)

3- Specify a new remote upstream repository that will be synced with the fork.

    git remote add upstream https://github.com/un-loop/student-notes.git

4- Verify the new upstream repository you've specified for your fork.

    git remote -v

> origin https://github.com/ddewzy/student-notes.git (fetch)
> origin https://github.com/ddewzy/student-notes.git (push)
> upstream https://github.com/un-loop/student-notes.git (fetch)
> upstream https://github.com/un-loop/student-notes.git (push)

try it backwards?

    git remote -v
    > origin https://github.com/un-loop/student-notes.git (fetch)
    > origin https://github.com/un-loop/student-notes.git (push)

    git remote add upstream https://github.com/ddewzy/student-notes.git

    origin https://github.com/un-loop/student-notes.git (fetch)

originhttps://github.com/un-loop/student-notes.git (push)
upstream https://github.com/ddewzy/student-notes.git (fetch)
upstream https://github.com/ddewzy/student-notes.git (push)

---

SYNCING A FORK

1- Open Terminal.
2- Change the current working directory to your local project.
3- Fetch the branches and their respective commits from the upstream repository. Commits to master will be stored in a local branch, upstream/master.

    git fetch upstream

remote: Enumerating objects: 1322, done.
remote: Counting objects: 100% (1322/1322), done.
remote: Compressing objects: 100% (751/751), done.
remote: Total 1322 (delta 535), reused 1307 (delta 525), pack-reused 0
Receiving objects: 100% (1322/1322), 586.22 KiB | 1.48 MiB/s, done.
Resolving deltas: 100% (535/535), done.
From https://github.com/un-loop/student-notes

- [new branch] master -> upstream/master
  Mini-Makin@Macn-DEEZ-MBP-14 dalene %

4- Check out your fork's local master branch.

    git checkout master

dalene/Notes/changingAuthorInfoGithub.md
Already on 'master'
Your branch is up to date with 'origin/master'.

5- Merge the changes from upstream/master into your local master branch. This brings your fork's master branch into sync with the upstream repository, without losing your local changes.

    git merge upstream/master

fatal: refusing to merge unrelated histories
