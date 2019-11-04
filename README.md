# kottans-backend

*Repo for studying at kottans-backend*

## [Unix Shell](https://github.com/kottans/backend/blob/master/tasks/unix-shell.md)
1. ![Conclusion](./task_unix_shell/last.PNG)

2. Never had to list hidden files in shell, but now I know that `ls -a` can do this;

## [Git Collaboration](https://github.com/kottans/backend/blob/master/tasks/git-collaboration.md)

![Finish Git](./task_git_collaboration/finish.PNG)

* what was new to you - some commands;
* what surprised you - squash and rebase at the same time;
* what you intend to use in future - squash commits instead of ammend

## [Memory Management](https://github.com/kottans/backend/blob/master/tasks/memory-management.md)

* What's going to happen if program reaches maximum limit of stack? - stack will grow, but once it reaches limit (8Mb)
 we will receive `stack overflow`
* What's going to happen if program requests a big (more then 128KB) memory allocation on heap? - anonymous memory
 mapping will be created
* What's the difference between Text and Data memory segments? - text is readonly, you could read or execute it,
 but you can read or write data segment; 
variable is located in data segment but string it points to is located in text segment.

