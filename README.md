# Arsty 

## Structure

| Codebase              |      Description          |
| :-------------------- | :-----------------------: |
| Frontend  |     React / Tailwind          |
  
## Getting Started
Make sure you have nodejs installed by running the following command:

```bash
node --version
```

If the output is not the version of your nodejs installation, install nodejs from [here](https://nodejs.org/en/download/)

Then install the dependencies after cloning the project _please use npm_:

```bash
npm install
```

## Start the server

Then, start up the application.

```bash
npm run dev
```

### **Building**

```bash
npm build
```
## Image Information
You can find the  images link in the src/images do not import any image (Links only)
## Setup your editor
We're using prettier for this project so make sure to install prettier plugin in your editor to be able to formart your code.
npm run prettier

## Contribute to our project
Clone or fork the repo.
Pull request should be made to the main branch and nowhere else!
Commit message must be descriptive. Example {commitType:} {commitDescription}

| Type     |                          | Description                                                                                                 |
|----------|--------------------------|-------------------------------------------------------------------------------------------------------------|
|   feat   | Features                 | A new feature                                                                                               |
|    fix   | Bug Fixes                | A bug fix                                                                                                   |
|   docs   | Documentation            | Documentation only changes                                                                                  |
|   style  | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| refactor | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |
|   perf   | Performance Improvements | A code change that improves performance                                                                     |
|   test   | Tests                    | Adding missing tests or correcting existing tests                                                           |
|   build  | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
|    ci    | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
|   chore  | Chores                   | Other changes that don't modify backend, frontend or test files                                                           |
|  revert  | Reverts                  | Reverts a previous commit                                                                                   |


> *Sample Commit Messages*
- `chore: Updated README file` := `chore` is used because the commit didn't make any changes to the backend, frontend or test folders in any way.
- `feat: Added plugin info endpoints` := `feat` is used here because the feature was non-existent before the commit.
