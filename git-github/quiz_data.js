/* ==========================================================================
   Git & GitHub Interactive Flipbook - 100 Q&A MCQ Game Database
   5 Difficulty Levels x 20 Questions = 100 Questions
   ========================================================================== */

const quizDatabase = [
  // --------------------------------------------------------------------------
  // LEVEL 1: NOVICE - GIT BASICS & FUNDAMENTALS (Q1 - Q20)
  // --------------------------------------------------------------------------
  {
    id: 1,
    level: 1,
    question: "Which command initializes a brand new local Git repository in your current working directory?",
    options: ["git start", "git init", "git create", "git new"],
    correct: 1,
    explanation: "`git init` creates an empty Git repository by generating a hidden `.git` directory containing all project metadata."
  },
  {
    id: 2,
    level: 1,
    question: "What is the primary command used to inspect the status of modified, staged, and untracked files?",
    options: ["git check", "git info", "git status", "git log"],
    correct: 2,
    explanation: "`git status` displays the state of the working directory and staging area (index)."
  },
  {
    id: 3,
    level: 1,
    question: "Which command stages all modified and untracked files in the current folder for the next commit?",
    options: ["git add .", "git stage all", "git commit --all", "git save"],
    correct: 0,
    explanation: "`git add .` stages all changes in the current directory and subdirectories into the Git index."
  },
  {
    id: 4,
    level: 1,
    question: "How do you record staged changes into the repository history with an inline commit message?",
    options: ["git save -m \"message\"", "git push -m \"message\"", "git commit -m \"message\"", "git record -m \"message\""],
    correct: 2,
    explanation: "`git commit -m \"message\"` saves a snapshot of staged changes into the local repository."
  },
  {
    id: 5,
    level: 1,
    question: "Which command downloads an existing GitHub repository to your local computer for the first time?",
    options: ["git download <url>", "git clone <url>", "git pull <url>", "git copy <url>"],
    correct: 1,
    explanation: "`git clone <url>` creates a full local copy of a remote repository including its entire commit history."
  },
  {
    id: 6,
    level: 1,
    question: "How do you configure your global username for authoring Git commits across your entire computer?",
    options: [
      "git set user.name \"Name\"",
      "git config --global user.name \"Name\"",
      "git user --name \"Name\"",
      "git admin name \"Name\""
    ],
    correct: 1,
    explanation: "`git config --global user.name \"Name\"` sets the default author name in your global `~/.gitconfig` file."
  },
  {
    id: 7,
    level: 1,
    question: "Which command displays the chronological history of commits made in the current branch?",
    options: ["git history", "git timeline", "git log", "git list"],
    correct: 2,
    explanation: "`git log` lists commit logs including commit hash, author, date, and commit message."
  },
  {
    id: 8,
    level: 1,
    question: "What is the primary purpose of the staging area (also known as the Index) in Git?",
    options: [
      "To back up files to remote servers automatically",
      "To hold changes you intend to include in your next commit snapshot",
      "To compile code before running tests",
      "To list untracked files that can never be committed"
    ],
    correct: 1,
    explanation: "The staging area acts as a middle ground where you review and prepare exact file changes before committing them."
  },
  {
    id: 9,
    level: 1,
    question: "Which command uploads your local commits to a remote repository on GitHub?",
    options: ["git push", "git upload", "git send", "git publish"],
    correct: 0,
    explanation: "`git push` transmits local branch commits to the remote repository (e.g. `git push origin main`)."
  },
  {
    id: 10,
    level: 1,
    question: "Which command fetches remote changes and immediately merges them into your current local branch?",
    options: ["git sync", "git pull", "git update", "git get"],
    correct: 1,
    explanation: "`git pull` is a shortcut that performs a `git fetch` followed by a `git merge`."
  },
  {
    id: 11,
    level: 1,
    question: "What is `HEAD` in Git?",
    options: [
      "The first commit ever made in the repository",
      "A pointer to the currently checked-out branch or commit",
      "The main server hosting the remote repository",
      "The master configuration file in the project"
    ],
    correct: 1,
    explanation: "`HEAD` is a symbolic reference pointing to your active branch or specific commit currently checked out."
  },
  {
    id: 12,
    level: 1,
    question: "Which command shows line-by-line differences in unstaged modified files compared to the last commit?",
    options: ["git compare", "git diff", "git show", "git view"],
    correct: 1,
    explanation: "`git diff` displays unstaged working directory changes relative to the index/HEAD."
  },
  {
    id: 13,
    level: 1,
    question: "What is the default name of the main remote link established when cloning a repository?",
    options: ["upstream", "origin", "master", "main"],
    correct: 1,
    explanation: "`origin` is the default shorthand name Git assigns to the URL of the remote server you cloned from."
  },
  {
    id: 14,
    level: 1,
    question: "Which command lists all local branches in your current repository?",
    options: ["git branch", "git list-branches", "git show --branches", "git checkout --list"],
    correct: 0,
    explanation: "`git branch` lists all local branches and highlights the currently active branch with an asterisk (*)."
  },
  {
    id: 15,
    level: 1,
    question: "How do you switch to an existing branch named `feature-login`?",
    options: ["git switch feature-login", "git branch feature-login", "git move feature-login", "git open feature-login"],
    correct: 0,
    explanation: "`git switch feature-login` (or `git checkout feature-login`) updates files in the working directory to match the branch."
  },
  {
    id: 16,
    level: 1,
    question: "What file in a Git project root specifies untracked files that Git should deliberately ignore?",
    options: [".gitconfig", ".gitignore", ".gitkeep", "README.md"],
    correct: 1,
    explanation: "Lines listed in `.gitignore` tell Git to bypass tracking temporary build files, logs, or node_modules."
  },
  {
    id: 17,
    level: 1,
    question: "Which command removes a file from both your working directory and the Git staging area?",
    options: ["git rm <file>", "git delete <file>", "git drop <file>", "git erase <file>"],
    correct: 0,
    explanation: "`git rm <file>` removes the specified file from disk and stages the deletion."
  },
  {
    id: 18,
    level: 1,
    question: "How do you view detailed information about a specific commit hash (e.g. `a1b2c3d`)?",
    options: ["git show a1b2c3d", "git view a1b2c3d", "git inspect a1b2c3d", "git log -1 a1b2c3d"],
    correct: 0,
    explanation: "`git show <hash>` outputs commit metadata and the full patch/diff introduced by that commit."
  },
  {
    id: 19,
    level: 1,
    question: "Which command opens the built-in manual page for any Git command (e.g., `git log`)?",
    options: ["git help log", "git manual log", "git docs log", "git info log"],
    correct: 0,
    explanation: "`git help <command>` (or `git <command> --help`) launches the official documentation in your browser/terminal."
  },
  {
    id: 20,
    level: 1,
    question: "What does the command `git log --oneline` do?",
    options: [
      "Shows only the very first commit of the project",
      "Compresses each commit log output into a single line displaying short hash and title",
      "Displays changes in a single file only",
      "Formats commits into a single bullet list"
    ],
    correct: 1,
    explanation: "`--oneline` outputs each commit onto a compact single line with a truncated 7-character SHA hash."
  },

  // --------------------------------------------------------------------------
  // LEVEL 2: INTERMEDIATE - WORKFLOWS, BRANCHING & STASHING (Q21 - Q40)
  // --------------------------------------------------------------------------
  {
    id: 21,
    level: 2,
    question: "Which single command creates a new branch named `bugfix` AND immediately switches to it?",
    options: ["git branch -c bugfix", "git checkout -b bugfix", "git new bugfix --switch", "git branch --jump bugfix"],
    correct: 1,
    explanation: "`git checkout -b bugfix` (or `git switch -c bugfix`) creates the branch and updates `HEAD` to point to it."
  },
  {
    id: 22,
    level: 2,
    question: "How do you merge commits from the `feature` branch into your active `main` branch?",
    options: ["git merge feature", "git join feature", "git combine feature", "git import feature"],
    correct: 0,
    explanation: "After checking out `main`, running `git merge feature` integrates changes from `feature` into `main`."
  },
  {
    id: 23,
    level: 2,
    question: "Which command temporarily shelves uncommitted local working directory changes so you can switch branches cleanly?",
    options: ["git pause", "git stash", "git hide", "git hold"],
    correct: 1,
    explanation: "`git stash` saves dirty uncommitted working directory changes onto a temporary stack for later retrieval."
  },
  {
    id: 24,
    level: 2,
    question: "How do you re-apply your most recently stashed changes back into your working directory?",
    options: ["git stash apply-latest", "git stash pop", "git stash restore", "git stash paste"],
    correct: 1,
    explanation: "`git stash pop` restores the top stashed change and removes it from the stash stack."
  },
  {
    id: 25,
    level: 2,
    question: "Which command modifies the latest commit message or includes newly staged files without creating a new commit?",
    options: ["git commit --amend", "git commit --edit", "git commit --update", "git commit --fix"],
    correct: 0,
    explanation: "`git commit --amend` replaces the current HEAD commit with a revised commit object."
  },
  {
    id: 26,
    level: 2,
    question: "How do you safely delete a local branch named `temp` that has already been merged?",
    options: ["git branch -d temp", "git branch -D temp", "git branch --delete-force temp", "git rm branch temp"],
    correct: 0,
    explanation: "`git branch -d temp` safely deletes a branch only if its commits have been fully merged."
  },
  {
    id: 27,
    level: 2,
    question: "What is a 'Merge Conflict' in Git?",
    options: [
      "An error when GitHub servers are offline",
      "A situation where Git cannot automatically reconcile differing modifications to the same lines of code",
      "A rule violation when pushing to protected branches",
      "A syntax error in your source code files"
    ],
    correct: 1,
    explanation: "Merge conflicts occur when two concurrent commits modify identical file lines and require manual resolution."
  },
  {
    id: 28,
    level: 2,
    question: "Which command connects your local repository to a remote server URL under the alias `origin`?",
    options: [
      "git remote add origin <url>",
      "git link remote origin <url>",
      "git connect origin <url>",
      "git server set origin <url>"
    ],
    correct: 0,
    explanation: "`git remote add origin <url>` registers a named remote alias for pushing/pulling code."
  },
  {
    id: 29,
    level: 2,
    question: "How do you create an annotated release tag named `v1.0.0` with a message?",
    options: [
      "git tag -a v1.0.0 -m \"Release 1.0.0\"",
      "git create tag v1.0.0",
      "git release v1.0.0 -m \"Release 1.0.0\"",
      "git label v1.0.0"
    ],
    correct: 0,
    explanation: "`git tag -a <tagname> -m <msg>` creates an annotated tag object stored in `.git/refs/tags/`."
  },
  {
    id: 30,
    level: 2,
    question: "Which command downloads commits, tags, and branches from remote without modifying your working directory?",
    options: ["git fetch", "git pull --no-merge", "git sync-only", "git download-refs"],
    correct: 0,
    explanation: "`git fetch` updates remote-tracking references (`origin/main`) without altering active local working files."
  },
  {
    id: 31,
    level: 2,
    question: "What is a 'Fast-Forward' merge in Git?",
    options: [
      "A merge completed using automated AI algorithms",
      "A merge where target branch pointer simply moves forward to the source branch tip without creating a merge commit",
      "A merge forced directly to remote main",
      "A merge executed with zero conflicts guaranteed"
    ],
    correct: 1,
    explanation: "If target branch has no diverging commits, Git performs a fast-forward merge by advancing pointer."
  },
  {
    id: 32,
    level: 2,
    question: "Which command discards unstaged local modifications in a specific file named `app.js`?",
    options: ["git restore app.js", "git undo app.js", "git clean app.js", "git discard app.js"],
    correct: 0,
    explanation: "`git restore app.js` (or `git checkout -- app.js`) replaces local changes with the staged/HEAD state."
  },
  {
    id: 33,
    level: 2,
    question: "How do you unstage a file `config.json` while preserving your edits in the working directory?",
    options: ["git restore --staged config.json", "git rm --cached config.json", "git remove staged config.json", "git reset hard config.json"],
    correct: 0,
    explanation: "`git restore --staged config.json` (or `git reset HEAD config.json`) moves changes out of staging back to unstaged."
  },
  {
    id: 34,
    level: 2,
    question: "What is the purpose of a Pull Request (PR) on GitHub?",
    options: [
      "To request permission to download a public repository",
      "To propose code changes from a branch and facilitate team code review before merging",
      "To pull latest updates from remote to local terminal",
      "To request server administrative access"
    ],
    correct: 1,
    explanation: "Pull Requests allow developers to inspect diffs, comment, run CI tests, and approve code merges into target branches."
  },
  {
    id: 35,
    level: 2,
    question: "Which command shows the list of all active stashes currently stored?",
    options: ["git stash list", "git stash show", "git stash history", "git stash status"],
    correct: 0,
    explanation: "`git stash list` outputs stored stash entries in format `stash@{0}`, `stash@{1}`, etc."
  },
  {
    id: 36,
    level: 2,
    question: "What does `git push -u origin main` accomplish?",
    options: [
      "Pushes main and sets default upstream tracking branch link for future parameter-less `git push`",
      "Unlinks main from remote server",
      "Forces push overriding remote history",
      "Creates remote repository named main"
    ],
    correct: 0,
    explanation: "`-u` (or `--set-upstream`) links local `main` to `origin/main` so `git push` or `git pull` work implicitly."
  },
  {
    id: 37,
    level: 2,
    question: "Which command lists all remote connections currently associated with your repository along with their URLs?",
    options: ["git remote -v", "git remote list", "git remote show --all", "git origin list"],
    correct: 0,
    explanation: "`git remote -v` displays remote shortnames alongside fetch and push URLs."
  },
  {
    id: 38,
    level: 2,
    question: "How do you force delete an unmerged local branch named `experimental`?",
    options: ["git branch -D experimental", "git branch -f experimental", "git branch --kill experimental", "git rm -f experimental"],
    correct: 0,
    explanation: "`git branch -D` (capital D) overrides Git safety checks to delete a branch regardless of merge status."
  },
  {
    id: 39,
    level: 2,
    question: "What does `git log --graph` display?",
    options: [
      "A pie chart of top contributors",
      "An ASCII text diagram representing branch history and merge points",
      "A graphical chart popup in browser",
      "A bar chart of code line counts"
    ],
    correct: 1,
    explanation: "`--graph` draws a visual ASCII graph of commit topology and branch forks/merges on the left edge."
  },
  {
    id: 40,
    level: 2,
    question: "Which command pushes local tags to your remote repository on GitHub?",
    options: ["git push origin --tags", "git push tags", "git upload --tags", "git sync tags"],
    correct: 0,
    explanation: "Normal `git push` does not transmit tags automatically; `--tags` explicitly sends all local tags."
  },

  // --------------------------------------------------------------------------
  // LEVEL 3: ADVANCED - REBASE, HISTORY & REMOTES (Q41 - Q60)
  // --------------------------------------------------------------------------
  {
    id: 41,
    level: 3,
    question: "What does `git rebase main` do when executed from a feature branch?",
    options: [
      "Deletes the main branch",
      "Re-applies feature branch commits individually on top of the tip of `main` for a linear history",
      "Merges main using 3-way merge commit",
      "Renames feature branch to main"
    ],
    correct: 1,
    explanation: "Rebasing rewrites commit history by moving base commit of feature branch onto tip of target branch."
  },
  {
    id: 42,
    level: 3,
    question: "Which command launches an interactive rebase editor to combine, reorder, or edit the last 3 commits?",
    options: ["git rebase -i HEAD~3", "git rebase --edit 3", "git commit --rebase 3", "git interactive-rebase 3"],
    correct: 0,
    explanation: "`git rebase -i HEAD~3` opens an editor allowing actions like `pick`, `squash`, `reword`, and `fixup`."
  },
  {
    id: 43,
    level: 3,
    question: "What does the `squash` action in interactive rebase accomplish?",
    options: [
      "Deletes the commit entirely",
      "Melds the commit into the previous commit and prompts to combine commit messages",
      "Compresses binary files in repo",
      "Pushes commit immediately to remote"
    ],
    correct: 1,
    explanation: "`squash` combines a commit into the parent commit immediately preceding it."
  },
  {
    id: 44,
    level: 3,
    question: "Which command copies a specific commit from another branch into your active branch without merging the entire branch?",
    options: ["git cherry-pick <hash>", "git copy-commit <hash>", "git grab <hash>", "git apply-commit <hash>"],
    correct: 0,
    explanation: "`git cherry-pick <commit-hash>` applies the changes introduced by a specific existing commit."
  },
  {
    id: 45,
    level: 3,
    question: "Which command inspects differences between staged changes and the HEAD commit?",
    options: ["git diff --staged", "git diff --head", "git diff --untracked", "git diff --index-only"],
    correct: 0,
    explanation: "`git diff --staged` (or `--cached`) shows edits staged in index waiting to be committed."
  },
  {
    id: 46,
    level: 3,
    question: "What does `git reset --soft HEAD~1` do?",
    options: [
      "Deletes the last commit and destroys all changes in working directory",
      "Moves HEAD back 1 commit while keeping all modifications staged in index",
      "Restores uncommitted modified files to pristine condition",
      "Pushes undo request to remote server"
    ],
    correct: 1,
    explanation: "`--soft` resets commit history pointer back, leaving working directory and staging index untouched."
  },
  {
    id: 47,
    level: 3,
    question: "How do you create a new commit that explicitly undoes changes introduced by a past commit `e5f6g7h` safely in shared branches?",
    options: ["git revert e5f6g7h", "git reset --hard e5f6g7h", "git undo e5f6g7h", "git erase e5f6g7h"],
    correct: 0,
    explanation: "`git revert` generates an inverse commit, preserving historical integrity without rewriting past commits."
  },
  {
    id: 48,
    level: 3,
    question: "What does `git blame index.html` display?",
    options: [
      "Security vulnerabilities inside index.html",
      "Line-by-line breakdown showing author name, timestamp, and commit hash for every line",
      "Syntax errors found in index.html",
      "Deleted lines in index.html"
    ],
    correct: 1,
    explanation: "`git blame` annotates each line of a file with author and commit metadata responsible for its last edit."
  },
  {
    id: 49,
    level: 3,
    question: "Which binary search tool helps pinpoint the exact commit that introduced a bug into your codebase?",
    options: ["git bisect", "git search", "git bug-finder", "git debug"],
    correct: 0,
    explanation: "`git bisect` performs binary search between known good and bad commits to isolate bug origin."
  },
  {
    id: 50,
    level: 3,
    question: "What is the difference between `git pull` and `git pull --rebase`?",
    options: [
      "They are identical",
      "`git pull` performs a merge commit, whereas `git pull --rebase` re-applies local commits on top of fetched remote commits",
      "`git pull --rebase` deletes local uncommitted code",
      "`git pull` only works on master branch"
    ],
    correct: 1,
    explanation: "`--rebase` avoids unnecessary merge commits when updating local branches with remote changes."
  },
  {
    id: 51,
    level: 3,
    question: "How do you stage partial code blocks (hunks) interactively within a file?",
    options: ["git add -p", "git add --interactive-all", "git stage --part", "git add --hunk"],
    correct: 0,
    explanation: "`git add -p` (patch mode) prompts chunk-by-chunk staging choices (`y`, `n`, `q`, `a`, `d`, `e`)."
  },
  {
    id: 52,
    level: 3,
    question: "Which command deletes local remote-tracking branches (`origin/*`) whose remote counterparts have been deleted on GitHub?",
    options: ["git remote prune origin", "git remote clean", "git fetch --clear-deleted", "git branch -dr origin"],
    correct: 0,
    explanation: "`git remote prune origin` (or `git fetch --prune`) purges stale remote tracking references."
  },
  {
    id: 53,
    level: 3,
    question: "What happens during a `git merge --no-ff feature` command?",
    options: [
      "Git disables fast-forward and forces creation of an explicit merge commit object even if fast-forward was possible",
      "Git throws an error if conflicts occur",
      "Git merges without committing changes",
      "Git performs rebase automatically"
    ],
    correct: 0,
    explanation: "`--no-ff` guarantees a dedicated merge commit exists in history to retain feature branch context."
  },
  {
    id: 54,
    level: 3,
    question: "Which command connects a local fork repository to the original main upstream repository?",
    options: [
      "git remote add upstream <parent-repo-url>",
      "git fork link <parent-repo-url>",
      "git upstream connect <parent-repo-url>",
      "git set-parent <parent-repo-url>"
    ],
    correct: 0,
    explanation: "In open-source workflows, `upstream` is standard alias for original parent repository URL."
  },
  {
    id: 55,
    level: 3,
    question: "How do you push a local branch named `feature` to remote while setting it to track `origin/feature`?",
    options: [
      "git push -u origin feature",
      "git push origin:feature",
      "git push --track origin feature",
      "git push set-remote feature"
    ],
    correct: 0,
    explanation: "`git push -u origin feature` sets upstream tracking reference for future pull/push."
  },
  {
    id: 56,
    level: 3,
    question: "What is `git reflog`?",
    options: [
      "A reference log recording every local move of HEAD (including checkouts, resets, rebases)",
      "A log of network server requests sent to GitHub",
      "A list of deleted files in working directory",
      "A log of repository configuration modifications"
    ],
    correct: 0,
    explanation: "`git reflog` records all HEAD position updates, allowing recovery of unreferenced commits."
  },
  {
    id: 57,
    level: 3,
    question: "How do you drop a specific stash at index 2 without applying it?",
    options: ["git stash drop stash@{2}", "git stash remove 2", "git stash delete 2", "git stash clear 2"],
    correct: 0,
    explanation: "`git stash drop stash@{2}` removes the entry at index 2 from your stash list."
  },
  {
    id: 58,
    level: 3,
    question: "Which command creates a lightweight (unannotated) tag named `beta-1`?",
    options: ["git tag beta-1", "git tag -l beta-1", "git tag --simple beta-1", "git add tag beta-1"],
    correct: 0,
    explanation: "`git tag <tagname>` creates a lightweight tag which is simply a pointer to a specific commit."
  },
  {
    id: 59,
    level: 3,
    question: "What does `git diff main...feature` show?",
    options: [
      "Changes on feature branch since it diverged from main",
      "Changes on main branch since feature branch started",
      "A side-by-side terminal comparison of main and feature",
      "All commits combined into single line"
    ],
    correct: 0,
    explanation: "Three-dot diff `main...feature` compares tip of feature branch with common ancestor commit of main and feature."
  },
  {
    id: 60,
    level: 3,
    question: "How do you abort an ongoing merge that encountered conflicts and return to pre-merge state?",
    options: ["git merge --abort", "git merge --cancel", "git reset --merge-undo", "git stop merge"],
    correct: 0,
    explanation: "`git merge --abort` resets working directory and index back to state prior to starting merge."
  },

  // --------------------------------------------------------------------------
  // LEVEL 4: EXPERT - TROUBLESHOOTING, RESET & RECOVERY (Q61 - Q80)
  // --------------------------------------------------------------------------
  {
    id: 61,
    level: 4,
    question: "What occurs when running `git reset --hard HEAD~1`?",
    options: [
      "Undoes commit and discards ALL uncommitted working directory & staging modifications permanently",
      "Undoes commit while keeping changes staged",
      "Soft resets local repository to initial commit",
      "Creates revert commit on remote server"
    ],
    correct: 0,
    explanation: "`--hard` resets index and working tree. Any uncommitted changes in tracked files are lost."
  },
  {
    id: 62,
    level: 4,
    question: "What is a 'Detached HEAD' state in Git?",
    options: [
      "When HEAD points directly to a specific commit hash rather than a named branch",
      "When local repo loses internet connection to GitHub server",
      "When `.git` directory gets corrupted",
      "When project master branch is deleted"
    ],
    correct: 0,
    explanation: "Detached HEAD occurs when checking out a specific commit hash, tag, or remote branch directly."
  },
  {
    id: 63,
    level: 4,
    question: "Why is `git push --force-with-lease` safer than `git push --force`?",
    options: [
      "It verifies that remote ref has not been updated by teammates before overwriting history",
      "It encrypts payload using SSH keys",
      "It creates automated remote branch backups",
      "It limits push rate to avoid server timeouts"
    ],
    correct: 0,
    explanation: "`--force-with-lease` prevents overwriting remote work if someone else pushed commits after your last fetch."
  },
  {
    id: 64,
    level: 4,
    question: "How do you recover a deleted commit hash after accidentally running `git reset --hard`?",
    options: [
      "Locate commit hash in `git reflog` and run `git checkout <hash>` or `git reset --hard <hash>`",
      "Run `git restore --deleted`",
      "Contact GitHub Customer Support",
      "Re-initialize git repository with `git init`"
    ],
    correct: 0,
    explanation: "`git reflog` tracks previous HEAD hashes, allowing recovery before garbage collection (`git gc`) purges them."
  },
  {
    id: 65,
    level: 4,
    question: "Which command recursively removes untracked files and directories from your working directory?",
    options: ["git clean -fd", "git remove --untracked", "git purge -all", "git reset --untracked-dir"],
    correct: 0,
    explanation: "`git clean` removes untracked files (`-f` force) and directories (`-d`)."
  },
  {
    id: 66,
    level: 4,
    question: "How do you abort an in-progress interactive rebase encountering severe merge conflicts?",
    options: ["git rebase --abort", "git rebase --stop", "git rebase --quit", "git reset --rebase"],
    correct: 0,
    explanation: "`git rebase --abort` cancels rebase operation and restores branch to original pre-rebase state."
  },
  {
    id: 67,
    level: 4,
    question: "What does `git cherry-pick -x <hash>` do?",
    options: [
      "Applies commit and appends automated message line stating original commit hash source",
      "Deletes original commit after copy",
      "Picks commit without applying author signature",
      "Applies commit to all branches simultaneously"
    ],
    correct: 0,
    explanation: "`-x` appends a standardized footnote line `(cherry picked from commit ...)` to commit message body."
  },
  {
    id: 68,
    level: 4,
    question: "Which modern official tool is recommended for scrubbing sensitive passwords or large files out of Git history?",
    options: ["git-filter-repo", "git rm --password", "git sanitize-history", "git purge-data"],
    correct: 0,
    explanation: "`git-filter-repo` (Python tool recommended by Git project) replaces legacy `git filter-branch`."
  },
  {
    id: 69,
    level: 4,
    question: "How do you configure Git to automatically reuse resolved conflict recordings using `rerere`?",
    options: [
      "git config --global rerere.enabled true",
      "git enable-rerere",
      "git config auto.resolve true",
      "git conflict --remember"
    ],
    correct: 0,
    explanation: "`rerere` (Reuse Recorded Resolution) remembers how you resolved a hunk conflict to auto-apply it next time."
  },
  {
    id: 70,
    level: 4,
    question: "What does `git commit --fixup <commit-hash>` create?",
    options: [
      "A commit formatted with `fixup! <subject>` intended for automatic merging during `git rebase -i --autosquash`",
      "An automated hotfix branch",
      "A patch file stored in `.git/patches`",
      "A commit fixing lint errors in file"
    ],
    correct: 0,
    explanation: "`--fixup` generates a targeted commit designed to be auto-squashed without editing messages during interactive rebase."
  },
  {
    id: 71,
    level: 4,
    question: "Which feature allows working on multiple branches simultaneously in separate working directories on disk?",
    options: ["git worktree", "git multi-branch", "git workspace", "git parallel-checkout"],
    correct: 0,
    explanation: "`git worktree add <path> <branch>` attaches multiple working trees to single shared `.git` repository."
  },
  {
    id: 72,
    level: 4,
    question: "How do you check out a remote branch `origin/feature-api` as a local branch for the first time?",
    options: ["git checkout -t origin/feature-api", "git fetch origin feature-api:local", "git pull remote feature-api", "git clone --branch feature-api"],
    correct: 0,
    explanation: "`git checkout -t origin/feature-api` (or `git switch feature-api`) sets up local tracking branch automatically."
  },
  {
    id: 73,
    level: 4,
    question: "What does `git stash --include-untracked` (or `-u`) do?",
    options: [
      "Stashes tracked modified files AND newly created untracked files",
      "Stashes `.gitignore` files exclusively",
      "Stashes only binary media files",
      "Deletes untracked files"
    ],
    correct: 0,
    explanation: "By default `git stash` ignores untracked files; `-u` includes untracked files in the stash package."
  },
  {
    id: 74,
    level: 4,
    question: "How do you view all commits across ALL branches and reflogs visually in terminal?",
    options: ["git log --all --decorate --oneline --graph", "git log --everything", "git show --all-branches", "git tree --visual"],
    correct: 0,
    explanation: "Combining `--all --decorate --oneline --graph` gives complete topological view of full repo graph."
  },
  {
    id: 75,
    level: 4,
    question: "Which file hook script executes automatically on client side before a commit message is created?",
    options: [".git/hooks/pre-commit", ".git/hooks/post-commit", ".git/hooks/commit-msg", ".git/hooks/pre-push"],
    correct: 0,
    explanation: "`pre-commit` hook script runs first to check code linting, tests, or formatting before commit object creation."
  },
  {
    id: 76,
    level: 4,
    question: "What does `git checkout HEAD~2 -- app.js` do?",
    options: [
      "Restores `app.js` in working directory & index to its state from 2 commits ago without switching branches",
      "Deletes `app.js` permanently",
      "Creates new branch named app.js",
      "Switches branch back 2 commits"
    ],
    correct: 0,
    explanation: "Specifying a commit ref and file path restores that file snapshot directly into staging and working directory."
  },
  {
    id: 77,
    level: 4,
    question: "How do you sign a commit using GPG keys for verified author status on GitHub?",
    options: ["git commit -S -m \"msg\"", "git commit --gpg -m \"msg\"", "git commit --sign-off -m \"msg\"", "git commit --secure -m \"msg\""],
    correct: 0,
    explanation: "`-S` signs commit with GPG key configured in `user.signingkey` setting."
  },
  {
    id: 78,
    level: 4,
    question: "What is `git Submodule` used for?",
    options: [
      "To nest an external Git repository inside a subfolder of parent repository while tracking exact commit hashes",
      "To split large commits into smaller sub-commits",
      "To compress large binary assets",
      "To create sub-branches within feature branch"
    ],
    correct: 0,
    explanation: "Submodules keep external dependencies isolated as independent Git repos inside parent project tree."
  },
  {
    id: 79,
    level: 4,
    question: "Which command shows configuration settings originating specifically from global file `~/.gitconfig`?",
    options: ["git config --global --list", "git config --show-global", "git env --global", "git settings list"],
    correct: 0,
    explanation: "`git config --global --list` filters configuration output to entries in global scope config file."
  },
  {
    id: 80,
    level: 4,
    question: "What does `git clone --depth 1 <url>` accomplish?",
    options: [
      "Performs a Shallow Clone downloading ONLY the single latest commit snapshot without full history",
      "Clones only single level directory",
      "Clones master branch exclusively with zero tags",
      "Clones repo into root directory"
    ],
    correct: 0,
    explanation: "Shallow clones (`--depth 1`) save bandwith and speed up CI build pipelines significantly."
  },

  // --------------------------------------------------------------------------
  // LEVEL 5: MASTER - GIT INTERNALS, PLUMBING & EDGE CASES (Q81 - Q100)
  // --------------------------------------------------------------------------
  {
    id: 81,
    level: 5,
    question: "What are the 4 fundamental object types stored inside the `.git/objects` database?",
    options: [
      "blob, tree, commit, annotated tag",
      "file, directory, hash, branch",
      "index, head, ref, config",
      "patch, diff, commit, repo"
    ],
    correct: 0,
    explanation: "Git content-addressable storage contains 4 object types: blob (file data), tree (directory structure), commit (metadata), tag."
  },
  {
    id: 82,
    level: 5,
    question: "Which plumbing command inspects content and type of any Git object hash stored in `.git/objects`?",
    options: ["git cat-file -p <hash>", "git object-view <hash>", "git read-hash <hash>", "git inspect-blob <hash>"],
    correct: 0,
    explanation: "`git cat-file -p <hash>` pretty-prints contents of object, while `-t` returns object type."
  },
  {
    id: 83,
    level: 5,
    question: "How does Git calculate the SHA-1 hash key for a stored object?",
    options: [
      "SHA-1 hash of string `\"<type> <size>\\0<content>\"`",
      "SHA-1 hash of raw file content string only",
      "MD5 checksum of author name and date",
      "SHA-256 hash of file path name"
    ],
    correct: 0,
    explanation: "Git prepends header format `<type> <size>\\0` to content payload before taking SHA-1 hash."
  },
  {
    id: 84,
    level: 5,
    question: "Which low-level plumbing command computes SHA-1 hash of a file and optionally writes it into `.git/objects`?",
    options: ["git hash-object -w <file>", "git write-blob <file>", "git make-object <file>", "git create-hash <file>"],
    correct: 0,
    explanation: "`git hash-object -w <file>` stores raw file content as a blob object in `.git/objects`."
  },
  {
    id: 85,
    level: 5,
    question: "What does a `tree` object represent in Git internals?",
    options: [
      "A directory state snapshot mapping file mode, object type, SHA-1 hash, and file names",
      "A visual branch tree rendered in terminal",
      "A list of remote server pointers",
      "A backup history tree"
    ],
    correct: 0,
    explanation: "Trees correspond to directory entries, linking blob objects (files) or nested tree objects (subdirectories)."
  },
  {
    id: 86,
    level: 5,
    question: "Which plumbing command writes current index staging contents into a new `tree` object?",
    options: ["git write-tree", "git commit-index", "git index-to-tree", "git build-tree"],
    correct: 0,
    explanation: "`git write-tree` reads index staging area and writes a tree object to `.git/objects` returning its SHA-1 hash."
  },
  {
    id: 87,
    level: 5,
    question: "What information is stored inside `.git/refs/heads/main` file?",
    options: [
      "The 40-character SHA-1 commit hash of tip of main branch",
      "The full source code of main branch",
      "List of commit author email addresses",
      "The remote URL link"
    ],
    correct: 0,
    explanation: "Branch references in `refs/heads/` are plain text files containing 40-character SHA-1 hash of HEAD commit."
  },
  {
    id: 88,
    level: 5,
    question: "What is stored inside `.git/HEAD` when checked out on `main` branch?",
    options: [
      "The text string `ref: refs/heads/main`",
      "Raw SHA-1 commit hash directly",
      "User email address",
      "Total commit count integer"
    ],
    correct: 0,
    explanation: "`.git/HEAD` is a symbolic reference file pointing to active branch ref path `ref: refs/heads/main`."
  },
  {
    id: 89,
    level: 5,
    question: "Which plumbing command creates a commit object pointing to a tree hash and parent commit hash?",
    options: [
      "git commit-tree <tree-hash> -p <parent-hash> -m \"msg\"",
      "git make-commit <tree-hash>",
      "git hash-commit <tree-hash>",
      "git build-commit-object <tree-hash>"
    ],
    correct: 0,
    explanation: "`git commit-tree` creates commit object directly with tree hash, parent commit hash, author, and message."
  },
  {
    id: 90,
    level: 5,
    question: "What are `.pack` and `.idx` files inside `.git/objects/pack/`?",
    options: [
      "Compressed packfiles delta-compressing multiple loose objects to save disk space alongside index lookup table",
      "Encrypted security backups of SSH keys",
      "Compiled binaries of application",
      "Legacy index cache files"
    ],
    correct: 0,
    explanation: "Git runs auto packing (`git gc`) compressing loose individual object files into packfiles using delta compression."
  },
  {
    id: 91,
    level: 5,
    question: "Which command runs repository connectivity and object validity checks to detect corruption in `.git`?",
    options: ["git fsck", "git verify-repo", "git check-health", "git repair-objects"],
    correct: 0,
    explanation: "`git fsck` (File System Check) verifies SHA-1 checksums and connectivity of object database."
  },
  {
    id: 92,
    level: 5,
    question: "What does `git symbolic-ref HEAD` return?",
    options: [
      "The full symbolic ref path such as `refs/heads/main`",
      "The SHA-1 commit hash",
      "The remote server URL",
      "The tag name attached to HEAD"
    ],
    correct: 0,
    explanation: "`git symbolic-ref` inspects or modifies symbolic refs like `HEAD` without resolving underlying SHA-1."
  },
  {
    id: 93,
    level: 5,
    question: "Which plumbing command safely updates a ref file pointer (e.g. `refs/heads/main`) to a new commit hash?",
    options: ["git update-ref refs/heads/main <new-hash>", "git set-ref main <new-hash>", "git write-ref main <new-hash>", "git move-pointer main <new-hash>"],
    correct: 0,
    explanation: "`git update-ref` updates SHA-1 value stored in ref file with locking and safety checks."
  },
  {
    id: 94,
    level: 5,
    question: "What is the difference between Porcelain and Plumbing commands in Git design?",
    options: [
      "Porcelain commands are user-facing high-level commands (e.g. commit, checkout); Plumbing are low-level core utilities (e.g. cat-file, write-tree)",
      "Porcelain commands run on GitHub web; Plumbing commands run in local terminal",
      "Porcelain commands use SSH; Plumbing commands use HTTPS",
      "Porcelain commands are deprecated"
    ],
    correct: 0,
    explanation: "Linus Torvalds designed Git with low-level plumbing tools for scripts and high-level porcelain tools for human users."
  },
  {
    id: 95,
    level: 5,
    question: "What does `git ls-tree <tree-hash>` display?",
    options: [
      "Contents of a tree object including mode, object type, SHA-1, and filenames",
      "Submodule list",
      "Repository directory structure in HTML format",
      "Untracked files list"
    ],
    correct: 0,
    explanation: "`git ls-tree` lists items stored in a tree object similar to `ls -l` in Unix shell."
  },
  {
    id: 96,
    level: 5,
    question: "How does Git handle file renaming under the hood?",
    options: [
      "Git does NOT track renames explicitly; it dynamically detects renames by comparing blob SHA-1 content similarities during diffs",
      "Git stores rename metadata in `.git/renames.log`",
      "Git creates symbolic link pointers",
      "Git renames require `git rename` server command"
    ],
    correct: 0,
    explanation: "Git tracks content (blobs), not files. If file content moves to a new path, similarity index detects rename dynamically."
  },
  {
    id: 97,
    level: 5,
    question: "Which command displays contents of Git index binary file `.git/index`?",
    options: ["git ls-files --stage", "git print-index", "git view-index", "git show index"],
    correct: 0,
    explanation: "`git ls-files --stage` outputs mode, SHA-1 hash, stage number, and paths tracked in index."
  },
  {
    id: 98,
    level: 5,
    question: "What is a Dangling Blob or Dangling Commit in Git?",
    options: [
      "An object stored in `.git/objects` that is no longer reachable from any ref, branch, or tag",
      "A commit pushed to wrong repository",
      "A commit missing commit message title",
      "A file exceeding 100MB size limit"
    ],
    correct: 0,
    explanation: "Dangling objects occur when commits/blobs are detached during resets or rebases and wait for `git gc` cleanup."
  },
  {
    id: 99,
    level: 5,
    question: "What does `git gc --prune=now` do?",
    options: [
      "Runs garbage collection immediately removing all unreachable dangling objects without waiting for default 2-week grace period",
      "Deletes remote branches",
      "Cleans index file completely",
      "Deletes master branch"
    ],
    correct: 0,
    explanation: "`git gc` packs loose objects and `--prune=now` purges unreachable dangling objects immediately."
  },
  {
    id: 100,
    level: 5,
    question: "What is the purpose of `.git/info/exclude` file?",
    options: [
      "Private local ignore rules file that functions identically to `.gitignore` but is NOT committed or shared with team",
      "System-wide global ignore file",
      "Exclude file for LFS binary assets",
      "List of forbidden Git commands"
    ],
    correct: 0,
    explanation: "`.git/info/exclude` provides repository-specific ignore rules kept strictly local to your machine."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = quizDatabase;
}
