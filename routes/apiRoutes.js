const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');


let notes = JSON.parse(fs.readFileSync(path.join(__dirname + '/../db/db.json')));
// Connecting notes data set

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
        let newNote = req.body;
        
        newNote.id = uuidv4();
        notes.push(newNote);
        fs.writeFileSync(path.join(__dirname + '/../db/db.json'), JSON.stringify(notes));
        res.json(notes);
        console.log(notes);
    });

    app.delete("/api/notes/:id" , (req, res) => {
        // delete the array of data
        let notesID = req.params.id;
        notes = notes.filter(note => {
            return note.id !== notesID;
        });
        fs.writeFileSync(path.join(__dirname + '/../db/db.json'), JSON.stringify(notes));
        console.log('note deleted');
        console.log(req.params.id);  
        res.json({message: `Added ${notesID} has been deleted`});
    });
}


