# Cypress Todo Demo

[Video Presentation from UCTech 2022](https://mediaspace.ucsd.edu/media/Automated+End-to-End+Website+Testing+with+Cypress/1_awj5vu5o/)

This repo is meant to demonstrate how to write different types of
[Cypress](https://www.cypress.io/) tests by testing the
[TodoMVC](http://todomvc.com) app.

Each testing lesson can be checked out as its own branch. So start in the
`test1` branch and work from there.

1. `test1` Setup - "Writing your first test"
2. `test2` Interacting with the Site - "Adding a task"
3. `test3` Writing Assertions - "Complete tasks"
4. `test4` Faking Data - "Intercept API request and replace with a fixture"
5. `test5` Stubbing Functions - "Stub the confirm() function"
6. `test6` Mobile and Desktop Resizing - "Viewport resizing"
7. `test7` Custom Commands - "Use a custom command to add a task"
8. `test8` Ensuring Accessibility - "Accessibility testing with Axe"
9. `test9` Automating with Continuous Integration - "Github Actions"

## Requirements

[Node.js](https://nodejs.org) is required. If using
[NVM](https://github.com/nvm-sh/nvm) you can run `$ nvm use` to automatically
switch to the correct version of Node.

## Installation

1. Install all Node packages including Cypress.

```shell
$ npm ci
```

2. Start the server so that the site can be viewed at: 
[http://127.0.0.1:8080](http://127.0.0.1:8080)

```shell
$ npm start
```



3. Open the Cypress GUI with another terminal window.

```shell
$ npm run cypress
```

## [TodoMVC](http://todomvc.com) • Vanilla ES6

> A port of the [Vanilla JS Example](http://todomvc.com/examples/vanillajs/),
> but translated into ES6, also known as ES2015.


### Credit

Created by [Luke Edwards](http://www.lukeed.com)
Refactored by [Aaron Muir Hamilton](https://github.com/xorgy)
