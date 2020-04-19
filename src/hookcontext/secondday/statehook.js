import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

export default function Counter(){
    const [count, setCount] = useState(1); //返回数组，第一个状态数据，第二个设置新的状态数据的函数
    const [name, setName] = useState('kxl');
   
    useEffect(()=>{
     const intervalId = setInterval(()=> {
         console.log('____');
         setCount(count => count+2);
         return () => {
            console.log('when willunmount execute, '); 
            clearInterval(intervalId)   
            console.log('clear interval donot work');
          };
     },1000)
    } ,[]);

    useEffect(() => {
       
    },[]);
   
    return(
        <div>
            <p>{count}</p>
            <p>{name}</p>
            <button onClick = {()=>setCount(count+1)}>+</button>
            <button onClick = {()=>setCount(count-1)}>-</button>
            
            Name: <input  value = {name} onChange = {(e)=>setName(e.target.value)}/>   
        
            <button onClick = {() => ReactDOM.unmountComponentAtNode(document.getElementById('root'))}>stop</button>
        </div>
    )
}