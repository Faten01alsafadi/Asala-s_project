
import style from './Button.module.css'
   
function Button({title, className}) {
   
  return ( 
    <div>
      <button className={style[className] }>{title}</button>
    </div>
  )
}   

export default Button