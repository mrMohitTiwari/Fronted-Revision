import { useContext, useState } from "react";
import { CountContext } from "./context";

function App() {
    const [count, setCount] = useState(0);
    return <div>
        <CountContext.Provider value={count}>
            <Count count={count} setCount={setCount} />
        </CountContext.Provider>
    </div>

}
function Count({ count, setCount }) {
    return (<>
        <CountRender count={count} />
        <Buttons count={count} setCount={setCount} />
    </>)
}

function CountRender() {
const count = useContext(CountContext)
    return <div>
        {count}
    </div>
}
function Buttons({  setCount }) {
    const count = useContext(CountContext)
    return <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrese</button>
    </div>
}
export default App