import { useState } from 'react'

import './App.css'




function App() {
  let [counter,setCounter]=useState(1);
 function addCount(){
  if(counter<20){
   
setCounter(counter+1)
 console.log(counter);
  
  }
  
  
  
}
 function reduceCount(){
  if(counter>0){
     console.log(counter);
 setCounter(counter-1)
 
  } 
  
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
