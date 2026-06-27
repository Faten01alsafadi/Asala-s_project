

import styles from "./CountBtn.module.css"

function CountBtn({setCount,count}) {
 
console.log(count);
//  const [count,setCount]=useState(0);

//   return (
//     <div className={styles.btn}>
//         <button onClick={()=>{setCount(prev +1)}}>
//          ++
//         </button>
      
//     </div>
//   )
  return (
    <div className={styles.btn}>
        <button onClick={()=>{setCount(count +1)}}>
         ++
        </button>
      
    </div>
  )
}

export default CountBtn
