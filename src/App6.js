import React, {useState} from 'react';

function Example2(){
   const [age,setAge] = useState(18); //通过useState的顺序记住
   const [sex,setSex] = useState('male'); //useState不能存在于条件判断语句中
   const [job,setJob] = useState('software engineer');
   return(
       <div>
         <p> 张红伟 {age}岁</p>
         <p> 张红伟 性别{sex}</p>
         <p> 张红伟 工作{job}</p>
       </div>
   ) 
}

export default Example2;