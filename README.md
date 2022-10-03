### Project description

This is the back-end server and database ORM for my mock project for the Angular Course at Softuni, client located [here](https://github.com/EmilAvramov/angular-defense-client). The server accepts REST requests and sits between the Angular client and the database. Server works with JSON.

Engine used is Express. Controllers handle the different endpoints and call on services to perform database operations via Sequelize's ORM for PostgreSQL. Upon first run, the ORM will create the database and create the necessary relationships. Different (mostly bare-essential) middleware are attached to the server.

### Technologies used

- Front-end - [Details](https://github.com/EmilAvramov/angular-defense-client)
- Back-end - Javascript (Typescript), Sequelize ORM for PostreSQL, deployed via AWS CodeBuild
- Database Hosting - PostgreSQL hosted on AWS-RDS
- Server Hosting - Hosted via AWS Beanstalk, endpoint: <http://node-typescript.eu-west-1.elasticbeanstalk.com>
- Middlewares - helmet, compression, cors
- Frameworks/Libraries
  - Express
  - Sequelize ORM
  - bcrypt
  - jsonwebtoken
  - axios (pulling some data dynamically from API)
  - nodemon (for running locally)

### Setup

NodeJS and Python 3.9 are necessary. To run the server locally, you will need a PostgreSQL server running locally. Create an .env file in the root dir and add your server configuration as per the src/config/database.ts naming conventions.

To run the project locally, you will need the back-end located [here](https://github.com/EmilAvramov/angular-defense-server), as well as a PostgreSQL database to hook the back-end to, and run that one locally as well in parallel. NodeJS is necessary. Steps to follow for front-end:

- Install NodeJS (v16+)
- Install Python (v3.9+)
- Run ```npm i```
- (Optional, loads device data into the DB) Run ```npm run load``` ***
- Run ```npm run dev:ts```
- The server and database should now be up at the port of your choosing

*** This will pull data from the external API via Python workers and will populate the JSON files which will be generated in databaseLoad/rawData. The service will then clean the data and will load it into the database via Sequelize. Do NOTE that pulling the data from the API is a very time consuming processing, taking between 6 and 8 hours due to the volume of data and the endpoint needing requests to be done 1 by 1. The Python script will do this until all data is exhausted.

To host in the cloud, you will need an AWS-RDS hosted PostreSQL server and a CodeBuild project. You can deploy a pipeline from this repository directly once you have everything else configured. If using with the Angular client, the Angular client will also need your server endpoint to function.

### Endpoints

- /data
  - GET /health -> server status
  - GET /recommended -> new/recommended devices
  - POST /news | with ```route:search``` and ```query``` in body -> news on device query
- /device
  - POST /list | optionally with ```limit``` and ```offset``` in body -> raw device data
  - POST /list/search | optionally with ```query```, ```limit``` and ```offset``` -> queried device data
- /postings
  - POST /list | optionally with ```limit``` and ```offset``` in body -> raw postings data
  - POST /list/search | optionally with ```query```, ```limit``` and ```offset``` -> queried postings data
  - GET /user/:id | ```user ID``` in params -> postings for specific user
  - POST /create | with ```posting payload``` in body -> create new posting
  - ** PUT /edit/:id | ```posting ID``` in params with ```price``` and ```comments``` in body -> edits specific posting
  - ** DELETE /delete/:id | ```posting ID``` in params -> deletes specific posting
- /users
  - POST /register | with ```register payload``` -> registers new user
  - POST /login | with ```login payload``` -> logs user in
  - POST /logout | with ```accessToken``` in body -> logs user out
  - POST /validate | with ```token``` in body -> validates user token
  - ** PATCH /edit/details/:id | ```user ID``` in params and ```profile payload``` in body -> changes user details
  - ** PATCH /edit/password/:id | ```user ID``` in params and ```password``` in body -> changes user password
  - ** DELETE /delete/:id | ```user ID``` in params -> deletes specific user

** Token of active user (if any) will be matched against back-end data for validation.

### Credits

Thanks to [ceo-py](https://github.com/ceo-py) for assistance with the Python script

### Architecture

!['diagram'](/ServerDiagram.png)
