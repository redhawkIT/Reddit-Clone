# Reddit Viewer

A React/Redux UI using the Reddit API

See Live [Reddit Viewer](https://slider-puzzle.herokuapp.com/)

## Tech

* [React](https://facebook.github.io/react/docs/getting-started.html) - Open-source JavaScript library providing a view for data rendered as HTML
* [Redux](https://github.com/reactjs/redux) - Predictable state container for JavaScript apps
* [React Router](https://github.com/ReactTraining/react-router/tree/master/docs) - React Router is a complete routing library for React. React Router keeps your UI in sync with the URL
* [Reddit API](https://www.reddit.com/dev/api/) - Api Documentation
* [Heroku](https://devcenter.heroku.com/categories/reference) - Create, deploy, and manage apps in the cloud
* [Material UI](http://www.material-ui.com/) - Google's material design UI components built with React.
* [redux-promise](redux-promise)
* [Axios](axios)
* [A Guide For Building A React Redux CRUD App](https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-app-7fe0b8943d0f#.h1ph3lgf6)

### Dealing With Async Actions
components should dispatch up to 4 actions
“FETCH_OBJ”(for loading)
“FETCH_OBJ_SUCCESS”
“FETCH_OBJ_FAILURE”
OBJ_RESET”(to cleanup dirty previous state).

## Installation


Requires [Node.js](https://nodejs.org/) v6+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
$ npm start
```

![http://i.imgur.com/MX6DzQ1.gif](http://i.imgur.com/MX6DzQ1.gif)
