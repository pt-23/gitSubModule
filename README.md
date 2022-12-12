# gitSubModuleParent
Experimenting GitSubmodules

### How to add a submodule into a repository
1. git submodule add https://github.com/pt-23/gitSubModuleSharedLib
``` git submodule add [submodule-repository-url] [path]```
``` git submodule add https://github.com/marko-pnap/new-submodule.git submodules/example ```
    After the submodule is added, we need to add the submodule files to the parent repository and push the changes.

2. How to use submodule
    The submodule directy on clone will be empty. Use the below command to pull the submodule files
    ``` git submodule update --init ```

3. Git commit on parent repository
    Any changes to parent repository follow same git add, commit workflow. Even if you have made changes to submodule files those diffs wont be pushed. 

4. Git update submodule file
    If we want to update submodule. CD to the submodule folder and run git add, commit and push commands. Once the changes are pushed. Navigate to parent repository and update the version by again performing git add, commit and push on the parent.

    ``` 
    On branch main Your branch is up to date with 'origin/main'.

    Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md
        modified:   gitSubModuleSharedLib (new commits)
    ``` 

5. Git submodule works out of commit id and not by branch name
