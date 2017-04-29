This is a basic data visualizer built with React and Victory. To run it
locally, clone this repo, `npm install` its dependencies, and run
`webpack` before opening index.html. Site has only been tested in Chrome
and Opera.

All of the components, save one, are stateless functional components;
this is because this data set and the user interactions were relatively
easy to manage. For that same reason, no more sophisticated frontend
state management was done (using Redux, for example).

One basic integration test exists (run `npm test`) to make sure the main
App component will render.

Future steps include:

+ Adding tooltips to the employee area chart
+ Writing more granular tests to cover the app
