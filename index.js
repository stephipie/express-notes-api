const express = require('express');
const app = express();
const port = 8080;

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
    const note = notes.find(note => note.id == req.params.id);
    res.json(note);
});

app.put('/notes/:id', (req, res) => {
    res.send("PUT Request Called")
});

app.post('/notes', (req, res) => {
    const newNote = {
        id: notes.length +1,
        note: req.body.note,
        autor: req.body.autor,
        date: new Date(),
    }
    notes.push(newNote);
    res.send(notes);
});

app.delete('/notes/:id', (req, res) => {
    const note = notes.find(note => note.id == req.params.id);
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