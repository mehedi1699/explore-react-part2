import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 = ()=>{
    alert('button2 click')
  }

const addToFive = (num) =>{
  alert(num+5);
}


  return (
    <>
      <h3>React Core Concept 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>{ alert('third button clicked')}}>Click 3</button>
      {/* vajaila */}
      <button onClick={()=> addToFive(3)}>Click 4</button>
      
    </>
  )
}

export default App
