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
    console.log('server running at http://localhost:${port}');
});

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.get('/notes', (request, response) => {
    response.json(notes);
});

app.post('/notes', (request, response) => {
    const newNote = {
        note: request.body.note,
        autor: request.body.autor,
        date: response.sendDate,
    }
});