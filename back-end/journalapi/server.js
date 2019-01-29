const express = require('express');
const bodyParser = require('body-parser');

//Import routes for journal entries
const journal = require('./routes/product');

//Initialize express app
const app = express();