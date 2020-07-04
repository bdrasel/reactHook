import React, { useState } from 'react';

function HookCounter(){

    const[count, setCounter] = useState(100);
    
    return (
        <div>
            <button onClick={()=>setCounter(count + 1)}>Count</button>
            <p>{count}</p>
        </div>
    )
}

export default HookCounter;