# my-carbon-footprint

This project was bootstrapped with Create React App.

**About the project**

DB schema: https://app.dbdesigner.net/designer/schema/363622

API routes: https://docs.google.com/document/d/1vJalogZa-6Q7tKmBBl9FB6PN-G7wLN7no_GhkToEg0Q/edit?usp=sharing

List of Qs: https://docs.google.com/document/d/1ZTYakkZIUfwUSmGNhCPCb4o6KsNAW3DtsWS9eN-LI9A/edit?usp=sharing

BrighterPlanet API Models: http://impact.brighterplanet.com/models

**Technologies used:**

React.js
Express.js
Bootstrap
MySQL

**Dependencies**

Run yarn or npm install on root folder to install dependencies related to Express.

cd client and run yarn install dependencies related to React.

**Run Your Development Servers**

Run yarn start in project directory to start the Express server on port 5000
cd client and run yarn start to start client server in development mode with hot reloading in port 3000.
Client is configured so all API calls will be proxied to port 5000 for a smoother development experience. Yay!
You can test your client app in http://localhost:3000
You can test your API in http://localhost:5000/api

### Database Prep

Create `.env` file in project directory and add

```
DB_NAME=questions
DB_PASS=YOUR_PASSWORD
```

(replace `YOUR_PASSWORD` with your actual password)

Type `mysql -u root -p` to access the MySQL CLI using your password.

In the MySQL CLI, type `create database questions;` to create a database in MySQL.

### Migration

Type: npm run migrate in the root folder
then type: npm run questions
then type: npm run options

My seed file is broken down into 2 so that's why it's separate commands for each of the seed files
