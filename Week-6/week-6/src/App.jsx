  import { useEffect, useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import axios from "axios"
  import './App.css'

  function App() {
    const [todos, setTodos] = useState([])
    const [id,setId]=useState(1);
  useEffect(()=>{
  axios.get("http://sum-server.100xdevs.com/todos").then(res=>{
  setTodos(res.data.todos)
  }).catch(err=>console.log("data fetching failed"))
  },[])
    return (
      <>
      {/* this will search for all the todos */}
    {/* {  todos.map((todo)=>
          <Todo title={todo.title} description={todo.description} key={todo+1}/>
      )} */}
      {/* now searching for the specific todo using query params
       */}
       <button onClick={()=>setId(1)}>1</button>
       <button onClick={()=>setId(2)}>2</button>
       
       <Todo id={id}/>
      </>
    )
  }
  function Todo({id})
  {
    // will have a state for a particular todo
      const [todo,settodo] = useState(-1);
      // using sideffect for searching for the todo
      useEffect(()=>{
          axios.get(`http://sum-server.100xdevs.com/todo?id=${id}`).then(res=>settodo(res.data.todo)).catch(()=>console.log("error while fetching the id"));
      },[id ])
    return (<>
      <h1>
        {todo.title}
      </h1>
      <p>
        
          {todo.description}
        
      </p>

    </>)
  }

  export default App
  // wroking with axios