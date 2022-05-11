# vuejs-course

## About The Project
**Note**: This project is a non-commercial application based on author personal interests of technologies.

Project represents film searching platform.

### Built With
* [VueJS 2](https://vuejs.org)
* [Vue CLI 4](https://cli.vuejs.org)
* [Vue Router 3](https://v3.router.vuejs.org)
* [Vuex 3](https://v3.vuex.vuejs.org)
* [Vue Resource](https://github.com/pagekit/vue-resource)
* [Typescript](https://www.typescriptlang.org/)
* [Storybook](https://storybook.js.org/docs/vue/get-started/introduction)
* [Jest](https://jestjs.io/)
* [Cypress](https://www.cypress.io/)

### Prerequisites
* [NodeJS](https://nodejs.org/en/) - later than 14 version;
* [Yarn](https://yarnpkg.com/)
* [Vue CLI](https://cli.vuejs.org) - optional, included in **package.json** dev dependencies;

### Installation

1. Clone repository
   ```sh
   git clone https://github.com/dotnet-fizzyy/VueJS-course.git
   ```
2. Move to root directory of project (with **package.json**)
3. Install all required dependencies 
   ```
   yarn install
   ```
4. After dependencies installation, run the application
   ```
   yarn serve
   ```
5. Visit url `http://localhost:8080/`, you should be able to see working application

### Testing

Application supports the following types of tests:
* Unit
* Integration
* e2e

To be able to run _Unit_ or _Integration_ tests, run the following command
```
yarn test:unit
```

To be able to run _e2e_ tests, run the following command
```
yarn test:e2e
```

Application also supports _Storybook_ components development. To be able to run it, run the following command
```
yarn storybook:serve
```
 
## Git workflow
Flow steps:
1. New code:
    * Create branch (with **feature** prefix)
    * Make changes. Make sure that linter rules are satisfied and detailed description is provided in commits.
    * Push changes.
    * Open pull request. Included full description or develop feature.
    * Code review. Assign author of repository or contributor.
    * Merging code. Feature branch will be removed automatically.
2. Feature branch: What for branch is used, what kind of feature was added.
3. Master: The application base branch, all features should be merged into it.

Git commit template message
```
feature: message description
```

## Contact
dotnet-fizzyy | [GitHub](https://github.com/dotnet-fizzyy) | ezzyfizzy27@gmail.com
