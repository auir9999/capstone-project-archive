## Back-End

The backend app is solely an API service. It only accepts incoming HTTP requests from the frontend app, processes them, accesses the database if needed, and returns data to the frontend app in HTTP responses. JSON format is used as the payload for both requests and responses.

The backend is served using Heroku's webpack for Node.js, and it is deployed as an app on Heroku. It uses Node.js (https://nodejs.org/en/) as the underlying runtime environment. Express.js is used as the web framework for API service. Express.js accepts a number of pre-defined routes, and has read/write access to a Mongodb database hosted on Atlas (https://www.mongodb.com/cloud/atlas).

## Front-End

Angular 5 (TypeScript) is used as the framework for frontend. Node.js is used as the underlying runtime environment. Alongside Angular 5, the website uses [Bootstrap 3.3](https://getbootstrap.com/docs/3.3/) to create a responsive experience. Moreover, the [JQuery](https://jquery.com/) library,  which is required by this version of Bootstrap, is used to simplify the coding of a number of AJAX calls. The front end is deployed as an app on Heroku.

## Developing Tools

This website is developed using [Visual Studio Code](https://code.visualstudio.com/) with Prettier extension for code linting. [Postman](https://www.postman.com/) was used to test a number of HTTP requests in order to decouple back-end and front-end tasks.
