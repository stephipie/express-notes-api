const express = require('express');
const app = express();
const port = process.env.NOTES_APP_PORT || 8080;

//Middleware json-Format
app.use(express.json());

let notes = [
    {
        id: 1,
        note: "My new Note",
        autor: "Max Mustermann",
        date: "2025-01-15"
    }
]


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/notes', (req, res) => {
    res.json(notes);
});

app.get('/notes/:id', (req, res) => {
    const note = notes.find(note => note.id === parseInt(req.params.id));
    console.log(typeof(note.id));
    res.json(note);
});

app.put('/notes/:id', (req, res) => {
    console.log(req.params.id)
    const index = notes.findIndex(note => note.id === parseInt(req.params.id));
    console.log(index)
    if (index === -1) {
        res.status(404).send("Index not found")
    };
    const updatedNote = {
        id: req.params.id,
        note: req.body.note,
        autor: req.body.autor,
        date: new Date(),
    }
    notes[index] = updatedNote
    res.send(notes)
});

app.post('/notes', (req, res) => {
    const lastNoteId = parseInt(notes[notes.length-1].id);
    const newNote = {
        id: lastNoteId +1,
        note: req.body.note,
        autor: req.body.autor,
        date: new Date(),
    }
    notes.push(newNote);
    res.send(notes);
});

app.delete('/notes/:id', (req, res) => {
    const note = notes.find(note => note.id === parseInt(req.params.id));
    // Check if ID exists
    if (!note)
        return res.status(404).send("ID not found");
    // Remove ID from the array
    notes.pop(note.id);
    res.send(notes)
});

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});