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

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});

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

app.put('/', (req, res) => {
    res.send("PUT Request Called")
});

app.post('/notes', (req, res) => {
    const newNote = {
        note: request.body.note,
        autor: request.body.autor,
        date: response.sendDate,
    }
});

app.delete('/', (req, res) => {
    res.send("DELETE Request Called")
});