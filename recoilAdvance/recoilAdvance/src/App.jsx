import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { AllNotificationSelector, myMessageAtom, myNetworkAtom, NotificationAtom } from './atoms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
    
      
    </>
  )
}
function MainApp()
{
    const Notification = useRecoilValue(NotificationAtom)
    const myMessage = useRecoilValue(myMessageAtom)
    const myNetwork = useRecoilValue(myNetworkAtom)
    const allNotification = useRecoilValue(AllNotificationSelector)
    // we can also use use memo (but recoil has seperate thing for it as selector)
    // const totalNotification = useMemo(()=>{
    //   return Notification+ myMessage + myNetwork
    // },[Notification,myMessage,myNetwork])
  return (
    <div>
      <button>Home</button>
      <button>My Network ({myNetwork})</button>
      <button>Messages ({myMessage>100?"99+":myMessage})</button>
      <button>Notification ({Notification})</button>
      <button>Me({allNotification})</button>
    </div>
  )
}
export default App
