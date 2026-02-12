const express = require("express");
const { createTodo, updateTodo } = require("./types");
const {todo} = require("./db");
const { describe } = require("zod/v4/core");
const app = express()
app.use(express.json())

// creating routes
// creating a new todo
app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you have sent a wrong inputs"
        })
        return;
    }
    // put it in mongo db
// awaiting it as db maybe Down
await todo.create({
    title:createPayload.title,
    description:createPayload.description,
    completed:false
})
res.json({
    msg:"todo added sucessfully"
})

})


app.get("/todos",async (req, res) => {
// now getting data from the databse
const todos = await todo.find( );
// if we do 
//like this const todos =todo.find() and the print it It will return a promise
res.json({
    todos
})
})
// marking a todo completed
app.put("/completed", async (req, res) => {
    const updatePaylod = req.body;
    const parsedPayload = updateTodo.safeParse(updatePaylod);
    if (!parsedPayload.success) {

        res.status(411).json({
            msg: "you have sent a wrong inputs"
        })
        return;
        // updating the todo

          await todo.update(
            {
                // why _id any entry in the table uniquely identified by_
                _id:req.body.id
            },
            {
                completed:true
            }
          )
          res.json({
            msg:"todo marked as completed"
          })
    }
})