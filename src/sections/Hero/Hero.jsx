import { useState } from "react";
import Button from "../../components/Button/Button"
import CountBtn from "../../components/CountBtn/CountBtn"


function Hero() {
  const [count,setCount]=useState(0);
  return (
    <div>
      <h1>hero</h1>
      <p>{count}</p>
      <Button title="Get Started" className="heroBtn" />
      <CountBtn setCount={setCount} count={count}/>
    </div>
  )
}

export default Hero
