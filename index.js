// index.js
const express = require('express');
const app = express(); // create an express app
const port=3030;

//import todo.js
const todos = require('./todo');
console.log(todos)

// routes to get all todos
app.get('/api/todos', (req, res) => {
    res.status(200).json(todos);
})

//get single todo
app.get('/api/todos/:id', (req, res) => {
    const id = req.params.id;
    const todo = todos.find(todo => todo.id == id);
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json({success: true, data: todo});
})

// listen to a port
app.listen(port, () => {
    console.log(`😍😋😊listening on port and is working fine... http://localhost:${port}`); 
})