const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing - same as student example
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// NOTES data

// setting up the routes for index.html and notes.html

require("./routes/apiRoutes");
require("./routes/htmlRoutes");

//  setting up the listener

app.listen(PORT, function () {
  console.log(`App listening on PORT: ${PORT}`);
});

