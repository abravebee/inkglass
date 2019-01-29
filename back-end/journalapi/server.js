const express = require('express');
const bodyParser = require('body-parser');

//Import routes for journal entries
const journal = require('./routes/product');

//Initialize express app
const app = express();

//Connecting app to remote database
//Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://testuser:test123@ds245082.mlab.com:45082/entries';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));