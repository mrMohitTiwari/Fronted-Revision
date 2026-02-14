import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './Components/createTodo'
import { Todos } from './Components/Todos'
import { useEffect } from 'react'


function App() {
  // state for any new input

  const [todos, setTodos] = useState([])
// fetching the todos from the backend
// setting it for every 20 second 
useEffect(()=>{
  const fetchTodos=()=>fetch("http://localhost:3033/todos").then(async (res)=>{
    const json = await res.json()
    setTodos(json.todos)

  }).catch(err=>console.log(err))
fetchTodos();
// fetch every 20s 
const interval = setInterval(fetchTodos,20000)
// memory cleanup
return () =>clearInterval(interval)
},[])

  return (  
<>
<CreateTodo></CreateTodo>
<Todos todos={todos}> </Todos>
</>)
}

export default App
