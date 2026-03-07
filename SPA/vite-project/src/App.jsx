import React from "react"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import './App.css'
const   Dashboard =  React.lazy(() => import('./Pages/dashboard'))
import { Landing } from './Pages/landing'

function App() {

  return (
    <div>
     
    <BrowserRouter>
    <AppBar/>
   <Routes>

      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/" element={<Landing/>}/>
   </Routes>
    </BrowserRouter>
    </div>
  )
}
function AppBar()
{
  // now we have defined navigation hook inside a component which is inside a browser component
const navigate = useNavigate()

  return (
    <>
     <div style={{background:"black",color:"white"}}>
        Top level div
        {/* adding two buttons */}
        <button onClick={()=>{
          // window.location.href = '/'
          navigate("/");
        }}>Landing Page</button>
        <br />
         <button onClick={()=>{
          // window.location.href = '/dashboard'
          navigate("/dashboard")
        }}>Dashboard Page</button>

      </div>
    </>
  )
}
export default App
