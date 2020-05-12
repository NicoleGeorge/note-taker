const fs = require("fs");
const path = require("path");

let notes = JSON.parse(fs.readFileSync(path.join(__dirname + '/../db/db.json')));
// Connecting notes data set

// const textArea = require('./data');

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        console.log(notes);
        res.json(notes);
    });

    app.get("/notes/savedNotesData", (req, res) => {
        if (!notes) {
            res.status(404).json({ mesage: "no notes available."});
        }
        res.json(savedNotesData);
     });

     app.get("/notes/savedNotesData:id", (req, res) => {
        let notesData = req.params.id;

        let notes = savedNotesData.filter(notes => {
            return notes.id == notesData;
        });

        if (!notes) {
            res.status(404).json({message: "no notes available."});
        }

        res.json(savedNotesData[0]);
     });

    app.post("/api/notes", (req, res) => {
        console.log(req.body);
        notes.push(req.body);
        res.json(notes);
           
    });

    // TODO: delete only one note at a time - so far all notes are deleted
    app.delete("/api/notes/:id" , (req, res) => {
        // delete the array of data

        let notesText = req.params.id;

        let note = notes.filter(note => {
            return note.id == notesText;
        })[0];

        const index = notes.indexOf(note);

        notes.splice(index, 1);

        console.log('note deleted');
        // res.send();
        console.log(req.params.id);  
        // notes.length = 0;
        res.json({message: `Added ${notesText} has been deleted`});
    });
}