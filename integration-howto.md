# How to integrate yFiles into a React application

This is a step-by-step description of how to add a yFiles graph component to a basic React application.

TL;DR Add yFiles as a dependency in the `package.json` and start importing yFiles classes in your project.

## Running the CLI

Run the create-react-app CLI with `> npx create-react-app yfiles-react-integration-basic` which scaffolds a basic React application.

## Add yFiles as a dependency

Adding yFiles as a dependency is as easy as installing an external library from the npm registry:

1. Add yFiles for HTML as npm dependency to the created project:

   - If you have a fresh yFiles for HTML package, you need to `npm pack` the library first by running `npm pack` in `<yfiles-package>/lib/es-module/`. This creates a tar-ball that can be installed as npm dependency in other projects. See also [Working with the yFiles npm Module](https://docs.yworks.com/yfileshtml/#/dguide/yfiles_npm_module#yfiles_npm_module).

     Note: This sample project runs `npm pack` as `preinstall` script in the `package.json`.

   - Afterwards, all you need to do is to reference the packed library in the `package.json` of the project as additional dependency:
     ```
     "dependencies": {
       ...
       "yfiles": "../yFiles-for-HTML-Complete-2.2.0.3-Evaluation/lib/es-modules/yfiles-22.0.3-eval.tgz"
     },
     ```

2. Now install the newly added dependency with `npm install`.

After installing the dependency, you can import classes from `yfiles` in your project. Since yFiles is installed as proper npm dependency, IDEs provide full code-completion and automatic imports out of the box to easily work with the library.

## Integrate a basic yFiles graph component

With the yFiles dependency, you can easily create a new Angular component that contains a yFiles GraphComponent.

1. Create a new `ReactGraphComponent.js` file in `/src/` which instantiates a new yFiles GraphComponent with editing capabilities and a basic sample graph.

   Note how the yFiles GraphComponent is added to the DOM by providing a reference to an empty `div` element in which it is supposed to be created.

   See the content of `/src/ReactGraphComponent.js` in this repository for the full implementation.

   There are two things to look out for:

   - Make sure to configure your `license.json` at the library.
   - Make sure to include `yfiles.css`, which is an integral part of the library. For example add `import 'yfiles/yfiles.css'` as in `ReactGraphComponent.js`.

2. Afterwards, just add the new React component to the `App.js`.

And that's it. Run `npm run start` to serve the application at [http://localhost:3000/](http://localhost:3000/) with a basic yFiles component.

## Enhanced development support with yfiles-typeinfo

This project also utilizes `yfiles-typeinfo.js` from the yFiles package (see index.html). `yfiles-typeinfo.js` adds additional type runtime checks to yFiles related method calls and yields readable exception messages to easier identify problem in JavaScript code. For more details see [Type Checking](https://docs.yworks.com/yfileshtml/#/dguide/DevelopmentSupport#DevelopmentSupport-Checks).

Please note that these additional checks increase the runtime of the application, therefore it should only be used during development and removed for actual deployment. See also [Including yfiles-typinfo.js](https://docs.yworks.com/yfileshtml/#/dguide/deployment_toolkits#_including_yfiles_typeinfo_js) in Webpack to learn how to load it conditionally for the development build.
