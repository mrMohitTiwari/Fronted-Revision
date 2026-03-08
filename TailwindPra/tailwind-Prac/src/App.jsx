import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  <h1>flex</h1>
    <div style={{display:"flex"}} >hi i am parent div 

      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
    </>
  )
}

export default App
