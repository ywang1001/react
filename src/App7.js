import React,{useState, useEffect} from 'react';

function App7(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>{count}</p>
             <button onClick = {()=>{
                 setCount(count+1)
             }}>+</button>
             <button onClick = {()=>{
                 setCount(count-1)
             }}>-</button>
        </div>
    )
}

export default App7;