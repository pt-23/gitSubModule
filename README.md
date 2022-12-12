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
    
4. Git update submodule file


