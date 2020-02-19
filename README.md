# Angularjs Starting Template

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
> `outputPath` has been changed within `angular.json`

## Start

Run `npm run start` to run the project as it would be on Jexia. The [`build`](##build) command is required to have been run first.
> See [troubleshooting](##Troubleshooting) if you are having browser issues.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
> These have not been fully implemented

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
> These have not been fully implemented

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Troubleshooting
If this program doesn't run on your local machine, you can edit the `dev` command within `package.json`, which looks like:
```
"dev": "http-server ./dist -a localhost -p 8080"
```
If will change the port from `8080` to another port such as `5678` which is normally free for use, you will be able to then visit this in the browser.

Another issue you may come across, such as "This page isn't working", you may need to access `http://localhost:8080/index.html` directly, instead of `http://localhost:8080`.