const express = require('express');
const app = express();
const port = 8080;

//Middleware json-Format
app.use(express.json());

let notes = [
    {
        note: "My new Note",
        autor: "Max Mustermann",
        date: "2025-01-15"
    }
]

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    response.send('Hello World');
});

app.get('/notes', (req, res) => {
    response.json(notes);
});

app.get('notes/:id', (req, res) => {
    response.json(notes);
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