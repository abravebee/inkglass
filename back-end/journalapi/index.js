//== Dependencies ==//
const express = require("express");
const bodyParser = require("body-parser");

//== Initialize Express App ==//
const app = express();

//Connecting app to remote database
//Set up mongoose connection
const mongoose = require("mongoose");
let dev_db_url = "mongodb://testuser:test123@ds245082.mlab.com:45082/entries";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//== Routes ==//
//Import routes
const users = require("./routes/users");
const entries = require("./routes/entries");

//Use routes
app.use("/journalapi/users", users);
app.use("/journalapi/entries", entries);

app.get('/journalapi', (req, res) => {
  res.json(`Server up.`)
})

//Port
let port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log(`\n=== Server Running on Port ${port} ===\n`);
});

//app.listen()
