# TodoApp

## deployed at: https://todo-app-3ad44.web.app/todos

## dependencies
npm install --save bootstrap jquery font-awesome

angular.json:
    "styles": [
                            "src/styles.scss",
                            "node_modules/bootstrap/dist/css/bootstrap.min.css",
                            "node_modules/font-awesome/css/font-awesome.min.css",
                        ],
    "scripts": [
                            "node_modules/jquery/dist/jquery.min.js",
                            "node_modules/bootstrap/dist/js/bootstrap.min.css"
                        ]
styles.scss:

@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~font-awesome/css/font-awesome.min.css";

## install dependencies for firebase

npm install --save firestore angularfire2
ng add @angular/fire
npm install firebase

in firebase:
project settings - under Your apps : Select a platform to get started: </>

copy and paste firebaseConfig object into environments folder/environment.ts:


export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBkznBx-nkTDLmdxXOJVnFzXrGDqShOYDY',
    authDomain: 'todo-app-3ad44.firebaseapp.com',
    databaseURL: 'https://todo-app-3ad44.firebaseio.com',
    projectId: 'todo-app-3ad44',
    storageBucket: 'todo-app-3ad44.appspot.com',
    messagingSenderId: '139964200771',
    appId: '1:139964200771:web:773ccb53da33fcbc35e1f6'
  }

};
- make sure you change double quotes to single quotes

copy paste the same object into environment.prod.ts:

export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: 'AIzaSyBkznBx-nkTDLmdxXOJVnFzXrGDqShOYDY',
    authDomain: 'todo-app-3ad44.firebaseapp.com',
    databaseURL: 'https://todo-app-3ad44.firebaseio.com',
    projectId: 'todo-app-3ad44',
    storageBucket: 'todo-app-3ad44.appspot.com',
    messagingSenderId: '139964200771',
    appId: '1:139964200771:web:773ccb53da33fcbc35e1f6'
  }
};


app.module.ts
1.  import AngularFireModule
2. import { environment } from "../environments/environment"
3. initialize app:
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'todo-app')
  ]
4. pass the name of the app 
5. import import {AngularFirestoreModule}  from 'angularfire2/firestore';

 imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'todo-app'),
    AngularFirestoreModule
  ]

in firebase: create cloud database and todos collection
- go on Develop/ Cloud firestore - Create database
- select test(30 days)
-select europea-west location
-start collection: todos
- autogenerate ID



## firebase with service
create a todo.model.ts and import it in service todo
    export interface Todo {
    id?: string,
    title: string,
    completed: boolean
}
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";


## Deploy to Firebase Hosting
Firebase/ Hosting/Get Started/

install globaly firebase-tool: 
npm install -g firebase-tools

if you're not logged in, login to your firebase account - the terminal will ask you to sign in to google. So you will pass firebase login in the terminal

 Initiate your project- by running this command from your app’s root directory: 
 firebase init

 ERROR FIX: if firebase: command not found
 alias firebase="`npm config get prefix`/bin/firebase"
then login
then firebase init

from the list of options, select Hosting - then space and enter
select Use existing project
 What do you want to use as your public directory? (public): dist 
 Configure as a single-page app (rewrite all urls to /index.html)? (y/N): y
 Set up automatic builds and deploys with GitHub? (y/N) n

 in angular.js make sure that "outputPath": "dist",
 "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "aot": true,
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
build the application
ng build --prod

deploy the application 
firebase deploy

## ################################################################

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## credit to Stefan Omerovic, Full Stack Web Developer and Instructor
 
