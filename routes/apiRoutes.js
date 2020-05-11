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
           
        // // save the req body to db.json
        // // notes.push()

        // // res.json(notes)

        // if (notesData.length < 40) {
        //     notesData.push(req.body);
        //     res.json(true);
        // }
        // else {
        //     savedNotesData.push(req.body);
        //     res.json(false);
        // }
    });

    app.delete("/api/notes/:id" , (req, res) => {
        // delete the arrays of data
        notesData.length = 0;
        savedNotesData.length = 0;

        res.json({ok: true});
    });
}