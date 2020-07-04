import React, { useState } from 'react'

function HookConterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const IncrementFive = () => {
        for(let i = 0; i<5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            
        <button onClick={()=> setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increment</button>
        <button onClick={()=>setCount(prevCount => prevCount - 1)}>Drecement</button>
        <button onClick={()=>IncrementFive}>Increment5</button>
        <p>{count}</p>
        </div>
    )
}

export default HookConterTwo
