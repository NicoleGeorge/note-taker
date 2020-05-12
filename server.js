// Express to run on server and routes
const express = require("express");
// * Dependencies * //
const bodyParser = require('body-parser')

// Start up the app
const app = express();
// Setting up the port environment - local & deployment via Heroku
const PORT = process.env.PORT || 3000;

// * Middleware * //
// Configuring Express to handle data parsing - using body-parser as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Initialise the main project folder
app.use(express.static('public'));

// Cors for cross origin allowance - allows the browser and server to talk to each other
// without any security interruptions.
const cors = require('cors');
app.use(cors());





// NOTES data - testing connectivity
// app.get("/", function(req, res) {
//   res.send("<h1>Hello</h1>");
// });

// setting up the routes for index.html and notes.html

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//  setting up the server
//  callback added to debug
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

