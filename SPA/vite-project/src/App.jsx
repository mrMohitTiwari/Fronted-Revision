import { useContext, useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";


function App() {

    return <div>
        <RecoilRoot>
            <Count />
        </RecoilRoot>
    </div>

}

function Count() {
    return (<>
        <CountRender />
        <Buttons />
        
    </>)
}

function CountRender() {
    // it just needs the value of count 
    const count = useRecoilValue(countAtom)
    return <div>
        {count}
        <EvenSelector/>
    </div>
    
}
function EvenSelector()
{
    const isEven = useRecoilValue(evenSelector);
    return (<div>
        {isEven?"it is even":null}
    </div>)
}
function Buttons() {

    // const [count, setCount] = useRecoilState(countAtom) it does not need this count it makes it rerender 
    const setCount = useSetRecoilState(countAtom)
    return <div>
        <button onClick={() => setCount(c=>c+1)}>Increase</button>
        <button onClick={() => setCount(c=>c - 1)}>Decrese</button>
    </div>
}
export default App