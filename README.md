### Project description

This is the back-end server and database ORM for my mock project for the Angular Course at Softuni, client located [here](https://github.com/EmilAvramov/angular-defense-client). The server accepts requests from REST practices and sits between the Angular client and the database.

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

### Credits

Thanks to [ceo-py](https://github.com/ceo-py) for assistance with the Python script

### Architecture
- To be added later
