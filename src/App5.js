import React, {useState} from 'react';

function Example(){
   const [count , setCount] = useState(0); //通过useState的顺序记住
   return(
       <div>
           <p>You clicked {count} times</p>
           <button onClick = {()=>{setCount(count+1)}}>Click</button>
       </div>
   ) 
}

export default Example;