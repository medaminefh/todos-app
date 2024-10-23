/* 
HTTP request methods =>>

GET => user is requesting some data from the server
POST => user is creating new data
PUT => user is updating some existing data
PATCH => user is requesting to update a small chunk of an existing data
DELETE => user is requesting to delete some data

*/

const express = require("express");

const app = express();
const fs = require("node:fs")
const PATH = './todos.json'

// This allow us to read the body from the request
app.use(express.json())


// Get all the todos from the todos.json file
const load_todos = () => {
    // check if the todos.json exists
    if(fs.existsSync(PATH)) {
        // read the data stored in the file
        const todos_data = fs.readFileSync(PATH) // buffer, json data
        return JSON.parse(todos_data)
    }
    return []
}

// write a function that create and store the todo in todos.json file
const save_new_todos = (todos) => {
    // [ {}, {}, {} ] => "[ {}, {}, {} ]"
    const oldTodos = load_todos()
    const allTodos = oldTodos.concat(todos)
    fs.writeFileSync(PATH, JSON.stringify(allTodos))
}

// GET req
app.get("/", (req, res) => {
	// http:localhost:8888/
	res.write("Hello world, this is from express!!");
	res.end();
});

// GET req /todos
app.get("/todos", (req, res) => {
    const todos = load_todos() // []
    return res.json(todos)
});


// POST req /todos
app.post("/todos", (req, res) => {
    console.log(req.body)
    save_new_todos(req.body)
    return res.json("Todos are saved!!")
})

// PUT req /todos/:id
app.put("/todos/:id", (req, res) => {
    const {id} = req.params
    const {title, done} = req.body
    const todos = load_todos()
    const newTodos = todos.map(todo => {
        if(todo.id == id) {
            return {...todo, title, done}
        }
        return todo
    })

    fs.writeFileSync(PATH, JSON.stringify(newTodos))
    return res.json(newTodos)
})


// Start listening to the PORT 8888
app.listen(8888, () => {
	console.log("The server is running 🚀");
});
