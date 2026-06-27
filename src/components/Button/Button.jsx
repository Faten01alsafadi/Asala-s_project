
import { useState } from 'react'
import style from './Button.module.css'
   
function Button({className, title}) {
   const [count,setCount]=useState(0)
   console.log(count);
  

   
  return ( 
    <div>
      <button onClick={()=>{setCount(count+1)}} className={style[className] }>{title}</button>
    
    </div>
  )
}   

export default Button