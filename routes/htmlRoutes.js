const path = require("path");

// routing

module.exports = function(app) {

    app.get("/", (req, res) => {
        console.log(__dirname);
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    });
    
     app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/notes.html"));
    });

      // If no corresponding route is located - user will return home
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    });
};

    