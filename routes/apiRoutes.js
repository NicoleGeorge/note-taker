const fs = require("fs");
const path = require("path");

const notes = JSON.parse(fs.readFileSync(path.join(__dirname + '/../db/db.json')));

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        console.log(notes);
        res.json(notes);
    });

    app.get("/notes/savedNotesData", (req, res) => {
        res.json(savedNotesData);
     });

    app.post("/api/notes", (req, res) => {
        console.log(req.body);
        notes.push(req.body);
        res.json(notes);
           
    });

    app.delete("/api/notes/:id" , (req, res) => {
        // delete the array of data
        console.log('note deleted');
        // res.send();
        notes.length = 0;
        res.json({ok: true});
    });
}