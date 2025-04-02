# How to integrate yFiles into a React application

This is a step-by-step description of how to add a yFiles graph component to a basic React application.

TL;DR Add `yfiles` as a dependency in the `package.json`,
[include your license](https://docs.yworks.com/yfileshtml/#/dguide/licensing#_general_concept),
and start importing yFiles classes in your project.

## Create a `create vite` application

At first, create a basic `create vite` app by running `> npm create vite@latest`, e.g., with
the following options:

- `Project name:` yfiles-react-integration-basic
- `Select framework:` React
- `Select variant:` TypeScript

## Add yFiles as a dependency

Adding yFiles as a dependency is almost as easy as installing an external library from the npm registry:

1. Add yFiles for HTML as npm dependency to the created project, for example, like this:

   ```
   "dependencies": {
     ...
     "@yfiles/yfiles": "../yFiles-for-HTML-Complete-3.0.0.1-Evaluation/lib/yfiles-30.0.1+eval-dev.tgz"
   },
   ```

2. Install the newly added dependency with `npm install`.

3. Include your yFiles license by copying the `license.json` file into your project. For more options,
   see the [developer's guide](https://docs.yworks.com/yfileshtml/#/dguide/licensing#_general_concept)

After installing the dependency, you can import classes from `yfiles` in your project. Since yFiles
is installed as proper npm dependency, IDEs provide full code-completion and automatic imports out
of the box to easily work with the library.

## Integrate a basic yFiles graph component

With the yFiles dependency, you can easily create a new React component that contains a yFiles GraphComponent.

1. Create a new `ReactGraphComponent.tsx` file in `/src/components` which instantiates a new yFiles GraphComponent
   with editing capabilities and a basic sample graph.

   Note how the yFiles GraphComponent is added to the DOM by providing a reference to an empty `div`
   element in which it is supposed to be created.

   See the contents of `/src/components/ReactGraphComponent.tsx` in this repository for the full implementation.

   Make sure to configure your license data as described above.

2. Afterward, just add the new React component to the `App.tsx`.

And that's it. Run `npm run dev` to serve the application at [http://localhost:5173/](http://localhost:5173/) with a basic yFiles component.

## Development Mode

This project uses the yFiles development library from the yFiles package. The development library
adds additional type runtime checks to yFiles related method calls and yields readable exception
messages to identify problems in JavaScript code more easily.
For more details, see the [Development Mode section](http://docs.yworks.com/yfileshtml/#/dguide/yfiles_development_mode).

Please note that these additional checks slightly affect the performance of the application,
therefore it should only be used during development.
See also [Preparing the Development Mode Library for Production](https://docs.yworks.com/yfileshtml/#/dguide/deployment#dev-deployment)
in Webpack to learn how to switch between development and production mode.
