import { useState } from 'react'

import './App.css'




function App() {
  let [counter,setCounter]=useState(0);
 function addCount(){
  
  setCounter(counter+1)
  console.log(counter);
  
}
 function reduceCount(){
  
  setCounter(counter-1)
  console.log(counter);
  
}

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addCount}>Add Value {counter}</button>
     
      <button onClick={reduceCount}>remove Value {counter}</button>
    </>
  )
}

export default App
