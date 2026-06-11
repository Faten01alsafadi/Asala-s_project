import style from "./Nav.module.css"
import logo from "../../assets/images/logo-thelaw-5.png"
import Button from "../../components/Button/Button"
 
 function Nav() { 
   return ( 
     <div>
        <div className={style.nav}>  
            <div>< img className={style.navImg} src={logo} alt="logo" /></div>    
            <ul className={style.navList}>
                <li><a href="">home</a></li>
                 <li><a href="">about</a></li>
                  <li><a href="">contact</a></li>
            </ul>
           <Button title="Sign up" className="navBtn"/>
        </div>
     </div>
   
   ) 
 }

 export default Nav
 