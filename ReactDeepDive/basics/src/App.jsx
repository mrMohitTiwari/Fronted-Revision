// Learning how to build wrapper class
 function App()
{
  return <>
  <Card>Hi I am f</Card>

  </>
}
function Card({children})
{
  return <div style={{border:"1px solid red"}}>
    {children}
  </div>
}

export default App
// in the children u can pass component or anything