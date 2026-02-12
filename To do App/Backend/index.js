const express =require("express")
const app = express()
app.use(express.json())

// creating routes
// creating a new todo
app.post('/todo',(req,res)=>{})


app.get("/todos",(req,res)=>{

})
// marking a todo completed
app.put("/completed",(req,res)=>{})