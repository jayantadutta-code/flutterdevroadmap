/* ==========================================================================
   Git & GitHub Interactive Flipbook - JavaScript Engine & Live Dashboard CLI
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // State
    let currentSheet = 0;
    const totalSheets = 18;
    let isFlipping = false;

    // DOM Elements
    const book3d = document.getElementById('book3d');
    const sheets = Array.from(document.querySelectorAll('.paper-sheet'));
    const prevBtn = document.getElementById('prevPageBtn');
    const nextBtn = document.getElementById('nextPageBtn');
    const currentPageNumEl = document.getElementById('currentPageNum');
    const totalPagesNumEl = document.getElementById('totalPagesNum');
    const startReadingBtn = document.getElementById('startReadingBtn');
    
    const soundToggleBtn = document.getElementById('soundToggleBtn');
    const themeBtn = document.getElementById('themeBtn');
    const themeMenu = document.getElementById('themeMenu');
    const tocToggleBtn = document.getElementById('tocToggleBtn');
    const tocModal = document.getElementById('tocModal');
    const closeTocModalBtn = document.getElementById('closeTocModalBtn');

    // Terminal Hover Card
    const liveTerminalCard = document.getElementById('liveTerminalCard');
    const termHoverCmd = document.getElementById('termHoverCmd');
    const termHoverOut = document.getElementById('termHoverOut');
    const termHoverFlags = document.getElementById('termHoverFlags');
    const termHoverExplanation = document.getElementById('termHoverExplanation');
    const termCopyBtn = document.getElementById('termCopyBtn');
    const closeHoverCardBtn = document.getElementById('closeHoverCardBtn');

    // Search
    const commandSearchInput = document.getElementById('commandSearchInput');
    const searchSearchResults = document.getElementById('searchSearchResults');

    // Master Table
    const masterTableBody = document.getElementById('masterTableBody');
    const categoryFilters = document.getElementById('categoryFilters');

    // Branch Sim
    const branchSimCanvas = document.getElementById('branchSimCanvas');
    const simCommitBtn = document.getElementById('simCommitBtn');
    const simBranchBtn = document.getElementById('simBranchBtn');
    const simMergeBtn = document.getElementById('simMergeBtn');
    const simResetBtn = document.getElementById('simResetBtn');

    // Dashboard & CLI Elements
    const dashActiveBranch = document.getElementById('dashActiveBranch');
    const dashRemoteUrl = document.getElementById('dashRemoteUrl');
    const dashHeadCommit = document.getElementById('dashHeadCommit');
    const dashStagedPills = document.getElementById('dashStagedPills');
    const dashUntrackedPills = document.getElementById('dashUntrackedPills');
    const dashCommitStack = document.getElementById('dashCommitStack');

    const cliScreen = document.getElementById('cliScreen');
    const cliForm = document.getElementById('cliForm');
    const cliInput = document.getElementById('cliInput');
    const cliResetBtn = document.getElementById('cliResetBtn');

    totalPagesNumEl.textContent = totalSheets;
    updateBookState();

    // ---------------- Master Commands Database ----------------
    const masterCommands = [
        // Installation & Setup (Ch 04, Ch 06)
        { cmd: 'winget install --id Git.Git -e --source winget', purpose: 'Install Git on Windows via winget CLI', cat: 'setup', sheet: 4, flags: [], out: 'Successfully installed Git', exp: 'Official Windows package manager command to download and set up Git.' },
        { cmd: 'xcode-select --install', purpose: 'Install Xcode CLI tools on macOS for Git', cat: 'setup', sheet: 4, flags: [], out: 'xcode-select: note: install requested', exp: 'Installs built-in Command Line Tools including Git on macOS.' },
        { cmd: '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"', purpose: 'Install Homebrew package manager on macOS', cat: 'setup', sheet: 4, flags: [], out: '==> Installation successful!', exp: 'Installs Homebrew package manager on macOS to easily manage software packages.' },
        { cmd: 'brew install git', purpose: 'Install modern Git release on macOS via Homebrew', cat: 'setup', sheet: 4, flags: [], out: '==> Fetching git... Installed git 2.45+', exp: 'Upgrades to the latest official Git release on macOS.' },
        { cmd: 'sudo apt update && sudo apt install git', purpose: 'Install Git on Linux Debian/Ubuntu', cat: 'setup', sheet: 4, flags: [], out: 'git is already the newest version (2.45)', exp: 'Standard package manager installation on Debian-based Linux distributions.' },
        { cmd: 'git --version', purpose: 'Verify installed Git binary version', cat: 'setup', sheet: 4, flags: [], out: 'git version 2.45.2', exp: 'Confirms Git installation and prints active version.' },
        { cmd: 'git config --global user.name "Name"', purpose: 'Set public commit author name', cat: 'setup', sheet: 4, flags: [{flag:'--global', desc:'Applies system-wide'}], out: '(Config saved in ~/.gitconfig)', exp: 'Registers your identity for commit history.' },
        { cmd: 'git config --global user.email "email"', purpose: 'Set commit author email', cat: 'setup', sheet: 4, flags: [{flag:'--global', desc:'Applies system-wide'}], out: '(Config saved in ~/.gitconfig)', exp: 'Links commits to GitHub profile.' },
        { cmd: 'git config --global core.editor code', purpose: 'Set default text editor to VS Code', cat: 'setup', sheet: 4, flags: [{flag:'core.editor', desc:'Specifies default editor binary'}], out: '(Default editor set to VS Code)', exp: 'Configures VS Code for commit messages & interactive rebase.' },
        { cmd: 'git config --global core.editor "open -W -a \'Android Studio\'"', purpose: 'Set default text editor to Android Studio (macOS)', cat: 'setup', sheet: 4, flags: [], out: '(Default editor set to Android Studio)', exp: 'Configures Android Studio as Git editor on macOS.' },
        { cmd: 'git config --local user.name "Your name"', purpose: 'Set author name for current repository', cat: 'setup', sheet: 4, flags: [{flag:'--local', desc:'Overrides global settings for this repo'}], out: '(Local author name saved in .git/config)', exp: 'Sets repo-specific author signature.' },
        { cmd: 'git config --local user.email "your@example.com"', purpose: 'Set author email for current repository', cat: 'setup', sheet: 4, flags: [{flag:'--local', desc:'Overrides global settings for this repo'}], out: '(Local author email saved in .git/config)', exp: 'Sets repo-specific email address.' },
        { cmd: 'git config --global init.defaultBranch main', purpose: 'Set default initial branch name to main', cat: 'setup', sheet: 4, flags: [], out: 'Default initial branch set to main', exp: 'Ensures newly created repositories use main as primary branch.' },
        { cmd: 'git config --global color.ui auto', purpose: 'Enable colored CLI terminal output', cat: 'setup', sheet: 4, flags: [], out: 'Color UI set to auto', exp: 'Highlights branch status and diffs with colors in terminal.' },
        { cmd: 'git config --global --list', purpose: 'List all global configuration settings', cat: 'setup', sheet: 4, flags: [{flag:'--global', desc:'Filters to ~/.gitconfig'}, {flag:'--list', desc:'Lists configuration values'}], out: 'user.name=John Smith\nuser.email=you@example.com\ninit.defaultBranch=main\ncore.editor=code --wait', exp: 'Inspects values stored in global ~/.gitconfig.' },
        { cmd: 'git config --local --list', purpose: 'List repository-specific local settings', cat: 'setup', sheet: 4, flags: [{flag:'--local', desc:'Filters to .git/config'}, {flag:'--list', desc:'Lists configuration values'}], out: 'user.name=Your name\nuser.email=your@example.com', exp: 'Inspects values stored in local .git/config.' },
        { cmd: 'git config --global --unset core.editor', purpose: 'Remove core.editor from global configuration', cat: 'setup', sheet: 4, flags: [{flag:'--unset', desc:'Removes key from config'}], out: '(core.editor removed from ~/.gitconfig)', exp: 'Unsets configured Git editor.' },
        { cmd: 'git config --global --unset user.name', purpose: 'Remove user.name from global configuration', cat: 'setup', sheet: 4, flags: [{flag:'--unset', desc:'Removes key from config'}], out: '(user.name removed from ~/.gitconfig)', exp: 'Unsets global author name.' },
        { cmd: 'git config --global --unset user.email', purpose: 'Remove user.email from global configuration', cat: 'setup', sheet: 4, flags: [{flag:'--unset', desc:'Removes key from config'}], out: '(user.email removed from ~/.gitconfig)', exp: 'Unsets global author email.' },
        { cmd: 'git help <command>', purpose: 'Open official manual page for command', cat: 'setup', sheet: 4, flags: [], out: 'GIT-REBASE(1) Git Manual', exp: 'Opens built-in documentation page for specified Git command.' },
        
        // Local Workflow & Repository Basics (Ch 07, Ch 08, Ch 09)
        { cmd: 'git init', purpose: 'Initialize empty local Git repository', cat: 'local', sheet: 5, flags: [], out: 'Initialized empty Git repository in .git/', exp: 'Creates .git tracking folder.' },
        { cmd: 'git init my-new-project', purpose: 'Create new directory and initialize Git repo', cat: 'local', sheet: 5, flags: [], out: 'Initialized empty Git repository in /my-new-project/.git/', exp: 'One-step folder creation and Git tracking initialization.' },
        { cmd: 'git status', purpose: 'Show working tree and staging state', cat: 'local', sheet: 5, flags: [], out: 'On branch main\nUntracked files:\n  index.html', exp: 'Inspect modified and staged files.' },
        { cmd: 'git status -s', purpose: 'Short compact 2-column repository status', cat: 'local', sheet: 5, flags: [{flag:'-s', desc:'Short status summary'}], out: ' M index.html\n?? app.js', exp: 'Displays compact status symbols.' },
        { cmd: 'git add <file>', purpose: 'Stage specific file for commit', cat: 'local', sheet: 6, flags: [], out: '(File app.js added to index)', exp: 'Stages single file modifications.' },
        { cmd: 'git add .', purpose: 'Stage all current folder modifications', cat: 'local', sheet: 6, flags: [{flag:'.', desc:'Current folder'}], out: '(Files staged in green)', exp: 'Prepares changes for commit.' },
        { cmd: 'git add *.py', purpose: 'Stage all Python files matching wildcard', cat: 'local', sheet: 6, flags: [], out: '(Python files staged)', exp: 'Pattern staging for specific file extension.' },
        { cmd: 'git commit -m "msg"', purpose: 'Save staged snapshot to history', cat: 'local', sheet: 6, flags: [{flag:'-m', desc:'Commit message inline'}], out: '[main 4a2b1c] feat: initial setup\n 1 file changed', exp: 'Creates immutable commit object.' },
        { cmd: 'git commit -am "msg"', purpose: 'Stage tracked files & commit in one step', cat: 'local', sheet: 6, flags: [{flag:'-a', desc:'Auto-stage tracked'}, {flag:'-m', desc:'Commit message'}], out: '[main 7b2c9a1] fix: header\n 1 file changed', exp: 'Shortcut staging tracked files and committing.' },
        { cmd: 'git commit --amend', purpose: 'Modify latest commit message or content', cat: 'local', sheet: 6, flags: [{flag:'--amend', desc:'Replaces current HEAD'}], out: '[main 4b8d910] docs: update install guide', exp: 'Fixes typos or attaches forgotten files.' },
        { cmd: 'git show <commit>', purpose: 'Display commit details and patch diff', cat: 'local', sheet: 6, flags: [], out: 'commit 9f3a12d...\nAuthor: Ada', exp: 'Shows commit metadata and diff.' },
        { cmd: 'git show <commit>:<file>', purpose: 'Inspect file contents at past commit', cat: 'local', sheet: 10, flags: [], out: 'const app = "v1.0";', exp: 'Displays file state without checking out branch.' },

        // Ignoring Files & Cleaning (Ch 10)
        { cmd: 'touch .gitignore', purpose: 'Create .gitignore file in repository root', cat: 'local', sheet: 7, flags: [], out: '(Created .gitignore)', exp: 'Lists patterns and file paths to exclude from Git tracking.' },
        { cmd: 'touch logs/.gitkeep', purpose: 'Placeholder file to track empty folder in Git', cat: 'local', sheet: 7, flags: [], out: '(Created logs/.gitkeep)', exp: 'Git ignores empty folders; .gitkeep forces Git to track the directory.' },
        { cmd: 'git rm --cached <file>', purpose: 'Stop tracking file without deleting locally', cat: 'local', sheet: 7, flags: [{flag:'--cached', desc:'Removes from index only'}], out: 'rm \'secret.env\'', exp: 'Removes file from Git tracking while preserving it on disk.' },

        // Logs & Diffs & History (Ch 03, Ch 17)
        { cmd: 'git log', purpose: 'Display detailed chronological commit log', cat: 'local', sheet: 10, flags: [], out: 'commit a1b2c3d4...\nAuthor: Ada', exp: 'Shows full commit history details.' },
        { cmd: 'git log --oneline', purpose: 'Compact 1-line summary per commit', cat: 'local', sheet: 10, flags: [{flag:'--oneline', desc:'Short hash and title'}], out: 'a1b2c3d feat: add login', exp: 'Quick commit history scan.' },
        { cmd: 'git log --oneline --graph --all', purpose: 'Display 1-line ASCII branch tree', cat: 'local', sheet: 10, flags: [{flag:'--graph', desc:'Draws ASCII tree'}, {flag:'--all', desc:'Shows all branches'}], out: '* e4f5a6b (HEAD -> main) Merge feat\n* a1b2c3d initial', exp: 'Visual branch log graph.' },
        { cmd: 'git log --stat', purpose: 'Show changed file stats per commit', cat: 'local', sheet: 10, flags: [{flag:'--stat', desc:'Includes file insertions/deletions'}], out: 'index.html | 10 +++--\n 1 file changed', exp: 'Displays diff statistics per commit.' },
        { cmd: 'git log --oneline -- <file>', purpose: 'Show commit history filtered to specific file', cat: 'local', sheet: 10, flags: [], out: '9f3a12d fix navbar alignment', exp: 'Tracks all past modifications to one file.' },
        { cmd: 'git log --oneline --grep="text"', purpose: 'Search commit messages for text keyword', cat: 'local', sheet: 10, flags: [{flag:'--grep', desc:'Keyword filter'}], out: '4b8d910 fix auth login bug', exp: 'Finds commits containing specific search term.' },
        { cmd: 'git log --oneline --since="2025-01-01"', purpose: 'Filter commits by date range', cat: 'local', sheet: 10, flags: [], out: '7b2c9a1 update dashboard', exp: 'Shows commits created after specified date.' },
        { cmd: 'git diff', purpose: 'Show unstaged changes in working tree', cat: 'local', sheet: 10, flags: [], out: 'diff --git a/app.js b/app.js', exp: 'Compares working edits with staging index.' },
        { cmd: 'git diff --staged', purpose: 'Show line differences in Staging', cat: 'local', sheet: 10, flags: [{flag:'--staged', desc:'Compares staged index'}], out: 'diff --git a/app.js b/app.js', exp: 'Inspects changes ready for commit.' },
        { cmd: 'git diff <commit1> <commit2>', purpose: 'Compare code differences between 2 commits', cat: 'local', sheet: 10, flags: [], out: 'diff --git a/index.html', exp: 'Shows line diff between two snapshot states.' },
        { cmd: 'git blame <file>', purpose: 'Show author and commit hash for every line', cat: 'local', sheet: 10, flags: [], out: '4a2b1c3d (Ada 2026-07-20 14:00) 1: const app = 1;', exp: 'Line-by-line author audit.' },

        // Branching & Merging (Ch 13, Ch 14)
        { cmd: 'git branch', purpose: 'List local branches in repository', cat: 'branch', sheet: 8, flags: [], out: '* main\n  feature/login', exp: 'Lists local branches.' },
        { cmd: 'git branch -r', purpose: 'List remote tracking branches', cat: 'branch', sheet: 8, flags: [{flag:'-r', desc:'Remote branches'}], out: 'origin/main\norigin/feature', exp: 'Lists remote tracking references.' },
        { cmd: 'git branch -a', purpose: 'List all local and remote branches', cat: 'branch', sheet: 8, flags: [{flag:'-a', desc:'All branches'}], out: '* main\n  remotes/origin/main', exp: 'Lists local and remote branches.' },
        { cmd: 'git branch --show-current', purpose: 'Print current active branch name', cat: 'branch', sheet: 8, flags: [], out: 'feature/search', exp: 'Outputs active branch name only.' },
        { cmd: 'git branch <name>', purpose: 'Create new branch without switching', cat: 'branch', sheet: 8, flags: [], out: '(Created branch feature/auth)', exp: 'Creates branch pointer at HEAD.' },
        { cmd: 'git checkout <name>', purpose: 'Switch active branch to target', cat: 'branch', sheet: 8, flags: [], out: 'Switched to branch \'main\'', exp: 'Updates working tree to target branch.' },
        { cmd: 'git checkout -b <name>', purpose: 'Create & switch to new branch', cat: 'branch', sheet: 8, flags: [{flag:'-b', desc:'Create & switch'}], out: 'Switched to a new branch', exp: 'Shortcut creating and switching branch.' },
        { cmd: 'git switch <name>', purpose: 'Modern command to switch active branch', cat: 'branch', sheet: 8, flags: [], out: 'Switched to branch \'feature/search\'', exp: 'Modern explicit command for switching branches.' },
        { cmd: 'git switch -c <name>', purpose: 'Modern command to create & switch branch', cat: 'branch', sheet: 8, flags: [{flag:'-c', desc:'Create new branch'}], out: 'Switched to a new branch', exp: 'Modern explicit replacement for checkout -b.' },
        { cmd: 'git merge <branch>', purpose: 'Merge specified branch into active branch', cat: 'branch', sheet: 9, flags: [], out: 'Updating a1b2c3d..e4f5a6b\nFast-forward', exp: 'Combines branch histories.' },
        { cmd: 'git merge --abort', purpose: 'Cancel in-progress merge during conflict', cat: 'branch', sheet: 10, flags: [{flag:'--abort', desc:'Restores pre-merge state'}], out: 'Merge aborted.', exp: 'Safety reset restoring files to pre-merge state.' },
        { cmd: 'git branch -d <branch>', purpose: 'Safely delete a merged branch', cat: 'branch', sheet: 9, flags: [{flag:'-d', desc:'Safe delete'}], out: 'Deleted branch (was e4f5a6b)', exp: 'Deletes local branch if merged.' },
        { cmd: 'git branch -D <branch>', purpose: 'Force delete an unmerged branch', cat: 'branch', sheet: 9, flags: [{flag:'-D', desc:'Force delete'}], out: 'Deleted branch (was c7d8e9f)', exp: 'Force deletes unmerged branch.' },

        // Git Stash (Ch 15)
        { cmd: 'git stash', purpose: 'Save uncommitted working changes to stash', cat: 'local', sheet: 9, flags: [], out: 'Saved working directory state WIP on main', exp: 'Shelves uncommitted modifications.' },
        { cmd: 'git stash push -m "msg"', purpose: 'Stash changes with custom note', cat: 'local', sheet: 9, flags: [{flag:'-m', desc:'Custom message'}], out: 'Saved working state \'wip on search\'', exp: 'Labels stashed state with description.' },
        { cmd: 'git stash list', purpose: 'List all stashed state snapshots', cat: 'local', sheet: 9, flags: [], out: 'stash@{0}: WIP on main\nstash@{1}: WIP navbar', exp: 'Displays stashed entries.' },
        { cmd: 'git stash show', purpose: 'Show diff summary of stashed changes', cat: 'local', sheet: 9, flags: [], out: 'app.js | 5 +++++', exp: 'Previews changes inside stash.' },
        { cmd: 'git stash apply', purpose: 'Apply stash without removing from stack', cat: 'local', sheet: 9, flags: [], out: 'Changes restored from stash', exp: 'Re-applies stash keeping entry.' },
        { cmd: 'git stash pop', purpose: 'Restore & remove latest stash entry', cat: 'local', sheet: 9, flags: [], out: 'Restored working directory modifications', exp: 'Re-applies stash and drops entry.' },
        { cmd: 'git stash drop stash@{0}', purpose: 'Remove specific stash entry from stack', cat: 'local', sheet: 9, flags: [], out: 'Dropped refs/stash@{0}', exp: 'Deletes single stash entry.' },
        { cmd: 'git stash clear', purpose: 'Wipe all stashes from stack', cat: 'local', sheet: 9, flags: [], out: '(All stashes cleared)', exp: 'Deletes all stash entries.' },

        // Undoing Mistakes & Rebase (Ch 18, Ch 19)
        { cmd: 'git restore <file>', purpose: 'Discard uncommitted local modifications', cat: 'undo', sheet: 11, flags: [], out: 'Reverted file modifications', exp: 'Restores file to last committed state.' },
        { cmd: 'git restore .', purpose: 'Discard all uncommitted working edits', cat: 'undo', sheet: 11, flags: [], out: 'Reverted working directory edits', exp: 'Cleans working directory back to HEAD.' },
        { cmd: 'git restore --staged <file>', purpose: 'Unstage file while keeping working edits', cat: 'undo', sheet: 11, flags: [{flag:'--staged', desc:'Unstages file'}], out: 'Unstaged changes for file', exp: 'Removes file from Staging index.' },
        { cmd: 'git reset <file>', purpose: 'Unstage specific file from index', cat: 'undo', sheet: 11, flags: [], out: 'Unstaged changes: app.js', exp: 'Removes file from Staging Area.' },
        { cmd: 'git reset --soft HEAD~1', purpose: 'Undo commit but keep edits staged', cat: 'undo', sheet: 11, flags: [{flag:'--soft', desc:'Preserves staging'}], out: 'HEAD is now at previous commit', exp: 'Uncommits changes safely.' },
        { cmd: 'git reset --mixed HEAD~1', purpose: 'Undo commit & unstage (keep edits)', cat: 'undo', sheet: 11, flags: [{flag:'--mixed', desc:'Default reset'}], out: 'Unstaged changes after reset', exp: 'Undoes commit and unstages changes.' },
        { cmd: 'git reset --hard HEAD~1', purpose: 'Discard commit and all uncommitted edits', cat: 'undo', sheet: 11, flags: [{flag:'--hard', desc:'Destroys working edits'}], out: 'HEAD is now at previous commit. Working tree clean.', exp: 'Dangerous reset destroying local modifications.' },
        { cmd: 'git reflog', purpose: 'Show reference log of all past HEAD positions', cat: 'undo', sheet: 11, flags: [], out: 'a1b2c3d HEAD@{0}: reset: moving...', exp: 'Ultimate safety net for lost commits.' },
        { cmd: 'git revert HEAD', purpose: 'Create commit reversing latest commit', cat: 'undo', sheet: 11, flags: [], out: '[main 8f9a0b1] Revert HEAD', exp: 'Reverses latest commit safely.' },
        { cmd: 'git revert <hash>', purpose: 'Create commit reversing past commit', cat: 'undo', sheet: 11, flags: [], out: '[main 7c8d9e0] Revert commit', exp: 'Safe undo for public branches.' },
        { cmd: 'git rebase <branch>', purpose: 'Rebase active commits onto target branch', cat: 'undo', sheet: 11, flags: [], out: 'Rewinding head to replay work...', exp: 'Linearizes commit history.' },
        { cmd: 'git rebase origin/main', purpose: 'Rebase local feature branch onto remote main', cat: 'undo', sheet: 11, flags: [], out: 'First, rewinding head... Replayed commits.', exp: 'Syncs feature branch with latest team code.' },
        { cmd: 'git rebase --abort', purpose: 'Cancel messy rebase and return to original HEAD', cat: 'undo', sheet: 11, flags: [], out: 'Rebase aborted.', exp: 'Aborts rebase cleanly if conflicts get complex.' },
        { cmd: 'git rebase -i HEAD~N', purpose: 'Interactively rebase/squash last N commits', cat: 'undo', sheet: 11, flags: [{flag:'-i', desc:'Interactive mode'}], out: 'pick 9f3a12d\nsquash 4b8d910', exp: 'Combines or rewrites commit history.' },

        // Git Tags (Ch 20)
        { cmd: 'git tag', purpose: 'List all release tags in repository', cat: 'local', sheet: 12, flags: [], out: 'v1.0.0\nv1.1.0', exp: 'Lists all tag markers.' },
        { cmd: 'git tag -l "v1.*"', purpose: 'List tags matching pattern filter', cat: 'local', sheet: 12, flags: [{flag:'-l', desc:'Pattern filter'}], out: 'v1.0.0\nv1.0.1', exp: 'Filters release tags by wildcards.' },
        { cmd: 'git tag <tagname>', purpose: 'Create lightweight tag at HEAD', cat: 'local', sheet: 12, flags: [], out: '(Tag v1.0.1 created at HEAD)', exp: 'Creates lightweight pointer to commit.' },
        { cmd: 'git tag -a v1.0.0 -m "msg"', purpose: 'Create annotated release tag', cat: 'local', sheet: 12, flags: [{flag:'-a', desc:'Annotated tag'}], out: '(Tag v1.0.0 created at HEAD)', exp: 'Marks release milestones with metadata.' },
        { cmd: 'git show <tagname>', purpose: 'Show tag metadata and target commit', cat: 'local', sheet: 12, flags: [], out: 'tag v1.0.0\nTagger: Ada', exp: 'Prints tag details and commit patch.' },
        { cmd: 'git push origin --tags', purpose: 'Push all local release tags to remote', cat: 'remote', sheet: 12, flags: [{flag:'--tags', desc:'All tags'}], out: '* [new tag] v1.0.0', exp: 'Uploads release tags to GitHub.' },
        { cmd: 'git tag -d <tagname>', purpose: 'Delete local release tag', cat: 'local', sheet: 12, flags: [{flag:'-d', desc:'Delete tag'}], out: 'Deleted tag \'v1.0.0\'', exp: 'Removes tag from local repository.' },
        { cmd: 'git push origin --delete <tagname>', purpose: 'Delete release tag from GitHub remote', cat: 'remote', sheet: 12, flags: [], out: '- [deleted] v1.0.0', exp: 'Deletes remote tag on GitHub.' },

        // GitHub Essentials & Remotes (Ch 21, Ch 22)
        { cmd: 'git remote -v', purpose: 'List remote aliases and URLs', cat: 'remote', sheet: 12, flags: [{flag:'-v', desc:'Verbose'}], out: 'origin https://github.com/repo (fetch)', exp: 'Displays remote server connections.' },
        { cmd: 'git remote add origin <url>', purpose: 'Connect local repo to GitHub URL', cat: 'remote', sheet: 12, flags: [{flag:'origin', desc:'Default remote alias'}], out: '(Remote registered)', exp: 'Links local repo to GitHub.' },
        { cmd: 'git remote rename origin upstream', purpose: 'Rename remote alias from origin to upstream', cat: 'remote', sheet: 12, flags: [], out: '(Renamed remote origin)', exp: 'Changes alias name for remote endpoint.' },
        { cmd: 'git remote remove <name>', purpose: 'Remove remote repository connection', cat: 'remote', sheet: 12, flags: [], out: '(Remote origin removed)', exp: 'Unlinks remote server connection.' },
        { cmd: 'git fetch <remote>', purpose: 'Fetch remote changes without merging', cat: 'remote', sheet: 12, flags: [], out: 'From https://github.com/repo\n * [new branch] dev', exp: 'Downloads remote refs safely.' },
        { cmd: 'git pull', purpose: 'Fetch remote commits and merge', cat: 'remote', sheet: 12, flags: [], out: 'Updating a1b2c3d..e4f5a6b', exp: 'Shortcut fetching and merging.' },
        { cmd: 'git pull --rebase', purpose: 'Fetch remote updates and rebase local commits', cat: 'remote', sheet: 12, flags: [{flag:'--rebase', desc:'Avoids merge commits'}], out: 'Fast-forwarded local branch.', exp: 'Clean remote synchronization.' },
        { cmd: 'git push <remote> <branch>', purpose: 'Upload local branch commits to remote', cat: 'remote', sheet: 12, flags: [], out: 'To https://github.com/repo.git\n * [new branch] feature', exp: 'Uploads branch commits.' },
        { cmd: 'git push -u origin main', purpose: 'Upload commits and set upstream', cat: 'remote', sheet: 12, flags: [{flag:'-u', desc:'Set upstream link'}], out: 'Branch main set up to track origin/main.', exp: 'First time push to GitHub.' },
        { cmd: 'git push --force', purpose: 'Force push overwriting remote history', cat: 'remote', sheet: 12, flags: [{flag:'--force', desc:'Force overwrite'}], out: '+ e4f5a6b... main (forced update)', exp: 'Overwrites remote state with local.' },
        { cmd: 'git push --force-with-lease', purpose: 'Safely force push without overwriting team code', cat: 'remote', sheet: 12, flags: [{flag:'--force-with-lease', desc:'Validates remote ref'}], out: 'Forced update to origin/main', exp: 'Safe alternative to --force.' },
        { cmd: 'git push origin --delete <branch>', purpose: 'Delete remote branch on GitHub', cat: 'remote', sheet: 9, flags: [], out: '- [deleted] feature/search', exp: 'Deletes branch from GitHub server.' },
        { cmd: 'git remote add upstream <url>', purpose: 'Link fork to original parent repository', cat: 'remote', sheet: 13, flags: [{flag:'upstream', desc:'Alias for parent repo'}], out: '(Upstream linked)', exp: 'Used in open-source fork workflows.' }
    ];

    renderMasterTable(masterCommands);

    function renderMasterTable(items) {
        masterTableBody.innerHTML = '';
        items.forEach(item => {
            const tr = document.createElement('tr');
            tr.className = 'hoverable-cmd';
            tr.setAttribute('tabindex', '0');
            tr.setAttribute('data-cmd', item.cmd);
            tr.setAttribute('data-purpose', item.purpose);
            tr.setAttribute('data-example-cmd', item.cmd);
            tr.setAttribute('data-example-out', item.out);
            tr.setAttribute('data-explanation', item.exp);
            tr.setAttribute('data-flags', JSON.stringify(item.flags));

            tr.innerHTML = `
                <td><code>${escapeHtml(item.cmd)}</code></td>
                <td><span class="badge badge-info">${item.cat.toUpperCase()}</span></td>
                <td>${item.purpose}</td>
            `;

            tr.addEventListener('click', (e) => {
                e.stopPropagation();
                masterTableBody.querySelectorAll('.hoverable-cmd').forEach(r => r.classList.remove('active-row'));
                tr.classList.add('active-row');
            });

            masterTableBody.appendChild(tr);
        });

        attachHoverListeners();
    }



    function updateBookState() {
        if (!book3d) return;

        book3d.classList.remove('at-cover', 'at-back-cover');

        if (currentSheet === 0) {
            book3d.classList.add('at-cover');
            if (prevBtn) {
                prevBtn.style.opacity = '0';
                prevBtn.style.pointerEvents = 'none';
            }
            if (nextBtn) {
                nextBtn.style.opacity = '1';
                nextBtn.style.pointerEvents = 'auto';
            }
        } else if (currentSheet === totalSheets) {
            book3d.classList.add('at-back-cover');
            if (prevBtn) {
                prevBtn.style.opacity = '1';
                prevBtn.style.pointerEvents = 'auto';
            }
            if (nextBtn) {
                nextBtn.style.opacity = '0';
                nextBtn.style.pointerEvents = 'none';
            }
        } else {
            if (prevBtn) {
                prevBtn.style.opacity = '1';
                prevBtn.style.pointerEvents = 'auto';
            }
            if (nextBtn) {
                nextBtn.style.opacity = '1';
                nextBtn.style.pointerEvents = 'auto';
            }
        }
    }

    // ---------------- 3D Sheet Flip Engine ----------------
    function goToSheet(targetSheet) {
        if (targetSheet < 0 || targetSheet > totalSheets || isFlipping) return;
        isFlipping = true;
        window.playPaperFlipSound();

        if (targetSheet > currentSheet) {
            for (let i = currentSheet; i < targetSheet; i++) {
                sheets[i].classList.add('flipped');
                sheets[i].style.zIndex = 10 + i;
            }
        } else {
            for (let i = currentSheet - 1; i >= targetSheet; i--) {
                sheets[i].classList.remove('flipped');
                sheets[i].style.zIndex = totalSheets - i;
            }
        }

        stopNarratorAudio();
        
        const linusCard = document.getElementById('linusHoverCard');
        if (linusCard) linusCard.classList.add('hidden');

        currentSheet = targetSheet;
        updateBookState();

        if (currentPageNumEl) {
            if (currentSheet === 0) {
                currentPageNumEl.textContent = 'Cover';
            } else if (currentSheet === totalSheets) {
                currentPageNumEl.textContent = `Spread ${totalSheets} (Completion)`;
            } else {
                currentPageNumEl.textContent = `Spread ${currentSheet + 1}`;
            }
        }

        setTimeout(() => {
            isFlipping = false;
        }, 850);
    }

    function flipNext() {
        if (currentSheet < totalSheets) {
            goToSheet(currentSheet + 1);
        }
    }

    function flipPrev() {
        if (currentSheet > 0) {
            goToSheet(currentSheet - 1);
        }
    }

    sheets.forEach((sheet, idx) => {
        const frontFace = sheet.querySelector('.page-front');
        const backFace = sheet.querySelector('.page-back');

        if (frontFace) {
            frontFace.addEventListener('click', (e) => {
                if (e.target.closest('button') || e.target.closest('input') || e.target.closest('a') || e.target.closest('tr') || e.target.closest('.toc-card') || e.target.closest('.interactive-cli-box') || e.target.closest('.repo-dashboard') || e.target.closest('.page-link-tag') || e.target.closest('[data-jump]') || e.target.closest('.master-table-container') || e.target.closest('.speaker-audio-wrapper')) return;
                flipNext();
            });
        }
        if (backFace) {
            backFace.addEventListener('click', (e) => {
                if (e.target.closest('button') || e.target.closest('input') || e.target.closest('a') || e.target.closest('tr') || e.target.closest('.toc-card') || e.target.closest('.interactive-cli-box') || e.target.closest('.repo-dashboard') || e.target.closest('.page-link-tag') || e.target.closest('[data-jump]') || e.target.closest('.master-table-container') || e.target.closest('.speaker-audio-wrapper')) return;
                flipPrev();
            });
        }
    });

    nextBtn.addEventListener('click', flipNext);
    prevBtn.addEventListener('click', flipPrev);
    if (startReadingBtn) {
        startReadingBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            goToSheet(1);
        });
    }

    // ---------------- Mousewheel/Trackpad Scrolling Fix for 3D Pages ----------------
    document.addEventListener('wheel', (e) => {
        const scrollable = e.target.closest('.table-responsive, .page-content, .master-table-container');
        if (scrollable) {
            let prevent = false;
            
            // Handle vertical scroll
            if (e.deltaY !== 0) {
                const before = scrollable.scrollTop;
                scrollable.scrollTop += e.deltaY;
                if (scrollable.scrollTop !== before) {
                    prevent = true;
                } else {
                    // Bubble scroll to parent page-content if inner table is at boundaries
                    const parentScrollable = scrollable.parentElement ? scrollable.parentElement.closest('.page-content, .master-table-container') : null;
                    if (parentScrollable) {
                        const pBefore = parentScrollable.scrollTop;
                        parentScrollable.scrollTop += e.deltaY;
                        if (parentScrollable.scrollTop !== pBefore) {
                            prevent = true;
                        }
                    }
                }
            }
            
            // Handle horizontal scroll
            if (e.deltaX !== 0) {
                const before = scrollable.scrollLeft;
                scrollable.scrollLeft += e.deltaX;
                if (scrollable.scrollLeft !== before) {
                    prevent = true;
                }
            }
            
            if (prevent) {
                e.preventDefault();
            }
        }
    }, { passive: false });

    // ---------------- Mobile Touch Scroll Engine for 3D Pages ----------------
    let touchStartY = 0;
    let touchStartX = 0;
    let touchStartScrollTop = 0;
    let touchStartScrollLeft = 0;
    let activeScrollableEl = null;

    document.addEventListener('touchstart', (e) => {
        const scrollable = e.target.closest('.page-content, .table-responsive, .master-table-container');
        if (scrollable && e.touches && e.touches.length === 1) {
            activeScrollableEl = scrollable;
            touchStartY = e.touches[0].clientY;
            touchStartX = e.touches[0].clientX;
            touchStartScrollTop = scrollable.scrollTop;
            touchStartScrollLeft = scrollable.scrollLeft;
        } else {
            activeScrollableEl = null;
        }
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        if (!activeScrollableEl || !e.touches || e.touches.length !== 1) return;
        const currentY = e.touches[0].clientY;
        const currentX = e.touches[0].clientX;
        const deltaY = touchStartY - currentY;
        const deltaX = touchStartX - currentX;

        if (Math.abs(deltaY) >= Math.abs(deltaX)) {
            const pageContent = activeScrollableEl.closest('.page-content') || activeScrollableEl;
            pageContent.scrollTop = touchStartScrollTop + deltaY;
        } else if (activeScrollableEl.scrollWidth > activeScrollableEl.clientWidth) {
            activeScrollableEl.scrollLeft = touchStartScrollLeft + deltaX;
        }
    }, { passive: true });

    document.addEventListener('keydown', (e) => {
        if (document.activeElement.tagName === 'INPUT') return;

        // Page 30 (Chapter 27: Master Command Reference) Dedicated Keyboard Controls
        if (currentSheet === 15) {
            const masterContainer = document.querySelector('.master-table-container');
            const isCtrlOrCmd = e.ctrlKey || e.metaKey;

            if (isCtrlOrCmd && e.key === 'ArrowRight') {
                e.preventDefault();
                e.stopPropagation();
                if (masterContainer) masterContainer.scrollLeft += 80;
                return;
            } else if (isCtrlOrCmd && e.key === 'ArrowLeft') {
                e.preventDefault();
                e.stopPropagation();
                if (masterContainer) masterContainer.scrollLeft -= 80;
                return;
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                e.stopPropagation();
                const activeRow = masterTableBody ? masterTableBody.querySelector('.active-row') : null;
                if (activeRow && activeRow.nextElementSibling) {
                    activeRow.classList.remove('active-row');
                    activeRow.nextElementSibling.classList.add('active-row');
                    activeRow.nextElementSibling.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                } else if (masterContainer) {
                    masterContainer.scrollTop += 45;
                }
                return;
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                e.stopPropagation();
                const activeRow = masterTableBody ? masterTableBody.querySelector('.active-row') : null;
                if (activeRow && activeRow.previousElementSibling) {
                    activeRow.classList.remove('active-row');
                    activeRow.previousElementSibling.classList.add('active-row');
                    activeRow.previousElementSibling.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                } else if (masterContainer) {
                    masterContainer.scrollTop -= 45;
                }
                return;
            }
        }

        if (e.key === 'ArrowRight' || e.key === ' ') {
            flipNext();
        } else if (e.key === 'ArrowLeft') {
            flipPrev();
        } else if (e.key === 'Escape') {
            tocModal.classList.add('hidden');
            liveTerminalCard.classList.add('hidden');
        }
    });

    soundToggleBtn.addEventListener('click', () => {
        window.isSoundEnabled = !window.isSoundEnabled;
        soundToggleBtn.innerHTML = window.isSoundEnabled ? 
            '<i class="fa-solid fa-volume-high"></i>' : 
            '<i class="fa-solid fa-volume-xmark" style="color:#ef4444;"></i>';
    });

    themeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        themeMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
        themeMenu.classList.add('hidden');
        searchSearchResults.classList.add('hidden');
    });

    themeMenu.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            document.body.className = btn.getAttribute('data-theme');
            themeMenu.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    if (tocToggleBtn) {
        tocToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            tocModal.classList.remove('hidden');
        });
    }

    if (closeTocModalBtn) {
        closeTocModalBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            tocModal.classList.add('hidden');
        });
    }

    if (tocModal) {
        tocModal.addEventListener('click', (e) => {
            if (e.target === tocModal) {
                tocModal.classList.add('hidden');
            }
        });
    }

    document.addEventListener('click', (e) => {
        const jumpTarget = e.target.closest('[data-jump]');
        if (jumpTarget) {
            const sheetNum = parseInt(jumpTarget.getAttribute('data-jump'));
            if (!isNaN(sheetNum)) {
                e.stopPropagation();
                goToSheet(sheetNum);
                tocModal.classList.add('hidden');
            }
        }
    });

    // ---------------- Live Floating Terminal Hover Preview ----------------
    function attachHoverListeners() {
        document.querySelectorAll('.hoverable-cmd').forEach(row => {
            row.addEventListener('mouseenter', (e) => {
                const cmd = row.getAttribute('data-cmd');
                const out = row.getAttribute('data-example-out');
                const exp = row.getAttribute('data-explanation');
                const flagsRaw = row.getAttribute('data-flags');

                termHoverCmd.textContent = cmd;
                termHoverOut.textContent = out || '(Command output)';
                termHoverExplanation.textContent = exp || row.getAttribute('data-purpose');

                termHoverFlags.innerHTML = '';
                if (flagsRaw) {
                    try {
                        const flags = JSON.parse(flagsRaw);
                        if (flags.length > 0) {
                            flags.forEach(f => {
                                const div = document.createElement('div');
                                div.className = 'flag-item';
                                div.innerHTML = `<code>${escapeHtml(f.flag)}</code>: ${escapeHtml(f.desc)}`;
                                termHoverFlags.appendChild(div);
                            });
                            document.getElementById('termFlagsSection').style.display = 'block';
                        } else {
                            document.getElementById('termFlagsSection').style.display = 'none';
                        }
                    } catch (err) {
                        document.getElementById('termFlagsSection').style.display = 'none';
                    }
                }

                const rect = row.getBoundingClientRect();
                let topPos = rect.top - 10;
                let leftPos = rect.right + 20;

                if (leftPos + 430 > window.innerWidth) {
                    leftPos = rect.left - 440;
                }
                if (leftPos < 20) leftPos = 20;
                if (topPos + 320 > window.innerHeight) {
                    topPos = window.innerHeight - 330;
                }

                liveTerminalCard.style.top = `${Math.max(15, topPos)}px`;
                liveTerminalCard.style.left = `${leftPos}px`;
                liveTerminalCard.classList.remove('hidden');
            });
        });
    }

    closeHoverCardBtn.addEventListener('click', () => liveTerminalCard.classList.add('hidden'));

    termCopyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(termHoverCmd.textContent);
        termCopyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        setTimeout(() => {
            termCopyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
        }, 1800);
    });

    // ---------------- Quick Command Search ----------------
    commandSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            searchSearchResults.classList.add('hidden');
            return;
        }

        const matches = masterCommands.filter(c => 
            c.cmd.toLowerCase().includes(query) || c.purpose.toLowerCase().includes(query)
        );

        if (matches.length > 0) {
            searchSearchResults.innerHTML = matches.map(m => `
                <div class="search-item" data-jump="${m.sheet}">
                    <code>${escapeHtml(m.cmd)}</code>
                    <small>Spread ${m.sheet + 1} • ${escapeHtml(m.purpose)}</small>
                </div>
            `).join('');
            searchSearchResults.classList.remove('hidden');

            searchSearchResults.querySelectorAll('.search-item').forEach(item => {
                item.addEventListener('click', (ev) => {
                    ev.stopPropagation();
                    const sheetNum = parseInt(item.getAttribute('data-jump'));
                    goToSheet(sheetNum);
                    searchSearchResults.classList.add('hidden');
                    commandSearchInput.value = '';
                });
            });
        } else {
            searchSearchResults.innerHTML = '<div style="padding:10px;font-size:0.78rem;color:#8b949e;">No matching commands found.</div>';
            searchSearchResults.classList.remove('hidden');
        }
    });

    // ---------------- Filter Pills ----------------
    categoryFilters.querySelectorAll('.pill').forEach(pill => {
        pill.addEventListener('click', () => {
            categoryFilters.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            const cat = pill.getAttribute('data-cat');
            if (cat === 'all') {
                renderMasterTable(masterCommands);
            } else {
                renderMasterTable(masterCommands.filter(c => c.cat === cat));
            }
        });
    });

    // ---------------- Interactive Branch Sim (Sheet 4) ----------------
    let simNodes = [
        { id: 'C1', label: 'C1', type: 'main' },
        { id: 'C2', label: 'C2', type: 'main' }
    ];
    let simStep = 2;

    function renderBranchSim() {
        if (!branchSimCanvas) return;
        branchSimCanvas.innerHTML = '';
        simNodes.forEach(node => {
            const nodeEl = document.createElement('div');
            nodeEl.className = `sim-node ${node.type}`;
            nodeEl.textContent = node.label;
            branchSimCanvas.appendChild(nodeEl);
        });
    }

    renderBranchSim();

    if (simCommitBtn) {
        simCommitBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            simStep++;
            simNodes.push({ id: `C${simStep}`, label: `C${simStep}`, type: 'main' });
            renderBranchSim();
        });
    }

    if (simBranchBtn) {
        simBranchBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            simStep++;
            simNodes.push({ id: `C${simStep}`, label: `C${simStep}`, type: 'feature' });
            renderBranchSim();
        });
    }

    if (simMergeBtn) {
        simMergeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            simStep++;
            simNodes.push({ id: `M${simStep}`, label: `M${simStep}`, type: 'merge' });
            renderBranchSim();
        });
    }

    if (simResetBtn) {
        simResetBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            simStep = 2;
            simNodes = [
                { id: 'C1', label: 'C1', type: 'main' },
                { id: 'C2', label: 'C2', type: 'main' }
            ];
            renderBranchSim();
        });
    }

    // ==========================================================================
    // ---------------- LIVE REPOSITORY DASHBOARD & CLI ENGINE ------------------
    // ==========================================================================

    let repoState = {
        isInit: true,
        staged: [],
        untracked: ['index.html', 'style.css', 'app.js'],
        commits: [{ hash: 'a1b2c3d', msg: 'Initial project setup', author: 'Dev' }],
        branch: 'main',
        branches: ['main'],
        remoteOrigin: null,
        remoteUpstream: null
    };

    function updateDashboardUI() {
        if (!dashActiveBranch) return;

        // Active Branch
        dashActiveBranch.innerHTML = `<i class="fa-solid fa-code-branch"></i> ${repoState.branch}`;

        // Remote Origin URL
        dashRemoteUrl.textContent = repoState.remoteOrigin || 'Not linked (use git remote add origin ...)';
        dashRemoteUrl.style.color = repoState.remoteOrigin ? '#7ee787' : '#8b949e';

        // HEAD Commit
        if (repoState.commits.length > 0) {
            const head = repoState.commits[0];
            dashHeadCommit.textContent = `${head.hash} (${head.msg})`;
        } else {
            dashHeadCommit.textContent = 'No commits yet';
        }

        // Staged Pills
        if (repoState.staged.length > 0) {
            dashStagedPills.innerHTML = repoState.staged.map(f => `<span class="staged-pill">${f}</span>`).join('');
        } else {
            dashStagedPills.innerHTML = `<span class="empty-hint">None</span>`;
        }

        // Untracked / Modified Pills
        if (repoState.untracked.length > 0) {
            dashUntrackedPills.innerHTML = repoState.untracked.map(f => `<span class="untracked-pill">${f}</span>`).join('');
        } else {
            dashUntrackedPills.innerHTML = `<span class="empty-hint">Clean working tree</span>`;
        }

        // Commit Stack
        dashCommitStack.innerHTML = repoState.commits.map(c => `
            <div class="commit-stack-item">
                <span class="c-hash">${c.hash}</span>
                <span class="c-msg">${escapeHtml(c.msg)}</span>
            </div>
        `).join('');
    }

    function printCliLine(text, typeClass = '') {
        const line = document.createElement('div');
        line.className = `cli-line ${typeClass}`;
        line.textContent = text;
        cliScreen.appendChild(line);
        cliScreen.scrollTop = cliScreen.scrollHeight;
    }

    updateDashboardUI();

    if (cliForm) {
        cliForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const rawCmd = cliInput.value.trim();
            if (!rawCmd) return;

            printCliLine(`$ ${rawCmd}`, 'cmd-entered');
            cliInput.value = '';

            const parts = rawCmd.split(/\s+/);
            const base = parts[0].toLowerCase();
            const sub = parts[1] ? parts[1].toLowerCase() : '';
            const arg3 = parts[2] ? parts[2] : '';
            const arg4 = parts[3] ? parts[3] : '';

            if (base === 'clear') {
                cliScreen.innerHTML = '';
                return;
            }

            if (base === 'help') {
                printCliLine('Simulated Git CLI commands:', 'info-out');
                printCliLine('  • git clone <url>', 'info-out');
                printCliLine('  • git remote add origin <url>', 'info-out');
                printCliLine('  • git remote -v', 'info-out');
                printCliLine('  • git status', 'info-out');
                printCliLine('  • git add <file> OR git add .', 'info-out');
                printCliLine('  • git commit -m "your message"', 'info-out');
                printCliLine('  • git branch <name>', 'info-out');
                printCliLine('  • git switch <name> OR git checkout -b <name>', 'info-out');
                printCliLine('  • git push -u origin <branch>', 'info-out');
                printCliLine('  • git restore <file>', 'info-out');
                printCliLine('  • clear', 'info-out');
                return;
            }

            if (base !== 'git') {
                printCliLine(`zsh: command not found: ${base}. Type 'help' for options.`, 'error-out');
                return;
            }

            // Command Processing Engine
            switch (sub) {

                case 'config':
                    if (rawCmd.includes('--local') && rawCmd.includes('--list')) {
                        printCliLine(`user.name=${repoState.localUserName || 'Your name'}\nuser.email=${repoState.localUserEmail || 'your@example.com'}`, 'info-out');
                    } else if (rawCmd.includes('--list')) {
                        printCliLine(`user.name=${repoState.userName || 'Ada Lovelace'}\nuser.email=${repoState.userEmail || 'ada@lovelace.dev'}\ncore.editor=${repoState.coreEditor || 'code'}\ninit.defaultbranch=main`, 'info-out');
                    } else if (rawCmd.includes('core.editor')) {
                        const edMatch = rawCmd.match(/core\.editor\s+(["']?[\w\-]+["']?)/);
                        const editorVal = edMatch ? edMatch[1] : 'code';
                        repoState.coreEditor = editorVal;
                        printCliLine(`Configured core.editor -> ${editorVal}`, 'success-out');
                    } else if (rawCmd.includes('user.name')) {
                        const nameMatch = rawCmd.match(/user\.name\s+["']?([^"']+)["']?/);
                        const val = nameMatch ? nameMatch[1] : 'Your name';
                        if (rawCmd.includes('--local')) {
                            repoState.localUserName = val;
                            printCliLine(`Configured local user.name -> "${val}" (.git/config)`, 'success-out');
                        } else {
                            repoState.userName = val;
                            printCliLine(`Configured global user.name -> "${val}" (~/.gitconfig)`, 'success-out');
                        }
                    } else if (rawCmd.includes('user.email')) {
                        const emailMatch = rawCmd.match(/user\.email\s+["']?([^"']+)["']?/);
                        const val = emailMatch ? emailMatch[1] : 'your@example.com';
                        if (rawCmd.includes('--local')) {
                            repoState.localUserEmail = val;
                            printCliLine(`Configured local user.email -> "${val}" (.git/config)`, 'success-out');
                        } else {
                            repoState.userEmail = val;
                            printCliLine(`Configured global user.email -> "${val}" (~/.gitconfig)`, 'success-out');
                        }
                    } else {
                        printCliLine(`Git config saved successfully.`, 'success-out');
                    }
                    break;

                case 'clone':
                    const cloneUrl = parts[2];
                    if (!cloneUrl) {
                        printCliLine(`fatal: You must specify a repository to clone.`, 'error-out');
                    } else {
                        printCliLine(`Cloning into '${cloneUrl.split('/').pop().replace('.git', '')}'...`, 'info-out');
                        printCliLine(`remote: Enumerating objects: 38, done.`, 'info-out');
                        printCliLine(`Receiving objects: 100% (38/38), 12.4 KiB | 12.40 MiB/s, done.`, 'success-out');

                        repoState.isInit = true;
                        repoState.remoteOrigin = cloneUrl;
                        repoState.branch = 'main';
                        repoState.branches = ['main'];
                        repoState.staged = [];
                        repoState.untracked = ['README.md', 'src/app.js'];
                        repoState.commits = [{ hash: Math.random().toString(16).substring(2, 9), msg: 'Initial clone commit from origin', author: 'GitHub' }];
                        updateDashboardUI();
                    }
                    break;

                case 'remote':
                    if (arg3 === 'add') {
                        const alias = arg4;
                        const url = parts[4];
                        if (!alias || !url) {
                            printCliLine(`usage: git remote add <name> <url>`, 'error-out');
                        } else {
                            if (alias === 'origin') {
                                repoState.remoteOrigin = url;
                            } else if (alias === 'upstream') {
                                repoState.remoteUpstream = url;
                            }
                            printCliLine(`Remote registered alias '${alias}' -> ${url}`, 'success-out');
                            updateDashboardUI();
                        }
                    } else if (arg3 === '-v' || arg3 === 'verbose') {
                        if (repoState.remoteOrigin) {
                            printCliLine(`origin\t${repoState.remoteOrigin} (fetch)`, 'info-out');
                            printCliLine(`origin\t${repoState.remoteOrigin} (push)`, 'info-out');
                        }
                        if (repoState.remoteUpstream) {
                            printCliLine(`upstream\t${repoState.remoteUpstream} (fetch)`, 'info-out');
                            printCliLine(`upstream\t${repoState.remoteUpstream} (push)`, 'info-out');
                        }
                        if (!repoState.remoteOrigin && !repoState.remoteUpstream) {
                            printCliLine(`(No remotes configured. Use: git remote add origin <url>)`, 'warn-out');
                        }
                    } else {
                        printCliLine(`git remote: sub-command '${arg3}' not recognized. Try: git remote add origin <url>`, 'warn-out');
                    }
                    break;

                case 'init':
                    repoState.isInit = true;
                    printCliLine(`Initialized empty Git repository in /Users/dev/my-app/.git/`, 'success-out');
                    updateDashboardUI();
                    break;

                case 'status':
                    printCliLine(`On branch ${repoState.branch}`, 'info-out');
                    if (repoState.staged.length > 0) {
                        printCliLine(`Changes to be committed:`, 'success-out');
                        repoState.staged.forEach(f => printCliLine(`	new file:   ${f}`, 'success-out'));
                    }
                    if (repoState.untracked.length > 0) {
                        printCliLine(`Untracked / modified files:`, 'warn-out');
                        repoState.untracked.forEach(f => printCliLine(`	modified:   ${f}`, 'warn-out'));
                    }
                    if (repoState.staged.length === 0 && repoState.untracked.length === 0) {
                        printCliLine(`nothing to commit, working tree clean`, 'info-out');
                    }
                    break;

                case 'add':
                    const fileArg = parts[2];
                    if (!fileArg) {
                        printCliLine(`Nothing specified, nothing added.`, 'warn-out');
                    } else if (fileArg === '.' || fileArg === '-A') {
                        repoState.staged.push(...repoState.untracked);
                        repoState.untracked = [];
                        printCliLine(`Staged all modified & untracked files into Staging Area.`, 'success-out');
                        updateDashboardUI();
                    } else {
                        repoState.staged.push(fileArg);
                        repoState.untracked = repoState.untracked.filter(f => f !== fileArg);
                        printCliLine(`Staged file '${fileArg}'`, 'success-out');
                        updateDashboardUI();
                    }
                    break;

                case 'commit':
                    const msgMatch = rawCmd.match(/-m\s+["']?([^"']+)["']?/);
                    const msg = msgMatch ? msgMatch[1] : 'updates';
                    if (repoState.staged.length === 0) {
                        printCliLine(`no changes added to commit (use "git add")`, 'warn-out');
                    } else {
                        const hash = Math.random().toString(16).substring(2, 9);
                        repoState.commits.unshift({ hash, msg, author: 'Dev' });
                        const count = repoState.staged.length;
                        repoState.staged = [];
                        printCliLine(`[${repoState.branch} ${hash}] ${msg}`, 'success-out');
                        printCliLine(` ${count} file(s) changed`, 'info-out');
                        updateDashboardUI();
                    }
                    break;

                case 'branch':
                    const bName = parts[2];
                    if (!bName) {
                        repoState.branches.forEach(b => {
                            printCliLine(`${b === repoState.branch ? '* ' : '  '}${b}`, b === repoState.branch ? 'success-out' : 'info-out');
                        });
                    } else {
                        repoState.branches.push(bName);
                        printCliLine(`Created branch '${bName}'`, 'success-out');
                        updateDashboardUI();
                    }
                    break;

                case 'checkout':
                case 'switch':
                    const tBranch = parts[2] === '-b' ? parts[3] : parts[2];
                    if (!tBranch) {
                        printCliLine(`Please specify branch name.`, 'error-out');
                    } else {
                        if (!repoState.branches.includes(tBranch)) {
                            repoState.branches.push(tBranch);
                        }
                        repoState.branch = tBranch;
                        printCliLine(`Switched to branch '${tBranch}'`, 'success-out');
                        updateDashboardUI();
                    }
                    break;

                case 'push':
                    if (!repoState.remoteOrigin) {
                        printCliLine(`fatal: No remote repository configured. Use 'git remote add origin <url>' first.`, 'error-out');
                    } else {
                        printCliLine(`Enumerating objects: 5, done.`, 'info-out');
                        printCliLine(`Writing objects: 100% (5/5), 450 bytes, done.`, 'info-out');
                        printCliLine(`To ${repoState.remoteOrigin}`, 'info-out');
                        printCliLine(` * [new branch]      ${repoState.branch} -> ${repoState.branch}`, 'success-out');
                        printCliLine(`Branch '${repoState.branch}' set up to track remote branch '${repoState.branch}' from 'origin'.`, 'success-out');
                    }
                    break;

                case 'restore':
                    const rFile = parts[2];
                    if (rFile) {
                        repoState.untracked = repoState.untracked.filter(f => f !== rFile);
                        printCliLine(`Reverted local changes in '${rFile}'`, 'success-out');
                        updateDashboardUI();
                    } else {
                        printCliLine(`fatal: Specify file to restore.`, 'error-out');
                    }
                    break;

                case 'submodule':
                    if (rawCmd.includes('add')) {
                        const subUrl = parts[3] || 'https://github.com/lib/core.git';
                        const subPath = parts[4] || 'libs/core';
                        printCliLine(`Cloning into '${subPath}'...`, 'info-out');
                        printCliLine(`Submodule '${subPath}' (${subUrl}) registered in .gitmodules`, 'success-out');
                    } else if (rawCmd.includes('update')) {
                        printCliLine(`Submodule path 'libs/core': checked out latest commit`, 'success-out');
                    } else {
                        printCliLine(`Submodule configuration processed.`, 'info-out');
                    }
                    break;

                case 'stash':
                    if (rawCmd.includes('list')) {
                        printCliLine(`stash@{0}: WIP on ${repoState.branch}: ${repoState.commits[0]?.hash || 'a1b2c3d'} Work in progress`, 'info-out');
                    } else if (rawCmd.includes('pop') || rawCmd.includes('apply')) {
                        printCliLine(`On branch ${repoState.branch}: Changes restored from stash`, 'success-out');
                    } else if (rawCmd.includes('clear') || rawCmd.includes('drop')) {
                        printCliLine(`Stash stack cleared.`, 'success-out');
                    } else {
                        printCliLine(`Saved working directory state WIP on ${repoState.branch}: ${repoState.commits[0]?.hash || 'a1b2c3d'}`, 'success-out');
                    }
                    break;

                case 'fetch':
                    printCliLine(`From ${repoState.remoteOrigin || 'https://github.com/origin/repo'}\n * [new branch]      main -> origin/main`, 'info-out');
                    break;

                case 'version':
                    printCliLine(`git version 2.45.2`, 'info-out');
                    break;

                case 'diff':
                    if (rawCmd.includes('--staged')) {
                        printCliLine(`diff --git a/index.html b/index.html\n+ <meta name="viewport" content="width=device-width">`, 'info-out');
                    } else {
                        printCliLine(`diff --git a/app.js b/app.js\n- const x = 1;\n+ const x = 2;`, 'info-out');
                    }
                    break;

                case 'show':
                    printCliLine(`commit ${repoState.commits[0]?.hash || 'a1b2c3d'}\nAuthor: Dev <dev@example.com>\nDate:   2026-07-20\n\n    ${repoState.commits[0]?.msg || 'Initial commit'}`, 'info-out');
                    break;

                case 'tag':
                    if (parts[2]) {
                        printCliLine(`Created tag '${parts[2]}' at HEAD (${repoState.commits[0]?.hash || 'a1b2c3d'})`, 'success-out');
                    } else {
                        printCliLine(`v1.0.0\nv1.1.0\nv2.0.0-beta`, 'info-out');
                    }
                    break;

                default:
                    printCliLine(`git: '${sub}' command output simulated. Try 'help' for supported commands.`, 'info-out');
                    break;
            }
        });
    }

    if (cliResetBtn) {
        cliResetBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            cliScreen.innerHTML = '<div class="cli-line">Terminal & Dashboard reset. Try: <code>git clone https://github.com/user/project.git</code></div>';
            repoState = {
                isInit: true,
                staged: [],
                untracked: ['index.html', 'style.css', 'app.js'],
                commits: [{ hash: 'a1b2c3d', msg: 'Initial project setup', author: 'Dev' }],
                branch: 'main',
                branches: ['main'],
                remoteOrigin: null,
                remoteUpstream: null
            };
            updateDashboardUI();
        });
    }

    // --------------------------------------------------------------------------
    // CHAPTER 10: MCQ GAME ARENA ENGINE
    // --------------------------------------------------------------------------
    let selectedLevel = 1;
    let unlockedLevels = [1];
    let activeQuestions = [];
    let currentQIdx = 0;
    let quizScore = 0;
    let quizStreak = 0;
    let maxStreak = 0;
    let correctCount = 0;
    let timerDuration = 30; // seconds
    let remainingTimer = 30;
    let timerInterval = null;
    let isQuestionAnswered = false;

    // Web Audio Sound Generators for MCQ Game
    function playCorrectSound() {
        if (!window.isSoundEnabled) return;
        const ctx = window.getSharedAudioContext ? window.getSharedAudioContext() : null;
        if (!ctx) return;
        try {
            const now = ctx.currentTime;
            const osc1 = ctx.createOscillator();
            const osc2 = ctx.createOscillator();
            const gain = ctx.createGain();

            osc1.type = 'sine'; osc2.type = 'triangle';
            osc1.frequency.setValueAtTime(523.25, now); // C5
            osc1.frequency.setValueAtTime(659.25, now + 0.1); // E5
            osc1.frequency.setValueAtTime(783.99, now + 0.2); // G5
            osc2.frequency.setValueAtTime(1046.50, now + 0.2); // C6

            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);

            osc1.connect(gain); osc2.connect(gain);
            gain.connect(ctx.destination);

            osc1.start(now); osc2.start(now);
            osc1.stop(now + 0.45); osc2.stop(now + 0.45);
        } catch (e) {}
    }

    function playWrongSound() {
        if (!window.isSoundEnabled) return;
        const ctx = window.getSharedAudioContext ? window.getSharedAudioContext() : null;
        if (!ctx) return;
        try {
            const now = ctx.currentTime;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(180, now);
            osc.frequency.exponentialRampToValueAtTime(110, now + 0.3);

            gain.gain.setValueAtTime(0.3, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now);
            osc.stop(now + 0.35);
        } catch (e) {}
    }

    function playLevelUpSound() {
        if (!window.isSoundEnabled) return;
        const ctx = window.getSharedAudioContext ? window.getSharedAudioContext() : null;
        if (!ctx) return;
        try {
            const now = ctx.currentTime;
            const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
            notes.forEach((freq, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + i * 0.08);
                gain.gain.setValueAtTime(0.18, now + i * 0.08);
                gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.08 + 0.3);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now + i * 0.08);
                osc.stop(now + i * 0.08 + 0.3);
            });
        } catch (e) {}
    }

    // DOM References for Quiz
    const levelCards = document.querySelectorAll('.level-card');
    const timerModeSelect = document.getElementById('timerModeSelect');
    const startQuizBtn = document.getElementById('startQuizBtn');

    const quizLevelBadge = document.getElementById('quizLevelBadge');
    const quizScoreEl = document.getElementById('quizScore');
    const quizStreakEl = document.getElementById('quizStreak');
    const quizTimerText = document.getElementById('quizTimerText');
    const timerProgressFill = document.getElementById('timerProgressFill');

    const qCurrentIndex = document.getElementById('qCurrentIndex');
    const qProgressPills = document.getElementById('qProgressPills');
    const qText = document.getElementById('qText');
    const optionBtns = document.querySelectorAll('.option-btn');
    const explanationBox = document.getElementById('explanationBox');
    const expResultTitle = document.getElementById('expResultTitle');
    const expText = document.getElementById('expText');
    const nextQuestionBtn = document.getElementById('nextQuestionBtn');

    const finalResultBadge = document.getElementById('finalResultBadge');
    const finalResultTitle = document.getElementById('finalResultTitle');
    const finalResultDesc = document.getElementById('finalResultDesc');
    const reportScore = document.getElementById('reportScore');
    const reportAccuracy = document.getElementById('reportAccuracy');
    const reportMaxStreak = document.getElementById('reportMaxStreak');
    const reportLevelsProgress = document.getElementById('reportLevelsProgress');
    const nextLevelBtn = document.getElementById('nextLevelBtn');
    const restartBookBtn = document.getElementById('restartBookBtn');

    // Level selector listener
    levelCards.forEach(card => {
        card.addEventListener('click', () => {
            const lvl = parseInt(card.getAttribute('data-level'));
            if (!unlockedLevels.includes(lvl)) return;
            levelCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            selectedLevel = lvl;
        });
    });

    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            startQuizLevel(selectedLevel);
        });
    }

    if (nextLevelBtn) {
        nextLevelBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (selectedLevel < 5) {
                startQuizLevel(selectedLevel + 1);
            }
        });
    }

    function startQuizLevel(lvl) {
        selectedLevel = lvl;
        activeQuestions = quizDatabase.filter(q => q.level === lvl);
        currentQIdx = 0;
        quizScore = 0;
        quizStreak = 0;
        maxStreak = 0;
        correctCount = 0;

        if (timerModeSelect) {
            timerDuration = parseInt(timerModeSelect.value) || 0;
        }

        const levelNames = ['', 'Level 1: Novice', 'Level 2: Intermediate', 'Level 3: Advanced', 'Level 4: Expert', 'Level 5: Master'];
        if (quizLevelBadge) quizLevelBadge.textContent = levelNames[lvl] || `Level ${lvl}`;

        // Render progress dots
        if (qProgressPills) {
            qProgressPills.innerHTML = '';
            for (let i = 0; i < activeQuestions.length; i++) {
                const dot = document.createElement('div');
                dot.className = 'q-dot' + (i === 0 ? ' active' : '');
                dot.id = `qDot_${i}`;
                qProgressPills.appendChild(dot);
            }
        }

        // Jump to Sheet 17 (MCQ Playfield Arena on Page 34)
        goToSheet(17);
        loadQuestion(currentQIdx);
    }

    function loadQuestion(idx) {
        clearInterval(timerInterval);
        isQuestionAnswered = false;

        if (idx >= activeQuestions.length) {
            finishQuizLevel();
            return;
        }

        const q = activeQuestions[idx];
        if (qCurrentIndex) qCurrentIndex.textContent = (idx + 1);
        if (qText) qText.textContent = q.question;
        if (quizScoreEl) quizScoreEl.textContent = quizScore;
        if (quizStreakEl) quizStreakEl.textContent = quizStreak;

        // Button label for last question in level
        if (nextQuestionBtn) {
            if (idx === activeQuestions.length - 1) {
                nextQuestionBtn.innerHTML = 'See Level Results <i class="fa-solid fa-trophy"></i>';
            } else {
                nextQuestionBtn.innerHTML = 'Next Question <i class="fa-solid fa-arrow-right"></i>';
            }
        }

        // Update dot states
        for (let i = 0; i < activeQuestions.length; i++) {
            const d = document.getElementById(`qDot_${i}`);
            if (d) {
                d.classList.remove('active');
                if (i === idx && !d.classList.contains('correct') && !d.classList.contains('wrong')) {
                    d.classList.add('active');
                }
            }
        }

        // Options
        optionBtns.forEach((btn, optIdx) => {
            btn.className = 'option-btn';
            btn.disabled = false;
            const valSpan = btn.querySelector('.opt-val');
            if (valSpan) valSpan.textContent = q.options[optIdx];
        });

        if (explanationBox) explanationBox.classList.add('hidden');

        // Timer reset
        if (timerDuration > 0) {
            remainingTimer = timerDuration;
            updateTimerUI();
            timerInterval = setInterval(() => {
                remainingTimer--;
                updateTimerUI();
                if (remainingTimer <= 0) {
                    clearInterval(timerInterval);
                    handleAnswer(-1); // Timeout
                }
            }, 1000);
        } else {
            if (quizTimerText) quizTimerText.textContent = 'Untimed';
            if (timerProgressFill) timerProgressFill.style.width = '100%';
        }
    }

    function updateTimerUI() {
        if (quizTimerText) quizTimerText.textContent = `${remainingTimer}s`;
        if (timerProgressFill) {
            const pct = Math.max(0, (remainingTimer / timerDuration) * 100);
            timerProgressFill.style.width = `${pct}%`;
        }
    }

    function handleAnswer(selectedOpt) {
        if (isQuestionAnswered) return;
        isQuestionAnswered = true;
        clearInterval(timerInterval);

        const q = activeQuestions[currentQIdx];
        const isCorrect = (selectedOpt === q.correct);
        const dot = document.getElementById(`qDot_${currentQIdx}`);

        optionBtns.forEach(btn => btn.disabled = true);

        if (isCorrect) {
            playCorrectSound();
            quizStreak++;
            if (quizStreak > maxStreak) maxStreak = quizStreak;
            correctCount++;

            const timeBonus = (timerDuration > 0) ? remainingTimer * 2 : 10;
            const addedScore = 100 + (quizStreak * 20) + timeBonus;
            quizScore += addedScore;

            if (selectedOpt >= 0) {
                optionBtns[selectedOpt].classList.add('selected-correct');
            }
            if (dot) {
                dot.classList.remove('active');
                dot.classList.add('correct');
            }
            if (expResultTitle) expResultTitle.innerHTML = '<span style="color:#2da44e;"><i class="fa-solid fa-circle-check"></i> Correct!</span>';
        } else {
            playWrongSound();
            quizStreak = 0;

            if (selectedOpt >= 0) {
                optionBtns[selectedOpt].classList.add('selected-wrong');
            }
            if (q.correct >= 0) {
                optionBtns[q.correct].classList.add('selected-correct');
            }
            if (dot) {
                dot.classList.remove('active');
                dot.classList.add('wrong');
            }
            if (expResultTitle) expResultTitle.innerHTML = '<span style="color:#cf222e;"><i class="fa-solid fa-circle-xmark"></i> Incorrect</span>';
        }

        if (quizScoreEl) quizScoreEl.textContent = quizScore;
        if (quizStreakEl) quizStreakEl.textContent = quizStreak;

        if (expText) expText.textContent = q.explanation;
        if (explanationBox) explanationBox.classList.remove('hidden');
    }

    optionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const opt = parseInt(btn.getAttribute('data-opt'));
            handleAnswer(opt);
        });
    });

    if (nextQuestionBtn) {
        nextQuestionBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentQIdx++;
            loadQuestion(currentQIdx);
        });
    }

    function finishQuizLevel() {
        const accuracy = Math.round((correctCount / activeQuestions.length) * 100);
        const passed = accuracy >= 60;

        if (passed && selectedLevel < 5 && !unlockedLevels.includes(selectedLevel + 1)) {
            unlockedLevels.push(selectedLevel + 1);
            playLevelUpSound();

            // Update level cards UI
            levelCards.forEach(c => {
                const l = parseInt(c.getAttribute('data-level'));
                if (unlockedLevels.includes(l)) {
                    c.classList.remove('locked');
                    const statusEl = c.querySelector('.level-status');
                    if (statusEl) statusEl.innerHTML = '<i class="fa-solid fa-unlock"></i> Unlocked';
                }
            });
        }

        if (finalResultBadge) finalResultBadge.textContent = passed ? `LEVEL ${selectedLevel} COMPLETED` : `TRY AGAIN`;
        if (finalResultTitle) finalResultTitle.textContent = passed ? (selectedLevel === 5 ? '🏆 Grand Git Master!' : `Level ${selectedLevel} Cleared!`) : 'Level Challenge Failed';
        if (finalResultDesc) finalResultDesc.textContent = passed ? `You achieved ${accuracy}% accuracy! Next level is unlocked.` : `You achieved ${accuracy}% accuracy. Score at least 60% to unlock the next level.`;

        if (reportScore) reportScore.textContent = quizScore;
        if (reportAccuracy) reportAccuracy.textContent = `${accuracy}%`;
        if (reportMaxStreak) reportMaxStreak.textContent = `${maxStreak}x`;
        if (reportLevelsProgress) reportLevelsProgress.textContent = `Levels Unlocked: ${unlockedLevels.length} / 5`;

        if (nextLevelBtn) {
            if (passed && selectedLevel < 5) {
                nextLevelBtn.textContent = `Start Level ${selectedLevel + 1}`;
                nextLevelBtn.classList.remove('hidden');
            } else {
                nextLevelBtn.classList.add('hidden');
            }
        }

        // Flip to Back Cover (Sheet 17 flipped to reveal Back Cover)
        goToSheet(18);
    }

    if (restartBookBtn) {
        restartBookBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            goToSheet(0);
        });
    }

    // Keyboard Shortcuts for MCQ Arena
    document.addEventListener('keydown', (e) => {
        if (currentSheet === 17 && !isQuestionAnswered) {
            if (['1', '2', '3', '4'].includes(e.key)) {
                const idx = parseInt(e.key) - 1;
                handleAnswer(idx);
            }
        } else if (currentSheet === 17 && isQuestionAnswered && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            currentQIdx++;
            loadQuestion(currentQIdx);
        }
    });

    // ---------------- Multi-Page Audio Narrator Engine ----------------
    let currentNarratorAudio = new Audio();
    let activeAudioWrapper = null;
    let activeAudioLang = null;

    function resetAudioUI() {
        document.querySelectorAll('.speaker-audio-wrapper').forEach(wrapper => {
            const speakerBtn = wrapper.querySelector('.speaker-icon-btn');
            if (speakerBtn) {
                speakerBtn.classList.remove('is-playing');
                speakerBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
            }
            wrapper.querySelectorAll('.lang-option-btn').forEach(btn => {
                btn.classList.remove('active-lang');
                const icon = btn.querySelector('.status-icon');
                if (icon) {
                    icon.className = 'fa-solid fa-circle-play status-icon';
                }
            });
            const playbackBar = wrapper.querySelector('.audio-playback-bar');
            if (playbackBar) {
                playbackBar.classList.add('hidden');
            }
        });
        activeAudioWrapper = null;
        activeAudioLang = null;
    }

    function stopNarratorAudio() {
        if (currentNarratorAudio) {
            currentNarratorAudio.pause();
            currentNarratorAudio.currentTime = 0;
        }
        resetAudioUI();
    }

    document.querySelectorAll('.speaker-audio-wrapper').forEach(wrapper => {
        const speakerBtn = wrapper.querySelector('.speaker-icon-btn');
        const langBtns = wrapper.querySelectorAll('.lang-option-btn');
        const playbackBar = wrapper.querySelector('.audio-playback-bar');
        const nowPlayingEl = wrapper.querySelector('.now-playing-text');
        const stopBtn = wrapper.querySelector('.audio-stop-btn, #page4AudioStopBtn');

        langBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const selectedLang = btn.getAttribute('data-lang');
                const audioFile = btn.getAttribute('data-audio');

                if (!audioFile) return;

                // Toggle pause if same language is clicked while playing
                if (activeAudioWrapper === wrapper && activeAudioLang === selectedLang && !currentNarratorAudio.paused) {
                    stopNarratorAudio();
                    return;
                }

                stopNarratorAudio();

                // All audio files are located in the "audios" directory
                let audioPath = audioFile;
                if (audioPath && !audioPath.startsWith('audios/')) {
                    audioPath = 'audios/' + audioPath;
                }

                currentNarratorAudio.src = audioPath;
                activeAudioWrapper = wrapper;
                activeAudioLang = selectedLang;

                currentNarratorAudio.play().then(() => {
                    btn.classList.add('active-lang');
                    const icon = btn.querySelector('.status-icon');
                    if (icon) {
                        icon.className = 'fa-solid fa-circle-pause status-icon';
                    }
                    if (speakerBtn) {
                        speakerBtn.classList.add('is-playing');
                        speakerBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
                    }
                    if (playbackBar && nowPlayingEl) {
                        nowPlayingEl.textContent = `Playing: ${selectedLang}`;
                        playbackBar.classList.remove('hidden');
                    }
                }).catch(err => {
                    console.warn('Audio playback failed:', err);
                    resetAudioUI();
                });
            });
        });

        if (stopBtn) {
            stopBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                stopNarratorAudio();
            });
        }
    });

    currentNarratorAudio.addEventListener('ended', () => {
        resetAudioUI();
    });

    // ---------------- Linus Torvalds Hover Effect ----------------
    function initLinusHover() {
        const trigger = document.querySelector('.linus-hover-trigger');
        const card = document.getElementById('linusHoverCard');
        if (!trigger || !card) return;

        trigger.addEventListener('mouseenter', () => {
            const rect = trigger.getBoundingClientRect();
            // Position the card above the trigger, centered
            let topPos = rect.top - 290;
            let leftPos = rect.left + (rect.width / 2) - 110;

            // Boundary checks
            if (topPos < 10) {
                topPos = rect.bottom + 10; // Show below if not enough space above
            }
            if (leftPos < 10) {
                leftPos = 10;
            } else if (leftPos + 220 > window.innerWidth - 10) {
                leftPos = window.innerWidth - 230;
            }

            card.style.top = `${topPos}px`;
            card.style.left = `${leftPos}px`;
            card.classList.remove('hidden');
        });

        trigger.addEventListener('mouseleave', () => {
            card.classList.add('hidden');
        });
    }

    initLinusHover();

    // ---------------- Table Copy Button Handler ----------------
    document.addEventListener('click', (e) => {
        const copyBtn = e.target.closest('.copy-btn-table');
        if (copyBtn) {
            e.stopPropagation();
            const textToCopy = copyBtn.getAttribute('data-copy');
            if (textToCopy) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    const originalHTML = copyBtn.innerHTML;
                    copyBtn.innerHTML = '<i class="fa-solid fa-check" style="color: #2ea043;"></i>';
                    setTimeout(() => {
                        copyBtn.innerHTML = originalHTML;
                    }, 1500);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            }
        }
    });

    function escapeHtml(str) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }
});
