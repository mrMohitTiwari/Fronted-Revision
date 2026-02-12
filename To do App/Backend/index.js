const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express()
app.use(express.json())

// creating routes
// creating a new todo
app.post('/todo', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you have sent a wrong inputs"
        })
        return;
    }
    // put it in mongo db
})


app.get("/todos", (req, res) => {

})
// marking a todo completed
app.put("/completed", (req, res) => {
    const updatePaylod = req.body;
    const parsedPayload = updateTodo.safeParse(updatePaylod);
    if (!parsedPayload.success) {

        res.status(411).json({
            msg: "you have sent a wrong inputs"
        })
        return;

    }
})