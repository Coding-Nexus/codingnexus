# Coding Nexus

## Welcome to the Coding Nexus. Please read the instructions below for getting the project up and running on your local machine

### Start here

If you have not yet set up an SSH key on your local machine you will need to do that to make push and pull requests to the origin repository

Follow the instructions in [this link](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) for setting up an SSH key

Follow the instructions in [this link](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account) for adding your SSH key to github

### To get this project installed on your local machine

- Fork the repository. This button is located on the top right part of this webpage. Look for the button that says **fork**. Please do not clone directly from this repo. All pull requests will be against your forked repo, not by cloning the repository directly.
- Once the project is forked and you can find it in your github account, click on the repository link
- Clone the repository by clicking the green button that says code to show the dropdown to copy your respository. Make sure the SSH tab is selected. Copy the url or click the copy button on the right of it
- Open your terminal, navigate where you want the project location to be located
- If you're using the terminal built into VScode use the shortcut control + ~ to bring up the terminal
- Type `git clone <past in the repo url you copied>`

### Set up a new URL in your git to point to the "original" repo so that you can update your forked repo when needed

- Now that you're repo is installed locally, you need to add a new git remote link so you can point to the original repository for pull requests
- Type `git remote rename origin upstream`
- Type `git remote add origin git@github.com:Coding-Nexus/codingnexus.git`
- These changes were made to link your local project to the original repository you forked, in addition to the forked reposity. You can verify this by typing `git remote -v` which should now correctly display a link to your local repository "upstream" and another remote link to the original repository that you forked from called origin
- The naming convention of origin pointing to the repo you forked from is best practiced, followed by your forked repository with the remote name upstream. Please feel free to change upstream to whatever name you like
- Now you should be able to `git pull origin master` to update your forked repository with any changes made to the origin repository
- Afterwhich you would type `git push upstream master` to update your forked master branch with the changes you just pulled from the origin repository

### start up the project

- CD into the project from your VScode or regular terminal window on your computer. If you're not familiar with terminal commands [click here](https://www.youtube.com/watch?v=5XgBd6rjuDQ)
- Type in the terminal `npm install` once you're inside your project (this will install all required dependencies to start up the website)
- You're now able to run `gatsby develop` to load the actual website
- The project page should load automatically but if it doesnt just navigate to localhost:8000

### to start up storybook

- Go into your terminal either from VScode or a regular terminal window
- Type `npm run storybook`
- The Storybook website should load automatically. If it doesn't navigate to localhost:6006

### Frontend Development Workflow

[Click here to view the Frontend Development Workflow](https://github.com/Coding-Nexus/codingnexus/blob/master/docs/workflow/frontend.md)
