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
useEffect(()=>{
fetch("http://localhost:3033/todos")
      .then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
        console.log(json.todos);
      }).catch((err)=>console.log(err));
},[])

  return (  
<>
<CreateTodo></CreateTodo>
<Todos todos={todos}> </Todos>
</>)
}

export default App
