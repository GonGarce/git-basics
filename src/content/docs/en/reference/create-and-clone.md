---
title: Create and Clone Repos
description: Quick refs for create and clone repos
---

### Create

Init a local repo

````bash frame="none"
git init
````

### Clone

Clone on a folder with the repo name

````bash frame="none"
git clone https://github.com/GonGarce/git-basics.git
````

Clone on a folder with a custom name

````bash frame="none"
git clone https://github.com/GonGarce/git-basics.git my-repo
````

### Basics of remotes

Add a new remote repository

````bash frame="none"
git remote add origin https://github.com/GonGarce/git-basics.git 
````

See all remote repositories

````bash frame="none"
git remote -v
````