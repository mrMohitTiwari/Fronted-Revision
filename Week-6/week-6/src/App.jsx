import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'

function App() {
  const [todos, setTodos] = useState(0)
useEffect(()=>{
axios.get("http://sum-server.100xdevs.com/todos").then(res=>{
 setTodos(res.data.todos)
})
},[])
  return (
    <>
  {  todos.map((todo)=>{
        <Todos title={todo.title} description={todo.description}/>
    })}
    </>
  )
}
function Todos({title,description})
{
  return (<>
  <h1>{title}</h1>
  <p>{description}</p>

  </>)
}

export default App
// wroking with axios