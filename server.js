const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing - same as student example
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// NOTES data




// setting up the routes for index.html and notes.html

require("./routes/apiRoutes");
require("./routes/htmlRoutes");

//  setting up the listener

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
})

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

// app.get("/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "notes.html"));
// });
