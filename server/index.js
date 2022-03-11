import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

// component 
import Connection from './database/db.js';
import route from './router/Router.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',route);

const PORT = 8000; 
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const databaseName = process.env.PROJECT_DATABASE;

Connection(username,password, databaseName);
app.listen(PORT, () => console.log(`Server is running sucessfully on port ${PORT}`));