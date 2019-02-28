const express = require("express");
const bodyParser = require("body-parser");

//Import routes
const users = require("./routes/users");
const entries = require("./routes/entries");

//Initialize express app
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

//Routes
app.use("/users", users);
app.use("/entries", entries);

app.get('/test', (req, res) => {

  res.json(`Server up.`)
})

//Port
let port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log(`\n=== Server Running on Port ${port} ===\n`);
});
