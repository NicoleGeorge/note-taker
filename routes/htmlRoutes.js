const path = require("path");

// routing

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./public/index.html"));
    });
    
     app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "./public/notes.html"));
    });

      // If no corresponding route is located - user will return home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "./public/index.html"));
    });
};

    