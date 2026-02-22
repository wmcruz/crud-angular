# REST API with Spring Boot and Angular

![Build](https://github.com/loiane/crud-angular/actions/workflows/node.js.yml/badge.svg?branch=master)

CRUD Angular + Spring course teacher Loiane. [Repo](https://github.com/loiane/crud-angular-spring/)

This is a demonstration project on how to create a CRUD application in Angular.

## 💻 Tecnologies
- Angular v17
- Angular Material
- Node 18.20.8
- Karma + Jasmine (front-end tests)

## ⌨️ Editor / IDE
- [IntelliJ](https://www.jetbrains.com/idea/download)
- [VsCode](https://code.visualstudio.com/download)

## Some functionalities available in the front end

- ✅ Angular Standalone components (Angular v16+)
- ✅ Angular Material components
- ✅ List of all courses with pagination
- ✅ Form to update/create courses with lessons (has-many - FormArray)
- ✅ View only screen
- ✅ TypedForms (Angular v14+)
- ✅ Presentational x Smart Components
- 🚧 Unit and Integration tests for components, services, pipes, guards

## Screenshots

Main Page with Pagination

<p align="center">
  <img src="./docs/main.jpeg" alt="Main Page" width="100%">
</p>

Form with One to Many (Course-Lessons)

<p align="center">
  <img src="./docs/form.jpeg" alt="Form Page" width="100%">
</p>

View Page with YouTube Player

<p align="center">
  <img src="./docs/view.jpeg" alt="View Page" width="100%">
</p>

## ❗️Executing the code locally

### Executing the back-end

You need to have Java and Maven installed and configured locally.

Open the project [crud-spring](https://github.com/wmcruz/crud-spring) project in your favorite IDE as a Maven project and execute it as Spring Boot application.

### Executing the front-end

You need to have Node.js 18.20.8 / NPM installed locally.

1. Install all the required dependencies:

```
npm install
```

2. Execute the project:

```
npm run start
```

This command will run the Angular project with a proxy to the Java server, without requiring CORS.

Open your browser and access **http://localhost:4200** (Angular default port).

#### Upgrading Angular

```
ng update
```

Then

```
ng update @angular/cli @angular/core @angular/cdk @angular/material @angular/youtube-player --force
```
